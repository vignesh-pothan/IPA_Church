import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Section 1 */}
      <div className="relative" id="home">
        <img
          src="/main.png"
          alt="Welcome"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 px-4">
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-4">
            என் சமுகம் உனக்கு முன்பாகச் செல்லும், நான் உனக்கு இளைப்பாறுதல்
            தருவேன்
          </h1>
          <h3 className="text-white text-xl md:text-2xl font-medium">
            யாத்திராகமம் 33:14
          </h3>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gray-900 text-white py-8 md:py-16" id="vision">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
            Our Vision
          </h2>
          <div className="flex flex-col md:flex-row justify-center md:space-x-24 space-y-8 md:space-y-0">
            {/* Church Planting */}
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Church Planting
              </h3>
              <p className="text-base md:text-lg">
                Driven by the Great Commission, we aim to plant new churches in
                unreached areas, sharing the gospel, and establishing
                communities of faith. We believe in empowering leaders,
                equipping them to spread the message of Jesus Christ, and
                establishing new congregations that continue to grow and thrive.
              </p>
            </div>
            {/* Church Growth */}
            <div className="md:w-1/2">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                Church Growth
              </h3>
              <p className="text-base md:text-lg">
                We are committed to nurturing a thriving, spiritually vibrant
                community where every believer can grow in their faith and walk
                with Christ. Our focus is on deepening our connection with God,
                expanding our congregation, and fostering a strong sense of
                belonging among our members.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="text-center py-4 md:py-8 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
          <div>
            <img
              src="/s1.png"
              alt="Vannarpettai"
              className="w-full object-cover"
            />
            <p className="mt-2 font-bold text-black text-lg md:text-xl">
              Pas. Praveen Kumar M.Th
              <br />
              Senior Pastor
            </p>
          </div>
          <div>
            <img
              src="/s2.png"
              alt="Thiruvengadanathapuram"
              className="w-full object-cover"
            />
            <p className="mt-2 font-bold text-black text-lg md:text-xl">
              Sis. Elizabeth Praveen Kumar
            </p>
          </div>
          <div>
            <img
              src="/s3.png"
              alt="KOKKIRAKULAM"
              className="w-full object-cover"
            />
            <p className="mt-2 font-bold text-black text-lg md:text-xl">
              Pas. CD Jeyaraj
              <br />
              Assistant Pastor
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div id="services" className="py-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Recent Uploads
          </h2>
          <div className="relative mx-auto w-full max-w-4xl">
            {" "}
            {/* Adjust max-w to make it larger */}
            {/* Embed YouTube video */}
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/cxFWetWxCTI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="text-center py-8 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-4">
          ONE CHURCH. THREE LOCATIONS
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0">
          <div>
            <h3 className="text-lg md:text-xl font-bold mt-4 uppercase mb-4">
              VANNARPETTAI
            </h3>
            <img
              src="/v1.png"
              alt="Vannarpettai"
              className="w-full h-60 md:h-80 object-cover"
            />
            <p className="mt-2 text-gray-600 font-semibold">
              Vannarpettai
              <br />
              Every Sunday 8:30 AM - 11 AM
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mt-4 uppercase mb-4">
              THIRUVENGADANATHAPURAM
            </h3>
            <img
              src="/v2.png"
              alt="Thiruvengadanathapuram"
              className="w-full h-60 md:h-80 object-cover"
            />
            <p className="mt-2 text-gray-600 font-semibold">
              Thiruvengadanathapuram
              <br />
              Every Sunday 6:00 AM - 8:30 AM (Except first Sunday)
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mt-4 uppercase mb-4">
              KOKKIRAKULAM
            </h3>
            <img
              src="/v3.png"
              alt="Kokkirakulam"
              className="w-full h-60 md:h-80 object-cover"
            />
            <p className="mt-2 text-gray-600 font-semibold">
              Kokkirakulam
              <br />
              Every Sunday 6:30 PM - 8 PM (Except first Sunday)
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="bg-orange-500 text-center py-8 md:py-16 px-4" id="about">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Follow us on social media.
        </h2>
        <div className="flex justify-center space-x-4 md:space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100076057789026"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="w-6 h-6 md:w-8 md:h-8"
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
              className="w-6 h-6 md:w-8 md:h-8"
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
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        </div>
      </div>

      {/* Section 7 (Footer) */}
      <div className="bg-gray-800 text-white py-8 px-4" id="contact">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <h3 className="text-lg md:text-xl font-semibold">Address</h3>
            <p>N Bypass Road, Vannarpettai, Tirunelveli, Tamil Nadu 627003</p>
            <p>Phone: +91 94434 97344</p>
          </div>
          <div className="md:w-1/2 md:pl-4 text-left md:text-right mt-4 md:mt-0">
            <h3 className="text-lg md:text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="hover:underline">
                  Our Ministries
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center">
          © {new Date().getFullYear()} IPA CHURCH TIRUNELVELI | All Rights
          Reserved
        </p>
        <p className="mt-6 text-right text-sm text-gray-400 md:ml-auto md:w-auto">
          Developed by @BhowmikzAR
        </p>
      </div>
    </div>
  );
};

export default MainContent;
