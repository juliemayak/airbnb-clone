import Image from 'next/image';

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="flex flex-col sm:relative my-16 cursor-pointer ">
      <div className="relative w-fit h-[250px] sm:h-[400px]">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-t-2xl sm:rounded-2xl" />
      </div>

      <div className="bg-[#292929] sm:bg-transparent rounded-b-2xl p-5 sm:absolute sm:top-20 sm:left-10">
        <h3 className="text-3xl sm:text-5xl mb-3 text-white w-64">{title}</h3>
        <p className="text-white">{description}</p>
        <button className="text-lg bg-white px-7 py-3 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
