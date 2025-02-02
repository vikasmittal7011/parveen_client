import KeyPoint from "./KeyPoint";
import { FaRegCheckCircle } from "react-icons/fa";
import NewsPaperForm from "./NewsPaperForm";

const TopSection = () => {

  return (
    <div className="md:flex justify-between container mx-auto py-6 md:py-20 gap-2">
      <div className="text-center md:w-2/3">
        <h1 className="text-xl base:text-2xl md:text-3xl text-gray-800 font-bold py-2">
          No.1 Software (IT) Training Institute in India
        </h1>
        <p className="mx-2 base:mx-0">
          Our courses catalogue enable individuals and teams to perform.
        </p>

        <KeyPoint title="About Us" defaultShow={false}>
          ACTE ( Advanced Career & Technical Education ) is one of the India’s
          leading Class Room & Online training providers. We partner with IT
          companies and individuals to address their unique needs, providing
          training and coaching that helps working professionals achieve their
          career goals. Our training courses are designed and updated by 650+
          renowned industry experts, We have been named the No.1 most
          influential education brand in India by LinkedIn. Benefits: Reduce the
          implementation time of new services from months to minutes.
          <br />
          Increase productivity of the business and IT teams. Save costs on
          maintenance and upgrades, and eliminate unnecessary capital
          expenditure. Standardize processes for easy replication and faster
          deliver.
        </KeyPoint>

        <KeyPoint title="WHY, you join us?" defaultShow={true}>
          <div>
            <p className="flex justify-items-start items-center gap-2">
              <span><FaRegCheckCircle className="text-blue-400" /> </span>ACTE is the only training
              provider with a 100% money-back guarantee.
            </p>
          </div>
        </KeyPoint>

      </div>

      <div className="md:w-1/3 border-2 p-4 h-fit rounded-md">
        <NewsPaperForm />
      </div>
    </div>
  );
};

export default TopSection;
