import Link from "next/link";
import { Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <header className="bg-[steelblue] flex text-white p-[.3125rem] px-[15rem]">
      <div className="mt-[.625rem] w-full">
        <Link href="/" passHref>
          <h2 className="text-[2rem] cursor-pointer font-[Tangerine] hover:text-[gold] mobile:hidden">
            Our Planet Earth
          </h2>
        </Link>
      </div>
      <nav className="flex gap-[5rem] items-center">
        <Link href="/" passHref>
          <h5 className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden ">
            Home
          </h5>
        </Link>
        <Link href="/articles" passHref>
          <h5 className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden">
            Articles
          </h5>
        </Link>
        <Link href="/authors" passHref>
          <h5 className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden">
            Team
          </h5>
        </Link>
        <div className="mobile:visible mobile:mx-auto tablet:visible laptop:hidden desktop:hidden">
          <Dropdown
            label="Menu"
            style={{
              backgroundColor: "steelblue",
            }}
          >
            <Dropdown.Item>
              <Link href="/" passHref>
                <h5 className="cursor-pointer hover:text-[steelblue]">Home</h5>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/articles" passHref>
                <h5 className="cursor-pointer hover:text-[steelblue]">
                  Articles
                </h5>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/authors" passHref>
                <h5 className="cursor-pointer hover:text-[steelblue]">Team</h5>
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </div>
      </nav>
    </header>
  );
};

export default Header;
