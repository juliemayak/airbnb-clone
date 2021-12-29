import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        // src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        src="https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_q=highq&im_w=1920"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-2/3 w-full text-center">
        <p className="text-white text-sm sm:text-lg md:text-xl font-semibold">
          Не знаете, куда поехать? <br /> Отлично.
        </p>
        <button className="bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 cursor-pointer hover:shadow-xl active:scale-90 transition duration-150">
          <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-700 via-pink-600 to-red-600">
            Гибкий поиск
          </span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
//text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 via-pink-500 to-red-600
