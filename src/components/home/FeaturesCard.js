const FeaturesCard = ({ image, title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center p-4 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img alt={title} src={image} className="w-20 h-20" />
      <h1 className="text-xl font-bold text-gray-700 py-2">{title}</h1>
      <p className="text-gray-600 text-center">{children}</p>
    </div>
  );
};

export default FeaturesCard;
