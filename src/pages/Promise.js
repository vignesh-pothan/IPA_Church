import React from "react";

const PromiseComponent = () => {
  return (
    <div className="text-center py-16">
      <div className="relative mb-8">
        <img
          src="/every.png"
          alt="Who We Are"
          className="w-full h-48 sm:h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold">
            Promise Words
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-8 md:space-y-12 lg:space-y-16">
        {[
          { title: "YEAR 2024", src: "/p1.png" },
          { title: "FEBRUARY 2024", src: "/p2.png" },
          { title: "MARCH 2024", src: "/p3.png" },
          { title: "APRIL 2024", src: "/p4.png" },
          { title: "MAY 2024", src: "/p5.png" },
          { title: "JUNE 2024", src: "/p6.png" },
          { title: "JULY 2024", src: "/p7.png" },
          { title: "AUGUST 2024", src: "/p8.png" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              {item.title}
            </h2>
            <img
              src={item.src}
              alt={`Word ${index + 1} Graphic`}
              className="w-full max-w-[90vw] h-auto max-h-[50vh] md:max-h-[60vh] lg:max-h-[70vh] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromiseComponent;
