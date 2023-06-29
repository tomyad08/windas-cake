"use client";
import NumberWithCommas from "@/Components/LandingPage/currency";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BodyPage = () => {
  const router = useRouter();
  const [dataSave, setDataSave] = useState(
    JSON.parse(localStorage.getItem("data"))
  );

  if (localStorage.getItem("data") == null) {
    return localStorage.setItem("data", "[ ]");
  }
  const handleDelete = (value) => {
    localStorage.clear("data");
    const select = dataSave.filter((data) => {
      if (data.id != value.id) {
        return data;
      }
    });
    localStorage.setItem("data", "[ ]");
    localStorage.setItem("data", JSON.stringify(select));
    setDataSave(JSON.parse(localStorage.getItem("data")));
  };

  const handlePesanan = () => {
    localStorage.clear("data");
    alert("pesanan telah terkirim");
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-center pt-5 pb-3 text-2xl font-semibold">
        Review Pembelian
      </h1>
      <p className="mx-5 text-center mb-2">
        Silahkan periksa kembali barang yang di pesan sebelum produk dibuat.
      </p>
      {dataSave ? (
        <div className="lg:flex lg:justify-center md:flex md:justify-center">
          <div className="columns-1 mx-4 py-5 xl:w-2/4 md:w-3/4">
            {dataSave.map((value) => (
              <div
                className=" border border-2 shadow-sm rounded-lg mb-2 p-2"
                key={value.id}
              >
                <p className="float-right">
                  Rp. {NumberWithCommas(value.harga_total)}
                </p>
                <p className="font-semibold"> {value.nama}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-trash3 float-right mt-1"
                  viewBox="0 0 16 16"
                  onClick={() => handleDelete(value)}
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
                <p>jumlah: {value.jumlah} pcs</p>
              </div>
            ))}

            <p
              className="px-5 py-3 rounded-full bg-green-700 text-center text-white my-5 h-12 inset-x-0 bottom-0"
              onClick={handlePesanan}
            >
              Pesanan Dikirim
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center">belum ada produk masuk keranjang</p>
      )}
    </div>
  );
};

export default BodyPage;
