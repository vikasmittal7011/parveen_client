import clock from "../../constant/images/clock.png";
import analysis from "../../constant/images/analysis.png";
import graduated from "../../constant/images/graduated.png";
import customerService from "../../constant/images/customer-service.png";
import certification from "../../constant/images/certification.png";
import money from "../../constant/images/money.png";
import book from "../../constant/images/book.png";
import notepad from "../../constant/images/notepad.png";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <div className="container mx-auto py-6 md:py-20">
      <div className="text-center">
        <h1 className="text-xl base:text-2xl md:text-3xl font-bold text-gray-700 py-2">
          Provided Features
        </h1>
        <p className="text-3xl base:text-base">Our courses catalogue enable individuals and teams to perform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <FeaturesCard image={clock} title="Flexible Schedule">
          Our courses are designed to fit around your schedule. You can learn at
          your own pace and in your own time.
        </FeaturesCard>

        <FeaturesCard image={analysis} title="Fully Hands-On-Traning">
          Our courses are designed to be practical and hands-on, so you can
          learn by doing. You'll be able to apply what you learn to real-world
          problems and projects.
        </FeaturesCard>

        <FeaturesCard image={graduated} title="Studends">
          Our courses are designed to help you develop the skills you need to
          succeed in your career. You'll learn from industry experts and receive
          a certificate of completion when you finish.
        </FeaturesCard>

        <FeaturesCard image={customerService} title="Corporate Expert Training">
          Our courses are designed to help you develop the skills you need to
          succeed in your career. You'll learn from industry experts and receive
          a certificate of completion when you finish.
        </FeaturesCard>

        <FeaturesCard image={notepad} title="Updated Syllabus">
          Our courses are designed to help you develop the skills you need to
          succeed in your career. You'll learn from industry experts and receive
          a certificate of completion when you finish.
        </FeaturesCard>

        <FeaturesCard image={certification} title="Earn a Certificate">
          Our courses are designed to help you develop the skills you need to
          succeed in your career. You'll learn from industry experts and receive
          a certificate of completion when you finish.
        </FeaturesCard>

        <FeaturesCard image={money} title="Affordable Pricing">
          Our courses are designed to help you develop the skills you need to
          succeed in your career. You'll learn from industry experts and receive
          a certificate of completion when you finish.
        </FeaturesCard>

        <FeaturesCard image={book} title="Lifetime Study Material">
          Our courses are designed to help you develop the skills you need to
          succeed in your career. You'll learn from industry experts and receive
          a certificate of completion when you finish.
        </FeaturesCard>
      </div>
    </div>
  );
};

export default Features;
