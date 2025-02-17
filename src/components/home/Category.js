import { useSelector } from "react-redux";
import CategoryList from "../category/CategoryList";
import { selectcategory } from "../../features/category/categorySlice";

const Category = () => {
  const { categories } = useSelector(selectcategory);

  return (
    <div className="container mx-auto py-6 md:py-20">
      <div className="text-center">
        <h1 className="text-xl base:text-2xl md:text-3xl font-bold text-gray-700 py-2">
          Categories
        </h1>
        <p className="text-3xl xs:text-base">
          Our courses catalogue enable individuals and teams to perform.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10`}
      >
        {categories.map((category, index) => (
          <CategoryList key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;
