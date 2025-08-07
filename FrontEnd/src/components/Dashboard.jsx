import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Cards from "./Cards";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { BookOpen, Sparkles, Star, Trash2 } from "lucide-react";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthProvider";
import ChangePassword from "./ChangePassword";

function Dashboard() {
  const [authUser] = useAuth();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [books, setBooks] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const fetchUserBooks = async () => {
    try {
      const res = await axios.post("http://localhost:4001/api/book/userbooks", {
        userId: authUser._id,
      });
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    if (authUser?._id) {
      fetchUserBooks();
    }
  }, [authUser]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("title", data.title);
    formData.append("image", data.image[0]);
    formData.append("userId", authUser._id);

    try {
      const res = await axios.post("http://localhost:4001/api/book", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        toast.success("✅ Book added successfully!");
        reset();
        fetchUserBooks();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Failed to upload book");
    }
  };

  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() => {
    if (authUser?._id) {
      const userLikes =
        JSON.parse(localStorage.getItem(`likedBooks_${authUser._id}`)) || [];
      setLikedBooks(userLikes);
    }
  }, [authUser]);

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:4001/api/book/${selectedBookId}`);
      toast.success("Book deleted successfully!");
      setShowDeleteModal(false);
      fetchUserBooks();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete book");
    }
  };

  const handleDelete = (bookId) => {
    setSelectedBookId(bookId);
    setShowDeleteModal(true);
  };

  const handleUnlike = (bookId) => {
    const updatedLikes = likedBooks.filter(
      (book) => book._id !== bookId && book.id !== bookId
    );
    setLikedBooks(updatedLikes);
    localStorage.setItem(
      `likedBooks_${authUser._id}`,
      JSON.stringify(updatedLikes)
    );
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-hidden text-white">
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
              top: "20%",
              left: "10%",
            }}
          ></div>
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${
                mousePosition.y * -0.01
              }px)`,
              bottom: "20%",
              right: "10%",
            }}
          ></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 py-8 relative z-10">
          <div className="text-center mb-16 pt-20">
            <div className="inline-flex gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                User Dashboard
              </span>
            </div>
            <h1 className="relative font-black text-4xl lg:text-6xl leading-tight mb-4">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent blur-sm">
                Welcome!
              </span>
              <span className="relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Welcome!
              </span>
              <br />
              <span className="relative bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2 block">
                {authUser.fullname.split(" ")[0]}
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Manage your profile and discover new books
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-800/60 p-8 rounded-2xl shadow-2xl border border-gray-700 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="../../public/user.png"
                  alt="avatar"
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
                <div>
                  <h2 className="text-xl font-bold">{authUser.fullname}</h2>
                  <p className="text-blue-400 text-sm">Member since 2025</p>
                </div>
              </div>
              <p>
                <span className="text-blue-400 font-semibold">Email:</span>{" "}
                {authUser.email}
              </p>
              <p>
                <span className="text-blue-400 font-semibold">Role:</span> User
              </p>
              <p>
                <span className="text-blue-400 font-semibold">
                  Liked Books:
                </span>
                {likedBooks.length}
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 shadow hover:shadow-purple-500/20 transition">
              <h2 className="text-xl font-semibold mb-2">Change Password</h2>
              <p className="text-sm text-gray-400 mb-4">
                Update your account password securely.
              </p>
              <button
                className="btn bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => {
                  document
                    .getElementById("change-password-backdrop")
                    .classList.remove("hidden");
                  document.getElementById("change-password-modal").showModal();
                }}
              >
                Change Password
              </button>
              <ChangePassword />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Liked Books</h2>
            {likedBooks.length === 0 ? (
              <p className="text-gray-400">No books liked yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {likedBooks.map((book) => (
                  <div key={book._id || book.id} className="relative group">
                    <Cards item={book} />
                    <button
                      onClick={() => handleUnlike(book._id || book.id)}
                      className="absolute top-2 right-2 bg-pink-600 hover:bg-pink-700 p-2 rounded-full z-10"
                      title="Unlike Book"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Your Uploads</h2>
            {books.length === 0 ? (
              <p className="text-gray-400">No uploads yet.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map((item) => (
                  <div key={item._id} className="relative group">
                    <Cards item={item} />
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 p-2 rounded-full z-10"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative rounded-xl p-6 mb-16 border border-gray-700 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-lg shadow-lg transition hover:shadow-green-500/20">
            <div className="absolute inset-0 rounded-xl bg-green-500/10 blur-xl opacity-20 animate-pulse pointer-events-none"></div>
            <h2 className="text-3xl font-extrabold mb-6 text-white">
              Upload a New Book
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
              encType="multipart/form-data"
            >
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Book Name"
                className="bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="Book Description"
                className="bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                {...register("category")}
                placeholder="Category"
                className="bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="file"
                accept="image/*"
                {...register("image", { required: true })}
                className="bg-gray-800 border border-gray-600 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-2 rounded-full font-semibold col-span-1 md:col-span-2 shadow-md hover:shadow-green-500/30 transition"
              >
                <BookOpen className="inline w-4 h-4 mr-1" /> Add Book
              </button>
            </form>
          </div>

          <DeleteConfirmationModal
            open={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={confirmDelete}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
