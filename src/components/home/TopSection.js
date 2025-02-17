import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW2gvtCFH3lQJFmjp3NuoydvBgsFqV04POg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTRzLea_0zPoz0O7aO_fsZNjo8V5g5FEEpA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrUb_SAqHuPx57Y-keP9dzAHNtoCo54OpRxQ&s",
];
const TopSection = () => {
  return (
    <div className="w-full mx-auto">
      {" "}
      {/* Adjust max-width for laptop screens */}
      <Carousel
        axis="horizontal" // Set the carousel to vertical mode
        showArrows={true} // Show navigation arrows
        showThumbs={false} // Hide thumbnail images
        showStatus={false} // Hide status indicator
        infiniteLoop={true} // Enable infinite looping
        autoPlay={true} // Enable auto-slide
        interval={3000} // Set auto-slide interval to 3 seconds
        stopOnHover={true} // Pause auto-slide on hover
      >
        {images.map((image, index) => (
          <div key={index} className="h-[400px] w-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TopSection;
