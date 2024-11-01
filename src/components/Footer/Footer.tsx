import React from "react";
import {
  gmailUrl,
  instagramUrl,
  logoUrl,
  whatsappUrl,
} from "../../assets/images/images";

function Footer() {
  return (
    <div
      className="mt-10 w-full flex flex-col items-center justify-start gap-y-4 py-8 bg-gray-900 text-white"
      data-testid="footer"
    >
      <div className="w-full md:w-[80%] flex flex-wrap items-start justify-between gap-x-6 p-4 md:p-0">
        <div className="flex flex-col items-start justify-start gap-y-6 pb-10 w-full md:w-auto">
          <h1 className="flex items-center justify-start gap-x-2 text-white capitalize font-medium text-lg xmd:text-xl leading-4">
            <img src={logoUrl} alt="logo" className="w-10 h-10" />
            MobyLife
          </h1>

          <div className="flex items-center justify-start gap-x-4">
            <a
              href="https://wa.link/iij1xd"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-green-500 transition duration-300"
            >
              <img src={whatsappUrl} alt="whatsapp" className="w-6 h-6" />
            </a>

            <a
              href="https://www.instagram.com/"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-pink-500 transition duration-300"
            >
              <img src={instagramUrl} alt="instagram" className="w-6 h-6" />
            </a>

            <a
              href="mailto:example@gmail.com"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-red-500 transition duration-300"
            >
              <img src={gmailUrl} alt="gmail" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-4 w-full md:w-auto mt-8 md:mt-0">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="flex flex-col gap-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-4 w-full md:w-auto mt-8 md:mt-0">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm">123 Street Name, City, Country</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Email: info@example.com</p>
        </div>
      </div>

      <hr className="mt-5 w-full xmd:w-[90%] h-[2px] bg-gray-700" />

      <div className="w-full xmd:w-[80%] flex items-center justify-center mt-5">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MobyLife. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;