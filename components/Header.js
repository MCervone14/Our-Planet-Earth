import Link from "next/link";

import Image from "next/legacy/image";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

const links = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/ourplanet", label: "Global News" },
  { href: "/authors", label: "Team" },
];

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className="bg-charcoal flex p-5 px-[5rem] mobile:px-[3rem]">
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
      <nav className="flex gap-[5rem] items-center justify-between font-bold">
        <Link
          href="/"
          passHref
          className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden text-white font-bold "
        >
          Home
        </Link>
        <Link
          href="/articles"
          passHref
          className="cursor-pointer hover:text-[gold] desktop:visible laptop:visible mobile:hidden tablet:hidden text-white font-bold"
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
          onClick={() => {}}
        >
          Team
        </Link>
        <div className="mobile:visible mobile:mx-auto tablet:visible laptop:hidden desktop:hidden text-white">
          <Menu as="div" className="relative inline-block text-left z-50">
            <div className="z-100">
              <Menu.Button
                className="inline-flex w-full justify-center rounded-md
              bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
              focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Menu
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md
               bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {links.map((link) => (
                  <div key={link.href} className="p-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={link.href}
                          className={`${
                            active
                              ? "bg-[steelblue] text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
