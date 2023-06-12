"use client";

import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  // Destructuring, renames icon to Icon to be able to use as component
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    // empty query
    let currentQuery = {};

    // look through params
    if (params) {
      // creates object out of current parameters. parsing turns into object
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      // label will be assigned category label in url
      ...currentQuery,
      category: label,
    };

    // if category clicked is the same as url, delete
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }
    // generated url with newest query
    const url = qs.stringifyUrl(
      {
        // query == updatedQuery
        url: "/",
        query: updatedQuery,
      },
      // filtered all empty urls
      { skipNull: true }
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
