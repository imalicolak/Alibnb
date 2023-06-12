"use client";

import Container from "../Container";

import { TbBeach } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import { TbMountain, TbPool } from "react-icons/tb";
import { BsFillSunFill, BsSnow } from "react-icons/bs";
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FaSkiing } from "react-icons/fa";

import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "A modern approach to living",
  },
  {
    label: "Ali's Favs",
    icon: BsFillSunFill,
    description: "You look like you need some sun! Always sunny places.",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is on the countryside.",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool.",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "Properties on an island.",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Properties close to the lake.",
  },
  {
    label: "Skiing ",
    icon: FaSkiing,
    description: "Ski over here.",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "Property in a castle.",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "You can camp here. Have some fun in the wild.",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "Freeze your ass off.",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "Explore the unknown.",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "In the desert...",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "Barn turned home.",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "Live life lux.",
  },
];
const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  // Hide Categories box on pages outside of index
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  // if we're not on main page return null
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
