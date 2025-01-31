import React, { useState } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  VideoCameraIcon,
  CpuChipIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/20/solid";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const NavLinks = ({ open }) => {
  const [navLinks] = useState([
    {
      title: "Product Page",
      icon: VideoCameraIcon,
      link: "/template-team/v2v-training",
    },
  ]);
  const pathname = usePathname();
  return (
    <div className="h-full flex gap-2 flex-col w-full overflow-x-hidden m mt-8">
      {navLinks?.map((data) => {
        const Icon = data.icon;
        return (
          <Link
            href={data.link}
            className={clsx(
              "w-full bg-white p-2 rounded-lg flex gap-2 flex-nowrap ",
              {
                "text-primary font-semibold": pathname === data.link,
                "text-slate-900": pathname !== data.link,
              }
            )}
            key={data.link}
            title={data.title}
          >
            <Icon className="w-4" />
            {open ? (
              <p className="text-sm whitespace-nowrap">{data.title}</p>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
