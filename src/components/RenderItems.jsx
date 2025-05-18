import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteFromCart } from "../store/cartSlice";

function RenderItems({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div
      key={product.id}
      className="bg-white p-1 rounded-lg shadow-md text-center"
    >
      <div className="relative w-full h-[159px] md:h-48">
         <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain"
      />
      <div className="absolute w-7 h-7 rounded-full bg-[#2563EB] flex items-center justify-center bottom-0 right-0">
        <span className="  text-[10px] md:text-[14px]  font-[400] leading-[13px] md:leading-[20px] text-white ">{cart[product.id] || 0}</span>
      </div>
      </div>
       

      <div className="p-4 flex flex-col gap-4 md:gap-2">
        <div className="flex flex-row justify-between items-center">
          <h3 className="tex-[12px] md:text-[13px] Roboto font-[500] leading-[15px] md:leading-[24px]">
            {product.name}
          </h3>
          <p className="px-2 py-1 bg-[#F3F4F6] Roboto rounded-[4px]  text-[10px] md:text-[12px]  font-[400] leading-[10px] md:leading-[16px]">
            {product.category}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <h3 className="text-[14px] md:text-[16px] Roboto font-[700] leading-[15px] md:leading-[24px]">
            ${product.price}
          </h3>
          <p className="    Roboto  text-[#6B7280]  text-[10px] md:text-[14px]  font-[400] leading-[13px] md:leading-[20px]">
            stock: {product.stock}
          </p>
        </div>

        <div className="flex w-[76px] md:w-[122px] h-[24px] md:h-[36px] rounded-[8px] border border-[#D1D5DB]   justify-between items-center gap-2">
          <button
            onClick={() => dispatch(removeFromCart({ id: product.id }))}
            className="w-[22px]   md:w-8   h-[22px] md:h-9 bg-gray-200 rounded-[8px] text-sm flex items-center justify-center hover:bg-gray-300"
            disabled={!(cart[product.id] > 0)}
          >
            -
          </button>
          <span className="text-[9px] md:text-[14px] Roboto  font-[400] leading-[13px] md:leading-[20px]">
            {cart[product.id] || 0}
          </span>
          <button
            onClick={() => dispatch(addToCart({ id: product.id }))}
            className="w-[22px]   md:w-8   h-[22px] md:h-9 bg-gray-200 rounded-[8px] text-sm flex items-center justify-center hover:bg-gray-300"
            disabled={product.stock === (cart[product.id] || 0)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenderItems;
