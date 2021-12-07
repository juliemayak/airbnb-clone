import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useRouter } from 'next/dist/client/router';
import { differenceInCalendarDays } from 'date-fns';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guestsNum } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMM yy', { locale: ru });

  let formattedEndDate = format(new Date(endDate), 'dd MMM yy', { locale: ru });

  //logic to change the endDate if it is same as startDate
  let modifiedEndDate = null;
  if (startDate === endDate) {
    const end = new Date(endDate);
    modifiedEndDate = new Date(end.getTime() + 86400000);
    formattedEndDate = format(modifiedEndDate, 'dd MMM yy', { locale: ru });
  }
  //set range of stay
  const range = `${formattedStartDate} – ${formattedEndDate} `;
  //count nights of stay
  const daysOfStay = differenceInCalendarDays(
    new Date(modifiedEndDate || endDate),
    new Date(startDate)
  );

  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${guestsNum} ${guestsNum == 1 ? 'гость' : 'гостей'}`}
        searchPage={true}
      />

      <div className="flex justify-evenly my-5 space-x-1 sm:space-x-3 mx-6 text-gray-800 no-wrap font-light text-sm mt-[110px]">
        <p className="button">Цена</p>
        <p className="button">Тип жилья</p>
        <p className="button">Бесплатная отмена</p>
        <p className="button hidden xs:inline-flex sm:hidden">Удобства</p>
        <p className="hidden button sm:inline-flex">Wi-Fi</p>
        <p className="hidden button md:inline-flex">У воды</p>
        <p className="hidden button sm:inline-flex">Кухня</p>
        <p className="hidden button xl:inline-flex">Стиральная машина</p>
        <p className="hidden button xl:inline-flex">Самостоятельное прибытие</p>
        <p className="hidden button xl:inline-flex">Фильтры</p>
      </div>

      <main className="flex">
        <section className="flex-grow px-6">
          <p className="text-xs text-gray-800 pb-3 pl-3 font-extralight">{`${location}: больше 300 вариантов жилья | ${guestsNum}
          ${guestsNum == 1 ? 'гость' : 'гостей'} | ${range}
          `}</p>

          <div className="flex flex-col">
            {searchResults?.map(({ img, title, location, price, star, description }) => (
              <InfoCard
                key={img}
                img={img}
                title={title}
                location={location}
                price={price}
                star={star}
                description={description}
                totalPrice={Number(price.replace(/\s/g, '')) * daysOfStay}
              />
            ))}
          </div>

          <div className=""></div>
        </section>

        <section className="hidden lg:inline-flex lg:min-w-[550px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
      <Contacts />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://jsonkeeper.com/b/FK4V').then((res) => res.json());

  return {
    props: {
      searchResults
    }
  };
}
