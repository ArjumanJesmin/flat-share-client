"use client";
import { useChangePasswordMutation } from "@/redux/features/user";
import { useState } from "react";
import { toast } from "sonner";

interface ErrorResponse {
  data?: {
    message?: string;
  };
}

const PasswordChange = () => {
  const [
    changePassword,
    { isLoading, isSuccess, isError, error: mutationError },
  ] = useChangePasswordMutation();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmationPassword) {
      setError("New password and confirmation password do not match.");
      return;
    }

    try {
      const res = await changePassword({ oldPassword, newPassword }).unwrap();
      toast.success("Password changed successfully!");
      // Clear input fields
      setOldPassword("");
      setNewPassword("");
      setConfirmationPassword("");
    } catch (err) {
      const typedError = err as ErrorResponse;
      setError(typedError?.data?.message || "Failed to change password.");
    }
  };

  return (
    <div className="p-6 w-full flex justify-center">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-lg">
        <h2 className="text-xl mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 w-full">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <input
              id="oldPassword"
              type="password"
              className="w-full p-2 border rounded"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              className="w-full p-2 border rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="confirmationPassword"
            >
              Confirmation Password
            </label>
            <input
              id="confirmationPassword"
              type="password"
              className="w-full p-2 border rounded"
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <div className="flex justify-end space-x-2">
            <button type="reset" className="btn btn-secondary">
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
