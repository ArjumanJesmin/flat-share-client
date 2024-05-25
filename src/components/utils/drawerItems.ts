import { TDrawerItem } from "@/types/common";
import { USER_ROLE, UserRole } from "../contants/role";

export const drawerItems = (role: UserRole): TDrawerItem[] => {
  const roleMenus: TDrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
    },
  ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "Manage-users",
          path: `${role}/manage-users`,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "User-Management",
          path: `${role}/userManagement`,
        },
        {
          title: "Flat-Management",
          path: `${role}/flatManagement`,
        },
        {
          title: "Flat Post",
          path: `${role}/flatPost`,
        }
      );
      break;
    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
        },
        {
          title: "Users-details",
          path: `${role}/user-details`,
        },
        {
          title: "Flat Post",
          path: `${role}/flatPost`,
        }
      );
      break;
  }
  return [...roleMenus, ...defaultMenus];
};
