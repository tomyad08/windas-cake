"use client";

import axios from "axios";
import { useEffect } from "react";
import NumberWithCommas from "./currency";
import { useRouter } from "next/navigation";

const { useState } = require("react");

const FetchProduct = (props) => {
  const router = useRouter();
  const name = props.data.name;
  const category = props.data.category;

  const [datas, setDatas] = useState(" ");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => getData(), []);
  const getData = () => {
    axios.get("https://kue-api.vercel.app/produk").then((res) => {
      setDatas(res.data);
      setLoading(false);
    });
  };
  const handleChoice = (value) => {
    router.push(`/cart/${value.id}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="columns-2 md:columns-4 lg:columns-6 my-2 mx-2">
          {datas
            .filter((value) => {
              if (name === " ") {
                return value;
              } else if (value.tagging.includes(name.toLowerCase())) {
                return value;
              }
            })
            .filter((value) => {
              if (category === " ") {
                return value;
              } else if (value.kategori.includes(category.toLowerCase())) {
                return value;
              }
            })
            .map((value) => (
              <div
                className="border border-1 shadow-lg shadow-black-500/50 rounded-lg overflow-hidden mb-2"
                key={value.id}
                onClick={() => handleChoice(value)}
              >
                <img src={value.link} alt=" " height="50px" />
                <h5 className="px-2 font-semibold">{value.nama}</h5>
                <p className="px-2">Rp. {NumberWithCommas(value.harga)}</p>
                <div className="flex justify-center my-3">
                  <button className="rounded-full border border-2 border-green-600 py-0 px-5">
                    + Keranjang
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default FetchProduct;
