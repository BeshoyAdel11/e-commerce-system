import { useDispatch, useSelector } from "react-redux";
import delete_icon from "../assets/icons/delete.svg";
import { addToCart, removeFromCart, deleteFromCart } from "../store/cartSlice";

function RenderCart({item}) {
     const dispatch = useDispatch();
       const cart = useSelector((state) => state.cart);

  return (
    <div
      key={item.id}
      className="flex rounded-lg border border-[#F3F4F6]  h-[219px]  mb-4 p-2"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-[165px] md:w-[192px]  object-contain mr-4"
      />
      <div className="flex-1 flex flex-col justify-evenly p-4">
        <div className="flex  justify-between items-center">
          <div className="flex flex-col md:flex-row gap-2">
            <h3 className="text-[12px] md:text-[13px] Roboto font-[500] leading-[15px] md:leading-[24px]">
              {item.name}
            </h3>
            <p className="px-2 py-1 bg-[#F3F4F6] Roboto rounded-[4px] text-center  text-[10px] md:text-[12px]  font-[400] leading-[10px] md:leading-[16px]">
              {item.category}
            </p>
          </div>
          <button onClick={() => dispatch(deleteFromCart({ id: item.id }))}>
            <img
              src={delete_icon}
              alt="delete"
              className="hidden md:block w-5 h-5"
            />
          </button>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-[14px] md:text-[16px] Roboto font-[700] leading-[15px] md:leading-[24px]">
            ${item.price}
          </h3>
          <p className="    Roboto  text-[#6B7280]  text-[10px] md:text-[14px]  font-[400] leading-[13px] md:leading-[20px]">
            stock: {item.stock}
          </p>
        </div>

        <div className="flex flex-row justify-between  h-[38px] max-w-[233px] items-center border border-gray-300 rounded-md">
          <button
            onClick={() => dispatch(removeFromCart({ id: item.id }))}
            className="w-9 h-9 flex items-center rounded-sm bg-gray-200 justify-center text-sm hover:bg-gray-100 disabled:opacity-50"
            disabled={!(cart[item.id] > 0)}
          >
            -
          </button>
          <span className="w-8 text-center">{cart[item.id] || 0}</span>
          <button
            onClick={() => dispatch(addToCart({ id: item.id }))}
            className="w-9 h-9 flex items-center rounded-sm bg-gray-200 justify-center text-sm hover:bg-gray-100 disabled:opacity-50"
            disabled={item.stock === (cart[item.id] || 0)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenderCart;
