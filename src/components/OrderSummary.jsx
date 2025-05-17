import { useDispatch, useSelector } from "react-redux";
import delete_icon from "../assets/icons/delete.svg";
import { addToCart, deleteFromCart, removeFromCart } from "../store/cartSlice";

function OrderSummary({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div
      key={item.id}
      className="flex justify-between h-20  pb-4 mb-4 border-b border-b-[#E5E7EB] text-sm"
    >
      <img src={item.image} className="w-16 h-full" />

      <div className="flex-1 flex flex-col gap-2 pl-3 ">
        <div className="flex flex-row items-center justify-between">
          <span>{item.name}</span>

          <button onClick={() => dispatch(deleteFromCart({ id: item.id }))}>
            <img src={delete_icon} className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex w-[87px] h-[34px] rounded-[8px] border border-[#D1D5DB]   justify-between items-center gap-2">
            <button
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
              className="w-6 h-8 bg-gray-200 rounded-[8px] text-sm flex items-center justify-center hover:bg-gray-300"
              disabled={!(cart[item.id] > 0)}
            >
              -
            </button>
            <span className="text-[14px] Roboto  font-[400] leading-[20px]">
              {cart[item.id] || 0}
            </span>
            <button
              onClick={() => dispatch(addToCart({ id: item.id }))}
              className="w-6 h-8 bg-gray-200 rounded-[8px] text-sm flex items-center justify-center hover:bg-gray-300"
              disabled={item.stock === (cart[item.id] || 0)}
            >
              +
            </button>
          </div>

          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
/*

 
      <span>${(item.price * item.quantity).toFixed(2)}</span>
*/
