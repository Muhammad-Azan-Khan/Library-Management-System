import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [authUser, setAuthUser] = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:4001/user/login", {
        email: data.email,
        password: data.password,
      });

      if (res.data.user) {
        localStorage.setItem("authUser", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        toast.success("Login successful!");

        document.getElementById("my_modal_5").close();
        document.getElementById("login-backdrop").classList.add("hidden");
        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  const handleClose = () => {
    document.getElementById("my_modal_5").close();
    document.getElementById("login-backdrop").classList.add("hidden");
  };

  return (
    <>
      {/* Background Blur */}
      <div
        id="login-backdrop"
        className="hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      ></div>

      {/* Login Modal */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle z-50"
      >
        <div className="modal-box bg-gray-900 text-white relative">
          {/* Close Button */}
          <button
            onClick={() => {
              document.getElementById("my_modal_5").close();
              document.getElementById("login-backdrop").classList.add("hidden");
            }}
            className="btn btn-sm btn-circle absolute right-3 top-3 text-white bg-gray-700 hover:bg-gray-600 border-none"
            title="Close"
          >
            ✕
          </button>

          {/* Heading */}
          <h3 className="font-bold text-xl mb-4">Login</h3>

          {/* Main Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                Login
              </button>

              <div className="text-sm text-gray-400">
                Not registered?
                <a
                  className="text-blue-400 hover:underline cursor-pointer ml-1"
                  onClick={() => {
                    handleClose(); // close login + backdrop
                    document
                      .getElementById("signup-backdrop")
                      .classList.remove("hidden");
                    document.getElementById("my_modal_6").showModal();
                  }}
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
