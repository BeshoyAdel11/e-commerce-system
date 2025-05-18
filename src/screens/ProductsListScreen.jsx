import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { products } from "../data/products";
import Header from "../components/Header";
import filter from "../assets/icons/filter.svg";
import search_2 from "../assets/icons/search-2.svg";
import RenderItems from "../components/RenderItems";
import OrderSummary from "../components/OrderSummary";
import FilterModal from "../components/FilterModal";
import { Link } from "react-router-dom";

function ProductList() {
  const cart = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });
  const [searchTerm, setSearchTerm] = useState("");
  const productsPerPage = 6;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange.max;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  useEffect(() => {
    const items = Object.entries(cart).map(([id, qty]) => {
      const product = products.find((p) => p.id === parseInt(id));
      return { ...product, quantity: qty };
    });
    setCartItems(items);
  }, [cart]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.0;
  const tax = 12.5;
  const total = subtotal + shipping + tax;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFilter = (filters) => {
    setSelectedCategory(filters.category);
    setPriceRange(filters.priceRange);
    setCurrentPage(1);
  };

  return (
    <section className="bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter */}
          <div className="w-[50px] hidden h-[50px] md:flex items-center justify-center rounded-[8px] bg-white">
            <button onClick={() => setIsModalOpen(true)}>
              <img src={filter} alt="filter" className="w-6 h-6" />
            </button>
            <FilterModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onFilter={handleFilter}
            />
          </div>
          {/* Products Grid */}
          <div className="w-full md:w-3/4 md:flex-shrink-1 p-6 rounded-xl bg-white">
          <div className="py-4 mb-4 hidden md:flex flex-row gap-1 text-[14px] text-[#6B7280] leading-[20px] font-[400]  Roboto ">
          <Link  to="/products">
          Home
          </Link>
          <span>/</span>
          <span className="text-[#111827]">Casual</span>
        </div>
            <div className="pb-6">
              <div className="flex flex-row rounded-lg p-3 items-center border h-[46px] border-[#E5E7EB]">
                <img
                  className="object-contain w-4 h-4"
                  src={search_2}
                  alt="search"
                />
                <input
                  type="text"
                  placeholder="Search by product name"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full text-[14px] Roboto font-[500] leading-[20px] pl-4 h-full outline-none"
                />
                <div className="w-[32px] md:hidden h-[32px] flex items-center justify-center rounded-full bg-[#F0F0F0]">
                  <button onClick={() => setIsModalOpen(true)}>
                    <img src={filter} alt="filter" className="w-4 h-4" />
                  </button>
                  <FilterModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onFilter={handleFilter}
                  />
                </div>
              </div>
            </div>
            <div className="pb-6">
              <h1 className="text-[24px] Roboto font-[700] leading-[32px]">
                Casual
              </h1>
            </div>
             <div className="pb-6">
              <span className="text-[14px] Roboto font-[400] Roboto text-[#6B7280] leading-[20px]">
              Showing 1-6 of 6 Products
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <RenderItems product={product} />
              ))}
            </div>
            <div className="flex justify-between items-center gap-4 mt-6">
              <button
                onClick={handlePrevPage}
                className="px-4 py-2 bg-gray-200 rounded-md text-[12px] md:text-[16px] Roboto font-[400] leading-[] md:leading-[24px] hover:bg-gray-300 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="flex justify-center items-center text-[12px] md:text-[16px] Roboto font-[400] leading-[24px] bg-[#000000] w-8 h-8 text-white rounded-[4px]">
                {currentPage}
              </span>
              <button
                onClick={handleNextPage}
                className="px-4 py-2 bg-gray-200 rounded-md text-[12px] md:text-[16px] leading-[20px] md:leading-[24px] hover:bg-gray-300 disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/4 md:flex-shrink-0 md:min-w-[250px] bg-gray-100">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div>
                {cartItems.map((item) => (
                  <OrderSummary item={item} />
                ))}
              </div>
              <div className="mt-2 pt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-b-[#D1D5DB] text-sm pb-3">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold mt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to={"/cart"}
                className="w-full flex items-center justify-center bg-black text-white py-2 rounded-md mt-4 hover:bg-gray-800 text-sm"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;