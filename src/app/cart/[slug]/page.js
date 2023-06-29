"use client";
import NumberWithCommas from "@/Components/LandingPage/currency";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import BodyPage from "@/Components/cart/body";
import Navigasi from "@/Components/cart/navigasi";
import { useRouter } from "next/navigation";

const BodySlug = ({ params }) => {
  const router = useRouter();
  const [data, setDatas] = useState(" ");
  const [add, setAdd] = useState(1);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    try {
      const response = await axios.get(
        `https://kue-api.vercel.app/produk/${params.slug}`
      );
      const data = response.data;

      setDatas(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  if (add < 1) {
    return setAdd(1);
  }

  const TotalPrice = add * data.harga;

  if (localStorage.getItem("data") == null) {
    return localStorage.setItem("data", "[ ]");
  }

  const handleCart = (e) => {
    e.preventDefault();
    const product = {
      id: data.id,
      nama: data.nama,
      jumlah: add,
      harga_total: TotalPrice,
    };

    const penyimpanan = JSON.parse(localStorage.getItem("data"));
    penyimpanan.push(product);

    localStorage.setItem("data", JSON.stringify(penyimpanan));
    router.push("/cart");
  };

  const handlePesanan = () => {
    localStorage.clear("data");
    alert("pesanan telah terkirim");
    router.push("/");
  };

  return (
    <div className="bg-white">
      <Navigasi />
      {data ? (
        <div>
          <div className="content w-3/4 mx-auto flex border border-0 bg-green-700 text-white rounded-lg ">
            <div>
              <img
                src={data.link}
                alt=" "
                className="w-15 h-24 md:h-80 border border-0 rounded-br-full"
              />
            </div>
            <div className="mx-auto my-auto">
              <p className="md:text-2xl">nama: {data.nama}</p>
              <p className="md:text-2xl">
                harga: Rp. {NumberWithCommas(TotalPrice)}
              </p>
              <label htmlFor="jumlah" className="md:text-2xl">
                Jumlah:{" "}
              </label>
              <input
                type="number"
                className="border border-0 text-black rounded-lg p-1 w-12"
                onChange={(e) => setAdd(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-5 mb-2 mx-5 md:px-5">
            <div>
              <button
                onClick={handleCart}
                className="px-3 py-2 border border-0 rounded-lg bg-lime-600 text-white"
              >
                + Keranjang
              </button>
            </div>
            <div>
              <button
                className="px-3 py-2 border border-0 rounded-lg bg-green-700 text-white ml-2"
                onClick={handlePesanan}
              >
                Pesan
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>loading ...</p>
      )}
      <BodyPage />
    </div>
  );
};

export default BodySlug;
