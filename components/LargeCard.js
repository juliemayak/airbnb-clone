import Image from 'next/image';

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative my-16 cursor-pointer">
      <div className="relative min-w-[300px] h-[400px]">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      <div className="absolute top-20 left-16">
        <h3 className="text-5xl mb-3 text-white w-64">{title}</h3>
        <p className="text-white">{description}</p>
        <button className="text-lg bg-white px-7 py-3 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;

//https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=720
