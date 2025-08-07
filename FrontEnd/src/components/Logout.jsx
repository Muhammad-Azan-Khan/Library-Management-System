import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const [_, setAuthUser] = useAuth();

  const handleLogout = () => {
    setAuthUser(undefined);
    localStorage.removeItem("authUser");
    toast.success("Logout successful!");

    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="btn bg-red-600 text-white hover:bg-red-700 px-6"
    >
      Logout
    </button>
  );
}

export default Logout;
