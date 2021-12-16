import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import LargeCard from '../components/LargeCard';
import TodoCards from '../components/TodoCards';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import { SearchIcon, UserIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';

export default function Home({ exploreData, cardsData, todoData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb: жилье для отпуска, домики, дома на пляже, ...</title>
        <link rel="icon" href="https://icon-library.com/images/airbnb-icon/airbnb-icon-18.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header searchPage={false} />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-5">Жилье поблизости</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard img={img} location={location} distance={distance} key={location} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold py-5">Живите где угодно</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3.5 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440"
          title="Принимать гостей"
          description={
            <>
              Открывайте новые возможности <br /> и получайте доход, сдавая жилье.
            </>
          }
          buttonText="Подробнее"
        />
        <section>
          <h2 className="text-2xl font-semibold py-5">Чем заняться</h2>
          <div className="flex space-x-2 overflow-scroll scrollbar-hide p-3.5 -ml-3">
            {todoData?.map(({ img, title, description }) => (
              <TodoCards key={title} img={img} description={description} title={title} />
            ))}
          </div>
        </section>
        {/* bottom fixed mobile header */}
        <div className="fixed flex justify-center items-center space-x-12 sm:hidden bg-white h-14 bottom-0 w-full border-t-[1px] border-gray-300">
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
      <div className="bg-gray-100 text-gray-600 border-t-2">
        <div className="w-11/12 m-auto ">
          <Footer />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

//data fetch
export async function getStaticProps() {
  //api call
  const exploreData = await fetch('https://jsonkeeper.com/b/OUIW').then((res) => res.json());

  const cardsData = await fetch('https://jsonkeeper.com/b/SLSU').then((res) => res.json());

  const todoData = await fetch('https://jsonkeeper.com/b/4W0Y').then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData,
      todoData
    }
  };
}
