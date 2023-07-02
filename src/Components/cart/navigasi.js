import Link from "next/link";
const Navigasi = () => {
  return (
    <div
      className="bg-green-600 p-5 flex justify-between mb-5"
      style={{ fontFamily: "'Rubik', sans-serif" }}
    >
      <div>
        <Link href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </Link>
      </div>

      <div>
        <h3 className="text-center text-white text-lg font-semibold">
          Winda's Cake
        </h3>
      </div>
    </div>
  );
};
export default Navigasi;
