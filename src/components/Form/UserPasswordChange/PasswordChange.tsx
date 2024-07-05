"use client";
import { useChangePasswordMutation } from "@/redux/features/user";
import { useState } from "react";
import { toast } from "sonner";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

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
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Validate if new password matches confirmation password
    if (newPassword !== confirmationPassword) {
      setError("New password and confirmation password do not match.");
      return;
    }

    try {
      // Call the changePassword mutation function
      const res = await changePassword({ oldPassword, newPassword }).unwrap();

      // Handle success: show toast message and clear input fields
      toast.success("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmationPassword("");
    } catch (err) {
      // Handle error: display error message
      const typedError = err as ErrorResponse;
      setError(typedError?.data?.message || "Failed to change password.");
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = (type: string) => {
    switch (type) {
      case "old":
        setShowOldPassword(!showOldPassword);
        break;
      case "new":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirmation":
        setShowConfirmationPassword(!showConfirmationPassword);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-6 w-full flex justify-center">
      <div className="bg-white p-10 rounded shadow-md w-full max-w-lg">
        <h2 className="text-xl mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Old Password Input */}
          <div className="mb-4 w-full relative">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="oldPassword"
            >
              Old Password
            </label>
            <input
              id="oldPassword"
              type={showOldPassword ? "text" : "password"}
              className="w-full p-2 border rounded"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => togglePasswordVisibility("old")}
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* New Password Input */}
          <div className="mb-4 w-full relative">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              className="w-full p-2 border rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => togglePasswordVisibility("new")}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirmation Password Input */}
          <div className="mb-4 w-full relative">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="confirmationPassword"
            >
              Confirmation Password
            </label>
            <input
              id="confirmationPassword"
              type={showConfirmationPassword ? "text" : "password"}
              className="w-full p-2 border rounded"
              value={confirmationPassword}
              onChange={(e) => setConfirmationPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => togglePasswordVisibility("confirmation")}
            >
              {showConfirmationPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Error Message */}
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

          {/* Buttons: Cancel and Submit */}
          <div className="flex justify-end space-x-2">
            <button type="reset" className="btn btn-secondary">
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin text-gray-500" />
              ) : (
                "Change Password"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
