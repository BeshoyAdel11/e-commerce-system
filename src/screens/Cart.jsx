import { useDispatch, useSelector } from "react-redux";
 import { products } from "../data/products";
 import Header from "../components/Header";
import RenderCart from "../components/RenderCart";

function Cart() {
  
  const cart = useSelector((state) => state.cart);

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return { ...product, quantity: qty };
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.0;
  const tax = 12.5;
  const total = subtotal + shipping + tax;

  return (
    <section>
      <Header />
      <div className="container mx-auto p-4 md:p-6">
        <h2 className="text-[40px] font-[700] Roboto mb-4">Your cart</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cart Items */}
          <div className="w-full md:w-2/3  py-5 px-6 rounded-lg border border-[#F3F4F6]  ">
            {cartItems.map((item) => (
              <RenderCart item={item}/>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/3 bg-white p-4 rounded-lg border border-[#F3F4F6]">
            <div className="flex pb-6 flex-row justify-between items-center">
              <h3 className="text-[20px] font-[700] Roboto leading-[28px]">
                Order Summary (#123)
              </h3>
              <span className="text-[#2563EB] text-[16px] font-[400] Roboto leading-[28px]">
                5 May 2025
              </span>
            </div>
            <div className="space-y-2  pb-6 border-b   border-b-[#F3F4F6]">
              <div className="flex justify-between text-[14px] font-[500] Roboto leading-[20px]">
                <span className="text-[#4B5563]">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[14px] font-[500] Roboto leading-[20px]">
                <span className="text-[#4B5563]">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[14px] font-[500] Roboto leading-[20px]">
                <span className="text-[#4B5563]">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between   mt-4 text-[18px] font-[700] Roboto leading-[28px]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-black text-[16px] font-[500] Roboto leading-[24px] text-white py-2 rounded-md mt-6 hover:bg-gray-800">
              Place the order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
