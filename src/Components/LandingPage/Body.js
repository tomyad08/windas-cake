"use client";
import Link from "next/link";
import React, { useState } from "react";
import FetchProduct from "./FetchProduct";

const BodyPage = () => {
  const [name, setName] = useState(" ");
  const [category, setCategory] = useState(" ");

  const data = {
    name: name,
    category: category,
  };
  const dataKategori = [
    {
      id: 1,
      image: "/assets/cake.png",
      name: "All",
      value: " ",
    },
    {
      id: 2,
      image: "/assets/snack.png",
      name: "Snack",
      value: "snack",
    },
    {
      id: 3,
      image: "/assets/box.png",
      name: "Box",
      value: "box",
    },
    {
      id: 4,
      image: "/assets/cake-1.png",
      name: "Bolu",
      value: "bolu",
    },
  ];

  return (
    <div className="bg-white absolute h-full w-full">
      <div className="bg-white font-sans ">
        <div className="px-2 py-4 bg-green-600">
          <div>
            <input
              type="text"
              className="p-2 rounded-lg mx-2 w-3/4 md:w-2/4 lg:w-1/4"
              placeholder="Silahkan ketik di sini.."
              onChange={(e) => setName(e.target.value)}
            />
            <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                className="bi bi-cart4 float-right"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="md:columns-2">
          <div className="flex justify-around w-100 h-100 mt-4 text-center my-auto">
            {dataKategori.map((value) => (
              <div
                className="md:pt-5"
                onClick={() => setCategory(value.value)}
                key={value.id}
              >
                <img
                  src={value.image}
                  alt="box-cake"
                  className="bg-green-600 w-20 h-30  active:bg-green-200 rounded-full md:p-4 p-2"
                />
                <p>{value.name}</p>
              </div>
            ))}
          </div>

          <div className="container mx-auto p-3">
            <div className=" overflow-visible flex border border-0 rounded-lg p-5 bg-green-700 text-stone-50">
              <div>
                <img src="/assets/logo.png" alt=" " width="150px" />
              </div>
              <div className="mx-3 my-auto">
                <h3 className="text-xl font-semibold">Winda's cake aja!</h3>
                <p className="text-justify">
                  Cemilan praktis untuk kamu yang super sibuk.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FetchProduct data={data} />
      </div>
    </div>
  );
};
export default BodyPage;
