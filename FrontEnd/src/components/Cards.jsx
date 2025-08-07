import { useState } from "react";

function Cards({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mt-4 my-3 p-3">
      <div
        className="group relative transform transition-all duration-500 hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 3D Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
          {/* Image Section */}
          <figure className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10"></div>
            <img
              src={
                item.image ||
                "/placeholder.svg?height=250&width=300&query=book cover"
              }
              alt={item.name || item.title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />

            {/* Floating Circles */}
            {isHovered && (
              <>
                <div className="absolute top-1/4 left-4 animate-bounce">
                  <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
                </div>
                <div className="absolute top-1/2 right-6 animate-ping">
                  <div className="w-1 h-1 bg-purple-400 rounded-full opacity-80"></div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 animate-bounce">
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full opacity-70"></div>
                </div>
              </>
            )}
          </figure>

          {/* Content */}
          <div className="p-6 relative">
            {/* Title */}
            <div className="mb-3">
              <h2 className="relative font-bold text-lg leading-tight">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent blur-sm">
                  {item.name || item.title}
                </span>
                <span className="relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent line-clamp-2">
                  {item.name || item.title}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
              {item.description ||
                item.title ||
                "A wonderful book waiting to be discovered in our literary collection."}
            </p>

            {/* Author */}
            {/* {item.author && (
              <p className="text-blue-400 text-xs mb-3 font-medium">
                by {item.author}
              </p>
            )} */}

            {/* Price & Button */}
            <div className="flex items-center justify-between">
              <div className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent blur-sm text-xl font-bold">
                  FREE
                </span>
                <span className="relative bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-xl font-bold">
                  FREE
                </span>
              </div>

              <button className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  📖 Get
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < (item.rating || 4) ? "text-yellow-400" : "text-gray-600"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-xs text-gray-400 ml-1">
                ({item.rating || 4.0})
              </span>
            </div>
          </div>

          {/* Border Highlight */}
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>

        {/* Shadow Glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
}

export default Cards;
