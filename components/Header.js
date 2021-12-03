import Image from 'next/image';
import { useState } from 'react';
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

function Header({ placeholder }) {
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

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-6 md:h-7 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push('/')}
        />
      </div>

      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="md:pl-5 bg-transparent outline-none flex-1 text-sm text-gray-600 placeholder-gray-400 "
          type="text"
          placeholder={placeholder || 'Начать поиск'}
        />
        <SearchIcon
          onClick={search}
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 "
        />
      </div>

      <div className="flex items-center justify-end text-gray-500 space-x-2 ">
        <p className="hidden md:inline cursor-pointer">Сдайте жилье </p>
        <GlobeAltIcon className="h-5 md:h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-0.5 md:p-2 rounded-full">
          <MenuIcon className="h-4 md:h-6" />
          <UserCircleIcon className="h-4 md:h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto ">
          <DateRange
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
            locale={ru}
          />
          <div className="flex items-center border-b mb-4 ">
            <h2 className="text-lg pl-5 flex-grow font-light">Количество гостей</h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={guestsNum}
              onChange={(e) => setGuestsNum(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Отменить
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Искать
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
