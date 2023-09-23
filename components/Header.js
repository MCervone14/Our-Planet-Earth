import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Logo from "./Logo";

/* Documentation for Header.js file

  Header component for the website. Its at the top of every page.

  It contains the logo and navigation bar. 
  The links array contains the links for the navigation bar. Add more links there.
  
  I use headlessui -> https://headlessui.com/react/menu for the mobile navigation menu.
 
*/

const links = [
  { id: 1, href: "/", label: "Home" },
  { id: 2, href: "/articles", label: "Articles" },
  { id: 3, href: "/ourplanet", label: "Global News" },
  { id: 4, href: "/authors", label: "Team" },
];

const Header = () => {
  return (
    <header className="bg-charcoal flex p-5 px-20 mobile:px-12">
      <Logo />
      <nav className="flex gap-20 items-center justify-between font-bold">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            passHref
            className="cursor-pointer hover:text-yellow-300 desktop:visible laptop:visible mobile:hidden tablet:hidden text-white font-bold"
          >
            {link.label}
          </Link>
        ))}
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
