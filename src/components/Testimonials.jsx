import React from "react";
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto  py-10  lg:px-32 w-full overflow-hidden text-center px-6 md:px-20"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        "Real Stories from those who found their dream homes with us"
      </p>
      <div className="flex flex-wrap justify-center  gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="max-w-[340px]   rounded px-8 py-12 text-center">
            <img className="w-20 h-20 rounded-full mx-auto mb-4 " src={testimonial.image} alt={testimonial.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
