export const USER_ROLE = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  USER: "user",
};

export type UserRole = keyof typeof USER_ROLE;

export const UserStatus = {
  ACTIVE: "ACTIVE",
  BLOCKED: "BLOCKED",
  DELETED: "DELETED",
};

export type UserStatusType = keyof typeof UserStatus;
