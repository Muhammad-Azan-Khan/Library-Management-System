import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import { Sparkles, BookOpen, ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Course() {
  const [authUser] = useAuth();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [likedBooks, setLikedBooks] = useState([]);

  const userId = authUser?._id || "guest";
  const storageKey = `likedBooks_${userId}`;

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

  const getBook = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4001/api/book");
      setBook(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError("Failed to load books. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  useEffect(() => {
    localStorage.removeItem("likedBooks");
    const savedLikes = JSON.parse(localStorage.getItem(storageKey)) || [];
    setLikedBooks(savedLikes);
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(likedBooks));
  }, [likedBooks, storageKey]);

  const toggleLike = (bookItem) => {
    const exists = likedBooks.some((b) => b._id === bookItem._id);
    if (exists) {
      setLikedBooks((prev) => prev.filter((b) => b._id !== bookItem._id));
    } else {
      const { _id, title, image, name } = bookItem;
      setLikedBooks((prev) => [...prev, { _id, title, image, name }]);
    }
  };

  return (
    <div className="relative bg-gray-900 min-h-screen overflow-hidden">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 relative z-10">
        <div className="pt-28 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Complete Collection
            </span>
          </div>

          <h1 className="font-black text-4xl lg:text-6xl leading-tight mb-8 text-white">
            We're delighted to have you
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block mt-2">
              Here! :)
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light mb-8">
            Welcome to our comprehensive collection of free books and courses.
            Dive into a world of knowledge where learning never stops.
          </p>

          <Link to="/">
            <button className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>

        <div className="pb-16">
          <div className="mb-12 text-center">
            <h2 className="font-black text-3xl lg:text-5xl mb-6 text-white">
              All{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Books
              </span>
            </h2>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">
                {book.length} Books Available
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {book.map((item) => (
              <div
                key={item._id || item.id}
                className="relative group transition-transform hover:scale-105"
              >
                <Cards item={item} />

                <button
                  onClick={() => toggleLike(item)}
                  className={`absolute top-2 left-2 p-2 rounded-full z-10 transition-opacity duration-300 ${
                    likedBooks.some((b) => b._id === item._id)
                      ? "bg-pink-600"
                      : "bg-gray-700/70"
                  } opacity-0 group-hover:opacity-100`}
                  title={
                    likedBooks.some((b) => b._id === item._id)
                      ? "Unlike"
                      : "Like"
                  }
                >
                  <Heart
                    className={`w-5 h-5 text-white ${
                      likedBooks.some((b) => b._id === item._id)
                        ? "fill-current text-white"
                        : ""
                    }`}
                    fill={
                      likedBooks.some((b) => b._id === item._id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              </div>
            ))}
          </div>

          {loading && (
            <p className="text-center text-gray-400 mt-10">Loading books...</p>
          )}
          {error && <p className="text-center text-red-500 mt-10">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Course;
