import {
  useChangeStatusMutation,
  useEditRoleMutation,
} from "@/redux/features/user";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  USER_ROLE,
  UserRole,
  UserStatusType,
} from "@/components/contants/role";
import { UserStatus } from "@/components/contants/role";

const UserManageRow = ({ users }: any) => {
  const [editRole, { isSuccess: roleSuccess, isError: roleError }] =
    useEditRoleMutation();
  const [changeStatus, { isSuccess: statusSuccess, isError: statusError }] =
    useChangeStatusMutation();
  const [selectRole, setSelectRole] = useState<{ [key: string]: UserRole }>({});
  const [selectStatus, setSelectStatus] = useState<{
    [key: string]: UserStatusType;
  }>({});

  useEffect(() => {
    if (roleSuccess) {
      toast.success("Role updated successfully");
    }
    if (roleError) {
      toast.error("Error updating role");
    }
    if (statusSuccess) {
      toast.success("Status updated successfully");
    }
    if (statusError) {
      toast.error("Error updating status");
    }
  }, [roleSuccess, roleError, statusSuccess, statusError]);

  const handleChangeRole = async (userId: string, newRole: UserRole) => {
    try {
      await editRole({ userId, role: USER_ROLE[newRole] }).unwrap();
      setSelectRole((prev) => ({ ...prev, [userId]: newRole }));
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleChangeStatus = async (
    userId: string,
    newStatus: UserStatusType
  ) => {
    try {
      await changeStatus({ userId, status: newStatus }).unwrap();
      setSelectStatus((prev) => ({ ...prev, [userId]: newStatus }));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      {users?.data?.map((user: any, index: number) => (
        <tr key={user.id}>
          <th>{index + 1}</th>
          <td>{user?.email}</td>
          <td>
            <select
              className="focus:outline-none"
              onChange={(e) =>
                handleChangeRole(user.id, e.target.value as UserRole)
              }
              value={selectRole[user.id] || user.role}
            >
              {Object.keys(USER_ROLE).map((role) => (
                <option key={role} value={role}>
                  {role.charAt(0) + role.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select
              className="focus:outline-none"
              onChange={(e) =>
                handleChangeStatus(user.id, e.target.value as UserStatusType)
              }
              value={selectStatus[user.id] || user.status}
            >
              {Object.keys(UserStatus).map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0) + status.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </td>
          <td>{new Date(user.createdAt).toLocaleDateString()}</td>
          <td>{new Date(user?.updatedAt).toLocaleDateString()}</td>
        </tr>
      ))}
    </>
  );
};

export default UserManageRow;
