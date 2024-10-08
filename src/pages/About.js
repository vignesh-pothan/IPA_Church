import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative mb-8">
        <img
          src="/every.png"
          alt="Who We Are"
          className="w-full h-48 sm:h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold">
            About Us
          </h1>
        </div>
      </div>
      {/* Content Section */}
      <div className="text-center py-10 px-4 sm:py-20 sm:px-6 lg:px-24">
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-6 sm:mb-10">
          Welcome to IPA Church, Tirunelveli—a vibrant and welcoming community
          where faith comes alive. Situated on N Bypass Road, Vannarpettai, our
          church is part of the Indian Pentecostal Assemblies network, dedicated
          to spreading the love and teachings of Jesus Christ.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-6 sm:mb-10">
          At IPA Church, we believe in the power of prayer, worship, and
          community. Our services are filled with passionate worship, heartfelt
          prayers, and messages that inspire and uplift. We are committed to
          nurturing spiritual growth and fostering a strong sense of belonging
          among our members.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-6 sm:mb-10">
          Whether you are new to faith or looking to deepen your relationship
          with God, IPA Church is here for you. Join us for our weekly services,
          Bible studies, and community events. Together, we strive to make a
          positive impact in our local community and beyond.
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
          Come and experience the warmth, love, and spiritual enrichment that
          IPA Church, Tirunelveli, has to offer. We look forward to welcoming
          you into our family.
        </p>
      </div>
    </div>
  );
};

export default About;
