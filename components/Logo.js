import Link from "next/link";
import Image from "next/legacy/image";

/* Documentation for Logo.js file

  Logo component for the website.
  It is used in the Header component.
 
*/

const Logo = () => {
  return (
    <div className="mt-2.5 w-full flex items-center gap-2 ">
      <Link href="/" passHref>
        <Image
          src="/images/earth64.png"
          width={64}
          height={64}
          alt="logo"
          className="cursor-pointer"
        />
      </Link>
      <Link
        href="/"
        passHref
        className="font-[Tangerine] text-5xl hover:text-yellow-300 cursor-pointer text-white mobile:hidden"
      >
        Our Planet Earth
      </Link>
    </div>
  );
};

export default Logo;
