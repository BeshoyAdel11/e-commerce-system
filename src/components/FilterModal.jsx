import { useState } from "react";

const categories = ["All", "T-shirts", "Polo", "Jeans", "Shirts"];

function FilterModal({ isOpen, onClose, onFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });

  const handleFilter = () => {
    onFilter({ category: selectedCategory, priceRange });
    onClose();
  };

  const handleReset = () => {
    setSelectedCategory("All");
    setPriceRange({ min: 0, max: 300 });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <h2 className="text-[20px] Roboto  font-[700] leading-[28px] mb-4">
          Filters
        </h2>
        <div className="mb-6">
          <label className="block text-[16px] Roboto  font-[500] leading-[24px] mb-2">
            Price
          </label>
          <input
            type="range"
            min="0"
            max="300"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
            }
            className="w-full accent-black"
          />
          <div className="flex  justify-between text-[14px] Roboto  font-[400] leading-[20px] ">
            <span>${priceRange.min}</span>
            <span>${priceRange.max}</span>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-[16px] Roboto  font-[500] leading-[24px] mb-2">
            Category
          </label>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-2">
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              <label
                htmlFor={category}
                className="text-[14px] Roboto  font-[400] leading-[20px]"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-200 rounded-md  text-[#6B7280] text-[14px] Roboto  font-[400] leading-[20px] hover:bg-gray-300"
          >
            Clear all filters
          </button>
          <button
            onClick={handleFilter}
            className="px-4 py-2 bg-black text-white rounded-md text-[16px] Roboto  font-[500] leading-[24px] hover:bg-gray-800"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
