import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/outline';

function PopupCard({ img, title, price, star, location }) {
  return (
    <div>
      {/* Image */}
      <div className="relative h-44 w-full flex-shrink-0 ">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
        <HeartIcon className="absolute h-6 text-white top-0 right-2" />
      </div>

      {/* Information */}
      <div className="flex flex-col flex-grow pt-3 pl-3">
        {/* Rating */}
        <p className="flex items-center text-xs font-medium">
          <StarIcon className="h-5 text-red-400 " />
          {star}
        </p>

        {/* Location & Title */}
        <div className="text-md font-extralight">
          <p className="lg:overflow-hidden lg:overflow-ellipsis lg:w-60 lg:whitespace-nowrap">
            {location}
          </p>
          <h4 className="lg:overflow-hidden lg:overflow-ellipsis lg:w-60 lg:whitespace-nowrap">
            {title}
          </h4>
        </div>
        {/* Price */}
        <div className="flex justify-between pt-1">
          <p className="text-sm">
            <strong>{price}₽ </strong>/ ночь
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopupCard;
