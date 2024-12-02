import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white container mx-auto text-black p-6 sm:p-6 rounded-[29px] m-[20px] mt-[80px]  md:mt-[130px] relative">
      <div className="footer-shadow"></div>
      {/* Top Section */}
      <div className="flex justify-center items-center text-center flex-col mt-[48px]">
        {/* Logo */}
        <Image
          src="/assets/logo/logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className="mb-6"
        />

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-normal mt-6">
          <Link href="#features" className="hover:underline">
            Features
          </Link>
          <Link href="#pricing" className="hover:underline">
            Pricing
          </Link>
          <Link href="#how-it-works" className="hover:underline">
            How It Works
          </Link>
          <Link href="#" className="hover:underline">
            Resources
          </Link>
          <Link href="#" className="hover:underline">
            Support
          </Link>
          <Link href="#" className="hover:underline">
            FAQ’s
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-10 border-gray-300" />

      <div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
        <div>
          <p className="text-sm sm:text-base">
            © 2024 Qbicorn. All rights reserved.
          </p>
        </div>

        <div className="text-center">
          <Link href="#" className="text-sm sm:text-base hover:underline ">
            Privacy Policy
          </Link>
        </div>

        <div className="flex justify-center sm:justify-end gap-4">
          <div className="bg-gray-200 rounded-[11px] p-3 hover:bg-gray-300 transition">
            <Image
              src="/assets/svg/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-gray-200 rounded-[11px] p-3 hover:bg-gray-300 transition">
            <Image
              src="/assets/svg/x.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
          </div>
          <div className="bg-gray-200 rounded-[11px] p-3 hover:bg-gray-300 transition">
            <Image
              src="/assets/svg/instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
