import React from "react";

const Contact = () => {
  return (
    <div className="text-center py-8 sm:py-16">
      {/* Hero Section */}
      <div className="relative mb-8">
        <img
          src="/every.png"
          alt="Who We Are"
          className="w-full h-48 sm:h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-extrabold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Introductory Text */}
      <p className="mb-6 sm:mb-8 text-lg sm:text-2xl font-semibold px-4 sm:px-8 lg:px-32">
        We would love to hear from you! Whether you have a question, need
        prayer, or want to learn more about our church, feel free to reach out
        to us.
      </p>

      {/* Locations Section */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6 sm:mb-8 px-4">
        <div className="w-full sm:max-w-xs md:max-w-sm p-4 sm:p-6 border rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            City IPA Church
          </h2>
          <p className="font-semibold text-lg sm:text-xl">Visit Us:</p>
          <p className="text-base sm:text-lg font-normal">
            N Bypass Road, Vannarpettai, Tirunelveli, Tamil Nadu, India
          </p>
          <p className="font-semibold text-lg sm:text-xl mt-2">
            Service Times:
          </p>
          <p className="text-base sm:text-lg font-normal">
            Sunday Worship: 8:30 AM - 11:00 AM (Except first Sunday)
          </p>
        </div>

        <div className="w-full sm:max-w-xs md:max-w-sm p-4 sm:p-6 border rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Ebenezer IPA Church
          </h2>
          <p className="font-semibold text-lg sm:text-xl">Visit Us:</p>
          <p className="text-base sm:text-lg font-normal">
            Thiruvengadanatha Puram, Tirunelveli, Tamil Nadu, India
          </p>
          <p className="font-semibold text-lg sm:text-xl mt-2">
            Service Times:
          </p>
          <p className="text-base sm:text-lg font-normal">
            Sunday Worship: 6:00 AM - 8:30 AM (Except first Sunday)
          </p>
        </div>

        <div className="w-full sm:max-w-xs md:max-w-sm p-4 sm:p-6 border rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Hi-Tech IPA Church
          </h2>
          <p className="font-semibold text-lg sm:text-xl">Visit Us:</p>
          <p className="text-base sm:text-lg font-normal">
            Kokkirakulam, Tirunelveli, Tamil Nadu, India
          </p>
          <p className="font-semibold text-lg sm:text-xl mt-2">
            Service Times:
          </p>
          <p className="text-base sm:text-lg font-normal">
            Sunday Worship: 6:30 PM - 8:00 PM (Except first Sunday)
          </p>
        </div>
      </div>

      {/* Contact and Social Links Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8 px-4">
        <div className="flex-1 max-w-xs sm:max-w-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Get in Touch:</h2>
          <p className="text-lg sm:text-xl font-semibold">
            Phone: +91 94434 97344
          </p>
        </div>

        <div className="flex-1 max-w-xs sm:max-w-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Connect with Us:
          </h2>
          <div className="flex justify-center gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=100076057789026"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </a>
            <a
              href="https://www.instagram.com/city_ipa_church?igsh=dXQ2em5odmQ4bmNn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </a>
            <a
              href="https://www.youtube.com/@cityipachurchtirunelveli8296"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-lg mx-auto mt-8 p-4 sm:p-6 border rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Submit the Form to Contact
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-left text-lg font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-lg font-semibold mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Phone Number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-lg font-semibold mb-2">
              Message / Prayer Request:
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Message or Prayer Request"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
