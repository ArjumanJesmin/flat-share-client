import Link from "next/link";
import { usePathname } from "next/navigation";

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  child?: DrawerItem[];
}

type IProps = {
  item: DrawerItem;
};
const Sidebar = ({ item }: IProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();
  const isActive = pathname === linkPath;
  return (
    <Link href={linkPath}>
      <li
        className={`mb-1 p-2 ${
          isActive ? "border-r-4 border-blue-500 text-blue-500" : ""
        }`}
      >
        {item.title}
      </li>
    </Link>
  );
};
export default Sidebar;
