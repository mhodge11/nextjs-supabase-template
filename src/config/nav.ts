import {
  type DropdownNavItem,
  type MainNavItem,
  type SidebarNavItem,
} from "@/types/nav";

interface NavConfig {
  main: MainNavItem[];
  dropdown: DropdownNavItem[];
  exampleSidebar: SidebarNavItem[];
}

export const navConfig: NavConfig = {
  main: [
    {
      title: "Example",
      href: "/example",
    },
  ],
  dropdown: [
    {
      title: "Example Dropdown",
      items: [
        {
          title: "Dropdown 1",
          href: "/dropdown-1",
          items: [],
        },
      ],
    },
  ],
  exampleSidebar: [
    {
      title: "Example Sidebar",
      items: [
        {
          title: "Sidebar 1",
          href: "/sidebar-1",
          items: [],
        },
      ],
    },
  ],
};
