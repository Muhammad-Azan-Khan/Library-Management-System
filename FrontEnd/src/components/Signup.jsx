import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [authUser, setAuthUser] = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data.user) {
          toast.success("Signup successful!");
          localStorage.setItem("authUser", JSON.stringify(res.data.user));
          setAuthUser(res.data.user);
          navigate("/dashboard");

          document.getElementById("my_modal_6").close();
          document.getElementById("signup-backdrop").classList.add("hidden");
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };

  return (
    <>
      {/* Background Blur */}
      <div
        id="signup-backdrop"
        className="hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      ></div>

      {/* Signup Modal */}
      <dialog
        id="my_modal_6"
        className="modal modal-bottom sm:modal-middle z-50"
      >
        <div className="modal-box bg-gray-900 text-white relative">
          {/* Close Button */}
          <button
            onClick={() => {
              document.getElementById("my_modal_6").close();
              document
                .getElementById("signup-backdrop")
                .classList.add("hidden");
            }}
            className="btn btn-sm btn-circle absolute right-3 top-3 text-white bg-gray-700 hover:bg-gray-600 border-none"
            title="Close"
          >
            ✕
          </button>

          <h3 className="font-bold text-xl mb-4">Sign Up</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                {...register("fullname", { required: "Name is required" })}
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
              {errors.fullname && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-gray-800 text-white"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="modal-action mt-6 flex justify-between items-center">
              <button
                type="submit"
                className="btn bg-blue-600 text-white hover:bg-blue-700 px-6"
              >
                Sign up
              </button>

              <p className="text-sm text-gray-400">
                Already have an account?{" "}
                <a
                  className="text-blue-400 hover:underline cursor-pointer ml-1"
                  onClick={() => {
                    // Close signup and its backdrop
                    document.getElementById("my_modal_6").close();
                    document
                      .getElementById("signup-backdrop")
                      .classList.add("hidden");

                    // Show login and its backdrop
                    document
                      .getElementById("login-backdrop")
                      .classList.remove("hidden");
                    document.getElementById("my_modal_5").showModal();
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Signup;
