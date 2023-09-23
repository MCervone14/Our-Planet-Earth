import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

/* Documentation for CategoryList.js file

  Categories in the articles page. 

  Displays the category icons.
 
  */

const categoryIcons = [
  { url: "/LSAP_icons/LSAP_Goals_Wheel.png", label: "All-Action-Platforms" },
  {
    url: "/LSAP_icons/LSAP_1_Response_to_the_Cry_of_the_Earth.png",
    label: "Cry-of-the-Earth",
  },
  {
    url: "/LSAP_icons/LSAP_2_Response_to_the_Cry_of_the_Poor.png",
    label: "Cry-of-the-Poor",
  },
  {
    url: "/LSAP_icons/LSAP_3_Ecological_Economics.png",
    label: "Ecological-Economics",
  },
  {
    url: "/LSAP_icons/LSAP_4_Adoption_of_Sustainable_Lifestyles.png",
    label: "Simple-Lifestyles",
  },
  {
    url: "/LSAP_icons/LSAP_5_Ecological_Education.png",
    label: "Ecological-Education",
  },
  {
    url: "/LSAP_icons/LSAP_6_Ecological_Spirituality.png",
    label: "Ecological-Spirituality",
  },
  {
    url: "/LSAP_icons/LSAP_7_Community_Resilience_and_Empowerment.png",
    label: "Community-Involvement",
  },
];

const CategoryList = ({ categories }) => {
  const router = useRouter();
  const [activeLabel, setActiveLabel] = useState(
    router.query.category_name || "all-action-platforms"
  );

  useEffect(() => {
    setActiveLabel(router.query.category_name || "all-action-platforms");
  }, [router.query.category_name]);

  return (
    <div className="flex items-center justify-around w-full mt-2 z-100">
      <ul className="grid gap-5 mobile:grid-cols-4 tablet:grid-cols-4 laptop:grid-cols-4 desktop:grid-cols-8">
        {categoryIcons.map((icon, index) => (
          <li className="list-none rounded-full z-100" key={index}>
            <Link
              href={
                icon.label.toLowerCase() === "all-action-platforms"
                  ? "/articles"
                  : `/articles/category/${icon.label.toLowerCase()}`
              }
              className="rounded-full z-100"
            >
              <Image
                src={icon.url}
                width={100}
                height={50}
                onClick={(e) => setActiveLabel(icon.label)}
                className={`cursor-pointer  border-4 hover:opacity-90 rounded-full border-[steelblue]/0 z-100 ${
                  icon.label.toLowerCase() === activeLabel
                    ? "border-[steelblue]/100"
                    : ""
                }`}
                alt={icon.label}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
