import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useRouter } from 'next/dist/client/router';
import { differenceInCalendarDays } from 'date-fns';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import { SearchIcon, UsersIcon, UserIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';
import Image from 'next/image';

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
      <Header placeholder={`${location} | ${range} г. | гостей: ${guestsNum} `} searchPage={true} />

      {searchResults.length && (
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
      )}

      <main className="flex relative">
        {!searchResults.length && (
          <div className="opacity-80 ">
            <Image src="/notFound.jpeg" layout="fill" objectFit="cover" />
          </div>
        )}
        <section className="flex-grow px-2">
          {searchResults.length ? (
            <p className="text-xs text-gray-800 pb-3 pl-3 font-extralight">{`${location}: больше 300 вариантов жилья | гостей: ${guestsNum} | ${range} г.
          `}</p>
          ) : (
            <div className="flex flex-col mb-2 justify-center items-center w-full h-screen relative">
              <div className="absolute top-1/2 p-2 rounded-lg text-center bg-gray-50 z-10 opacity-80">
                <h1 className="text-2xl text-gray-800 pb-3 pl-3 font-extralight">
                  К сожалению, варианты для города{' '}
                  <span className="text-red-400 font-medium">{location}</span> на ваши даты
                  отсутствуют.
                </h1>
                <p className="text-lg text-gray-800 pb-3 pl-3 font-extralight">{`Вы можете найти доступное жилье в городах: Москва, Санкт-Петербург, Казань`}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col">
            {searchResults.map(({ img, title, location, price, star, description }) => (
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
        </section>

        {searchResults.length && (
          <section className="hidden lg:flex lg:w-[40%]">
            <Map searchResults={searchResults} />
          </section>
        )}

        {/* bottom fixed mobile header */}
        <div className="fixed w-full flex justify-center items-center space-x-12 sm:hidden bg-white h-14 bottom-0  border-t-[1px] border-gray-300">
          <div
            className="flex flex-col justify-center"
            onClick={() => {
              router.push({
                pathname: '/'
              });
            }}
          >
            <SearchIcon className="h-6 text-red-400 cursor-pointer" />
            <span className="text-xs font-extralight">Поиск</span>
          </div>
          <div className="flex flex-col justify-center">
            <HeartIcon className="h-6 text-gray-400 cursor-pointer active:text-red-400" />
            <span className="text-xs font-extralight">Вишлисты</span>
          </div>
          <div className="flex flex-col justify-center">
            <UserIcon
              className="h-6 text-gray-400 cursor-pointer
            active:text-red-400
            "
            />
            <span className="text-xs font-extralight">Войти</span>
          </div>
        </div>
      </main>

      <Footer />
      <Contacts />
    </div>
  );
}

export default Search;

export async function getServerSideProps({ query }) {
  // const results = await fetch('https://jsonkeeper.com/b/EJR3').then((res) => res.json());
  const results = await fetch('https://jsonkeeper.com/b/GKUQ').then((res) => res.json());

  const searchResults = results.filter((item) => item.place === query.location);
  return {
    props: {
      searchResults
    }
  };
}
