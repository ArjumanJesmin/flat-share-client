import { toast } from "sonner";
import { useState } from "react";
import {
  useChangeStatusMutation,
  useEditRoleMutation,
} from "@/redux/features/user";
import {
  USER_ROLE,
  UserRole,
  UserStatus,
  UserStatusType,
} from "@/components/contants/role";

const UserManageRow = ({ users, refetch }: any) => {
  const [editRole] = useEditRoleMutation();
  const [changeStatus] = useChangeStatusMutation();
  const [selectRole, setSelectRole] = useState<{ [key: string]: UserRole }>({});
  const [selectStatus, setSelectStatus] = useState<{
    [key: string]: UserStatusType;
  }>({});

  const handleChangeRole = async (userId: string, newRole: UserRole) => {
    setSelectRole((prev) => ({ ...prev, [userId]: newRole }));
    try {
      const res = await editRole({ userId, role: newRole }).unwrap();
      console.log(res, "checking the user role changing status");
      toast.success("Role updated successfully");
      refetch();
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Error updating role");
    }
  };

  const handleChangeStatus = async (
    userId: string,
    newStatus: UserStatusType
  ) => {
    setSelectStatus((prev) => ({ ...prev, [userId]: newStatus }));
    try {
      const res = await changeStatus({ userId, status: newStatus }).unwrap();
      console.log(res);
      toast.success("Status updated successfully");
      refetch();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Error updating status");
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
