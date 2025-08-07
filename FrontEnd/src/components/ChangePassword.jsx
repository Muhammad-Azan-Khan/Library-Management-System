import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [authUser] = useAuth();
  const navigate = useNavigate();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:4001/user/change-password",
        {
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          email: data.email,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Password updated successfully!");
      reset();
      document.getElementById("change-password-modal").close();
      document
        .getElementById("change-password-backdrop")
        .classList.add("hidden");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change password");
    }
  };

  const handleClose = () => {
    document.getElementById("change-password-modal").close();
    document.getElementById("change-password-backdrop").classList.add("hidden");
  };

  useEffect(() => {
    const modal = document.getElementById("change-password-modal");
    const backdrop = document.getElementById("change-password-backdrop");

    if (modal) {
      const handleDialogClose = () => {
        backdrop?.classList.add("hidden");
      };

      modal.addEventListener("close", handleDialogClose);

      return () => {
        modal.removeEventListener("close", handleDialogClose);
      };
    }
  }, []);

  return (
    <>
      <div
        id="change-password-backdrop"
        className="hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      ></div>

      <dialog
        id="change-password-modal"
        className="modal modal-bottom sm:modal-middle z-50"
      >
        <div className="modal-box bg-gray-900 text-white relative">
          <button
            onClick={handleClose}
            className="btn btn-sm btn-circle absolute right-3 top-3 text-white bg-gray-700 hover:bg-gray-600 border-none"
            title="Close"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold mb-4">Change Password</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <label className="block mb-1 text-sm">Current Password</label>
              <input
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
                type={showCurrent ? "text" : "password"}
                className="input input-bordered w-full bg-gray-800 text-white pr-12" // Note pr-12
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute top-9 right-3 text-gray-400 hover:text-white"
              >
                {showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.currentPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>

            <div className="relative">
              <label className="block mb-1 text-sm">New Password</label>
              <input
                {...register("newPassword", {
                  required: "New password is required",
                })}
                type={showNew ? "text" : "password"}
                className="input input-bordered w-full bg-gray-800 text-white pr-12" // Note pr-12
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute top-9 right-3 text-gray-400 hover:text-white"
              >
                {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.newPassword && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                className="input input-bordered w-full bg-gray-800 text-white"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="modal-action mt-6">
              <button
                type="submit"
                className="btn bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default ChangePassword;
