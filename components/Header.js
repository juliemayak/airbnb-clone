import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
//styling
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { ru } from 'date-fns/locale';

function Header({ placeholder, searchPage }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestsNum, setGuestsNum] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges?.selection.startDate);
    setEndDate(ranges?.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestsNum
      }
    });
  };

  //nav bar animation
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShow(true);
        setSearchInput('');
      } else setShow(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <header
      className={`
      fixed flex top-0 z-50 px-5 py-2 md:py-4 md:px-10 w-full transition-all ease-in duration-300 justify-between
      ${(show || searchPage) && 'bg-white shadow-md '}
      `}
    >
      <div className="relative sm:w-[150px] h-7 cursor-pointer my-auto">
        {show || searchPage ? (
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            onClick={() => router.push('/')}
          />
        ) : (
          <Image
            src="/LogoAirbnb.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            onClick={() => router.push('/')}
          />
        )}
      </div>

      <div className="flex flex-1 rounded-full py-2 border-2 shadow-sm justify-between max-w-[600px]">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={`pl-5 bg-transparent outline-none text-sm w-11/12 ${
            show || searchPage
              ? 'text-gray-600 placeholder-gray-400'
              : 'placeholder-white text-white'
          }`}
          type="text"
          placeholder={placeholder || 'Начать поиск'}
        />
        <SearchIcon
          onClick={search}
          className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2 "
        />
      </div>

      <div
        className={`hidden sm:flex w-[250px] items-center justify-end space-x-2 ${
          show || searchPage ? 'text-gray-500' : 'text-white'
        }`}
      >
        <p className=" pl-2 text-xs sm:text-sm md:text-md cursor-pointer">Сдайте жилье</p>
        <GlobeAltIcon className="h-5 md:h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-1 md:p-2 rounded-full">
          <MenuIcon className="h-5 md:h-6" />
          <UserCircleIcon className="h-5 md:h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex absolute top-[70px] flex-col mx-auto bg-white rounded-lg shadow-md left-[50%] sm:left-[45%] md:left-[46%] lg:left-[48%] transform -translate-x-2/4">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
            locale={ru}
          />
          <div className="flex items-center border-b mb-4 ">
            <h2 className="text-sm pl-5 pb-1 flex-grow font-light">Количество гостей</h2>
            <UsersIcon className="h-4" />
            <input
              type="number"
              className="w-12 pl-2 text-sm outline-none text-red-400"
              value={guestsNum}
              onChange={(e) => setGuestsNum(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex text-sm -mt-4">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500 hover:bg-red-400 transition-all p-2 rounded-sm ease-in-out duration-250
              "
            >
              Отменить
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400
            hover:bg-red-400 hover:text-gray-500 transition-all ease-in-out duration-250
            "
            >
              Искать
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
