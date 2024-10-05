import React from 'react';
import { gmailUrl, instagramUrl, logoUrl, whatsappUrl } from '../../assets/images/dynamicImages/images';

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-y-2 xmd:gap-y-8 py-8" data-testid="footer">
      <div className="w-full md:w-[80%] flex flex-wrap items-start justify-between gap-x-3 p-4 md:p-0">
        <div className="flex flex-col items-start justify-start gap-y-6 pb-10 w-full md:w-auto">
          <h1 className="flex items-end justify-start gap-x-1 xmd:gap-x-2 text-primary capitalize font-medium text-lg xmd:text-xl leading-4">
            <img src={logoUrl} alt="logo" className='w-[20%]' />
          </h1>

          <div className="flex items-start justify-start gap-x-6">
            <a
              href="https://wa.link/iij1xd"
              className="w-[27px] h-[27px] md:w-[40px] md:h-[40px] border border-grey3 p-1"
            >
              <img src={whatsappUrl} alt="whatsapp" className="w-full h-full" />
            </a>

            <a
              href="https://www.instagram.com/"
              className="w-[27px] h-[27px] md:w-[40px] md:h-[40px] border border-grey3 p-1"
            >
              <img src={instagramUrl} alt="instagram" className="w-full h-full" />
            </a>

            <a
              href="mailto:jeanpaulelissa99@gmail.com"
              className="w-[27px] h-[27px] md:w-[40px] md:h-[40px] border border-grey3 p-1"
            >
              <img src={gmailUrl} alt="gmail" className="w-full h-full" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-2 pb-10 w-full md:w-auto">
          <h2 className="flex items-center justify-start gap-x-2 text-primary font-medium text-base md:text-lg">
            Address / Office
          </h2>
          <div className="flex flex-col gap-y-1 text-xs text-grey2">
            <p>Kigali-Rwanda</p>
            <p>Kicukiro, Gikondo</p>
            <p>Tel No: +250785044398</p>
            <p>Email: ndevulion@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-2 pb-10 w-full md:w-auto">
          <h2 className="flex items-center justify-start gap-x-2 text-primary font-medium text-base md:text-lg">
            Terms and Conditions
          </h2>
          <div className="flex flex-col gap-y-1 text-xs text-grey2">
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-2 pb-10 w-full md:w-auto">
          <h2 className="flex items-center justify-start gap-x-2 text-primary font-medium text-base md:text-lg">
            Support Team
          </h2>
          <div className="flex flex-col gap-y-1 text-xs text-grey2">
            <a href="/support" className="hover:underline">Contact Support</a>
            <a href="/faq" className="hover:underline">FAQ</a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-2 pb-10 w-full md:w-auto">
          <h2 className="flex items-center justify-start gap-x-2 text-primary font-medium text-base md:text-lg">
            About Us
          </h2>
          <div className="flex flex-col gap-y-1 text-xs text-grey2">
            <a href="/about" className="hover:underline">Our Story</a>
            <a href="/team" className="hover:underline">Our Team</a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-y-2 pb-10 w-full md:w-auto">
          <h2 className="flex items-center justify-start gap-x-2 text-primary font-medium text-base md:text-lg">
            Community
          </h2>
          <div className="flex flex-col gap-y-1 text-xs text-grey2">
            <a href="/community" className="hover:underline">Community Guidelines</a>
            <a href="/events" className="hover:underline">Events</a>
          </div>
        </div>
      </div>
      <hr className="w-[95%] xmd:w-[80%] h-[2px] bg-grey3" />
      <div className="w-full flex items-center justify-center">
        <p className="text-primary text-sm md:text-base">
          © {new Date().getFullYear()} Mobylife. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;