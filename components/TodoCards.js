import Image from 'next/image';

function TodoCards({ title, img, description }) {
  return (
    <div className="cursor-pointer">
      <div className="relative w-[305px] h-[300px] sm:w-[375px] sm:h-[375px] ">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3 font-medium">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TodoCards;
