
import { useState } from "react";
import { categories } from "@/data/products";
import { CheckIcon } from "lucide-react";

interface CategoryFilterProps {
  selectedCategories: string[];
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategories, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-3">الفئات</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="flex items-center">
            <button
              onClick={() => onSelectCategory(category.name)}
              className="flex items-center justify-between w-full py-1 px-2 rounded hover:bg-gray-50"
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded border mr-2 flex items-center justify-center ${
                  selectedCategories.includes(category.name) 
                    ? "bg-primary border-primary" 
                    : "border-gray-300"
                }`}>
                  {selectedCategories.includes(category.name) && <CheckIcon className="h-3 w-3 text-white" />}
                </div>
                <span className="text-gray-700">{category.name}</span>
              </div>
              <span className="text-sm text-gray-500">{category.count}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
