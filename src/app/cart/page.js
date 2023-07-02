import BodyPage from "@/Components/cart/body";
import Navigasi from "@/Components/cart/navigasi";

const Cart = () => {
  return (
    <div className="bg-white absolute h-full w-full">
      <div className="bg-white">
        <Navigasi />
        <BodyPage />
      </div>
    </div>
  );
};
export default Cart;
