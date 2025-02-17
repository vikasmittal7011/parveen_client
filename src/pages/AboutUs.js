import { FaRegCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="md:flex justify-between container mx-auto py-6 md:py-10 gap-2">
      <div className="text-center">
        <h1 className="text-xl base:text-2xl md:text-3xl text-gray-800 font-bold py-2">
          No.1 Software (IT) Training Institute in India
        </h1>
        <p className="mx-2 base:mx-0">
          Our courses catalogue enable individuals and teams to perform.
        </p>

        <div className="py-4">
          <p
            className={`text-base md:text-2xl font-bold text-cyan-600 text-left`}
          >
            Who we are!
          </p>
          <div
            className={`text-base md:text-lg text-start py-4 leading-7 cursor-auto transition-transform duration-700 ease-in-out`}
          >
            It Transition Hub is one of the India’s leading Class Room & Online
            training providers. We partner with IT companies and individuals to
            address their unique needs, providing training and coaching that
            helps working professionals achieve their career goals. Our training
            courses are designed and updated by 650+ renowned industry experts,
            We have been named the No.1 most influential education brand in
            India by LinkedIn. Benefits: Reduce the implementation time of new
            services from months to minutes.
            <br />
            Increase productivity of the business and IT teams. Save costs on
            maintenance and upgrades, and eliminate unnecessary capital
            expenditure. Standardize processes for easy replication and faster
            deliver.
          </div>
        </div>
        <div className="py-4">
          <p
            className={`text-base md:text-2xl font-bold text-cyan-600 text-left`}
          >
            WHY, you join us?
          </p>
          <div
            className={`text-base md:text-lg text-start py-4 leading-7 cursor-auto transition-transform duration-700 ease-in-out`}
          >
            <div>
              <p className="flex justify-items-start items-center gap-2">
                <span>
                  <FaRegCheckCircle className="text-blue-400" />{" "}
                </span>
                ITH is the only training provider with a 100% money-back
                guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
