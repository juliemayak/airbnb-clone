import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({ img, title, description, location, price, star, totalPrice }) {
  return (
    <div className="flex py-7 px-2 flex-col sm:flex-row border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-md transition duration-200 ease-out first:border-t w-full">
      <div className="relative h-80 w-full sm:w-80 sm:h-52 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
      </div>

      <div className="flex flex-col flex-grow sm:pl-5">
        <div className="flex justify-between pt-5">
          <p className="text-xs text-gray-500 font-extralight">{location}</p>
          <HeartIcon className="h-3 cursor-pointer md:h-5 sm:h-4" />
        </div>
        <h4
          className="text-lg text--gray-800 font-light
        lg:overflow-hidden lg:overflow-ellipsis lg:w-72 lg:whitespace-nowrap"
        >
          {title}
        </h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-xs text-gray-500 flex-grow font-extralight">{description}</p>

        <div className="flex justify-between pt-5">
          <p className="flex items-center text-xs font-medium">
            <StarIcon className="h-5 text-red-400 " />
            {star}
          </p>

          <div>
            <p className="text-sm pb-2 md:text-md lg:text-lg">
              <strong>{price}₽ </strong>/ ночь
            </p>
            <p className="text-right font-extralight text-xs underline">
              Всего {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}₽
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
