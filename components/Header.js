import Link from "next/link";
import { Dropdown } from "flowbite-react";

const Header = () => {
  return (
    <header className="bg-[steelblue] text-white p-[.3125rem]  mb-[2.5rem] w-[100%]">
      <div className="relative flex justify-between items-center px-[2rem] mt-[.625rem] w-[100%]">
        <div>
          <Link href="/" passHref>
            <h2 className="text-[2rem] cursor-pointer font-[Tangerine] hover:text-[gold] tablet:text-center mobile:text-center">
              Our Mother Earth
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-[3.125rem]">
          <Link href="/" passHref>
            <h5 className="mx-[1.5rem] cursor-pointer hover:text-[gold] desktop:visible mobile:invisible tablet:invisible">
              Home
            </h5>
          </Link>
          <Link href="/articles" passHref>
            <h5 className="mx-[1.5rem] cursor-pointer hover:text-[gold] desktop:visible mobile:invisible tablet:invisible">
              Articles
            </h5>
          </Link>
          <Link href="/authors" passHref>
            <h5 className="mx-[1.5rem] cursor-pointer hover:text-[gold] desktop:visible mobile:invisible tablet:invisible">
              Team
            </h5>
          </Link>
          <div className="mobile:visible tablet:visible desktop:invisible">
            <Dropdown
              label="Menu"
              style={{
                backgroundColor: "steelblue",
              }}
            >
              <Dropdown.Item>
                <Link href="/" passHref>
                  <h5 className="mx-[1.5rem] cursor-pointer hover:text-[steelblue]">
                    Home
                  </h5>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/articles" passHref>
                  <h5 className="mx-[1.5rem] cursor-pointer hover:text-[steelblue]">
                    Articles
                  </h5>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/authors" passHref>
                  <h5 className="mx-[1.5rem] cursor-pointer hover:text-[steelblue]">
                    Team
                  </h5>
                </Link>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
