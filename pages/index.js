import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Cuaca from "../components/cuaca";

export default function Home() {
  const [kota, setKota] = useState("");
  const [cuaca, setCuaca] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchCuaca = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setCuaca(response.data);
      // console.log(response.data);
    });
    setKota("");
    setLoading(false);
  };

  // if (loading) {
  //   return { Spinner };
  // } else {
  // }

  return (
    <div>
      <Head>
        <title>App Cuaca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]" /> */}

      {/* Background Image */}
{/* 
      <Image
        src=""
        alt=""
        layout="fill"
        className="object-cover"
      /> */}
      {/* Judul */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <p>fahrurrozi</p>
      </div>
      {/* Search */}
      <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form
          onSubmit={fetchCuaca}
          className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
        >
          <div>
            <input
              onChange={(e) => setKota(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-gray-200"
              type="text"
              placeholder="Cari Kota"
            />
          </div>
          <button onClick={fetchCuaca}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/* Cuaca */}

      {cuaca.main && <Cuaca data={cuaca} />}
    </div>
  );
}