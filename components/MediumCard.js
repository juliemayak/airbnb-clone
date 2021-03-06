import Image from 'next/image';

function MediumCard({ img, title }) {
  return (
    <div
      className=" cursor-pointer sm:hover:scale-105 transform transition duration-300 ease-out
     "
    >
      <div className="relative w-[279px] h-[279px] ">
        <Image src={img} layout="fill" className="rounded-xl" objectFit="cover" />
      </div>
      <h3 className="text-xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
