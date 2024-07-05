"use client";

import { FaRegEdit } from "react-icons/fa";
import user from "@/assets/user.svg";
import ChangePasswordModal from "@/components/Form/ChangePasswordModal";
import {
  useChangePasswordMutation,
  useGetUserMeQuery,
} from "@/redux/features/user";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const MyProfile = () => {
  const { data: getMe, isLoading, isError } = useGetUserMeQuery("");
  const [changePassword] = useChangePasswordMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePasswordChange = async (
    oldPassword: string,
    newPassword: string
  ) => {
    try {
      await changePassword({ oldPassword, newPassword }).unwrap();
      setIsModalOpen(false);
      toast.success("Password changed successfully!");
    } catch (error) {
      console.error("Failed to change password:", error);
      toast.error("Failed to change password. Please try again.");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading profile</div>;

  return (
    <div className="p-6 mx-4 w-full">
      {/* Full Width Card */}
      <div className="m-4 px-10 rounded-lg shadow-lg bg-white">
        <div className="flex justify-between items-center py-8">
          <div>
            <h2 className="text-lg font-medium">
              User Name:{" "}
              <span className="text-blue-500">{getMe?.data?.username}</span>
            </h2>
            <h2 className="text-sm text-gray-600">
              User Email:{" "}
              <span className="text-yellow-500">{getMe?.data?.email}</span>
            </h2>
            <h2 className="text-sm text-gray-600">
              Role: <span className="text-green-600">{getMe?.data?.role}</span>
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={user} alt="Edit image" width={50} height={50} />
          </div>
        </div>
      </div>

      {/* Two Columns Grid */}
      <div className="grid lg:grid-cols-2 gap-5 m-4 p-10 rounded shadow bg-white">
        <div className="bg-gray-100 p-5 rounded">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Personal Information</h2>
                <FaRegEdit size={20} />
              </div>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">Password</h2>
                <button onClick={() => setIsModalOpen(true)}>
                  <FaRegEdit size={20} />
                </button>
              </div>
              <p>
                If you want to change this password, you must keep it secret.
                Ensure that the password remains confidential.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePasswordChange}
      />
    </div>
  );
};

export default MyProfile;
