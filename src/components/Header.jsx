import logo from "../assets/images/logo.png";
import cart from "../assets/icons/cart.svg";
import search from "../assets/icons/search.svg";
import menue from "../assets/icons/Menu.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="bg-white">
      <div className=" flex px-4 py-3 md:p-4 flex-row items-center justify-between container">
        <div className="flex flex-row  items-center gap-2 md:gap-4">
          <Link to="/products">
            <img
              className="object-contain block md:hidden w-5 h-6"
              src={menue}
              alt="menue"
            />
          </Link>
          <div className="w-20 h-8 md:w-24 md:h-8">
            <img
              className="w-full h-full object-contain"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex flex-row items-center gap-4">
            <button className="w-36 h-9 font-medium text-sm leading-5 Roboto rounded bg-white text-black">
              Products
            </button>
            <Link
              to="/products"
              className="w-36 h-9 font-medium text-sm flex justify-center items-center leading-5 Roboto rounded bg-black text-white"
            >
              Sell Your Product
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 md:gap-4">
          <button>
            <img
              className="block md:hidden object-contain w-6 h-6"
              src={search}
              alt="search"
            />
          </button>
          <button>
            <img
              className="object-contain w-5 h-6 md:w-6 md:h-7"
              src={cart}
              alt="Cart"
            />
          </button>
          <Link to="/" className="w-16 h-9 flex items-center justify-center font-medium text-sm leading-5 Roboto rounded bg-black text-white">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
