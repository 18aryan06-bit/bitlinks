import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold" >
            The best URL shortener in the maeket
          </p>
          <p className="px-30">
            We are the most straightforward URL shortener in the world. MOst of the url shortener will track you or ask you to give
            your details for login we unterstand your needs and hence you are created this url shortener.
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 text-white text-center  font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1  text-white text-center font-bold'>GitHub</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/bull.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}