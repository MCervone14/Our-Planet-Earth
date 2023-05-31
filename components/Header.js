import Link from "next/link";
import { Dropdown } from "flowbite-react";
import Image from "next/legacy/image";

const Header = () => {
  return (
    <header className="bg-[steelblue] flex text-white p-5 px-[5rem] mobile:px-[3rem]">
      <div className="mt-[.625rem] w-full flex items-center gap-2 ">
        <Link href="/" passHref>
          <Image
            src="/images/earth64.png"
            width={64}
            height={64}
            alt="logo"
            className="text-[2rem] cursor-pointer font-[Tangerine] "
          />
        </Link>
        <Link
          href="/"
          passHref
          className="font-[Tangerine] text-[3rem] hover:text-[gold] cursor-pointer text-white mobile:hidden"
        >
          Our Planet Earth
        </Link>
      </div>
      <nav className="flex gap-[5rem] items-center justify-between">
        <Link
          href="/"
          passHref
          className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden text-white"
        >
          Home
        </Link>
        <Link
          href="/articles"
          passHref
          className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden text-white"
        >
          Articles
        </Link>
        <Link
          href="/ourplanet"
          passHref
          className="cursor-pointer text-center hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden text-white"
        >
          Global News
        </Link>
        <Link
          href="/authors"
          passHref
          className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden text-white"
        >
          Team
        </Link>
        <div className="mobile:visible mobile:mx-auto tablet:visible laptop:hidden desktop:hidden text-white">
          <Dropdown
            label="Menu"
            style={{
              backgroundColor: "steelblue",
            }}
          >
            <Dropdown.Item>
              <Link
                href="/"
                passHref
                className="cursor-pointer hover:text-[steelblue]"
              >
                Home
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="/articles"
                passHref
                className="cursor-pointer hover:text-[steelblue]"
              >
                Articles
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="/ourplanet"
                passHref
                className="cursor-pointer hover:text-[steelblue]"
              >
                Global News
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="/authors"
                passHref
                className="cursor-pointer hover:text-[steelblue]"
              >
                Team
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </nav>
    </header>
  );
};

export default Header;
