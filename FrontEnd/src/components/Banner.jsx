// import poster from "../../public/Banner.png";

// function Banner() {
//   return (
//     <div className="bg-gray-900 text-white mt-15">
//       <div className="container mx-auto px-4 py-16 lg:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left side - Content */}
//           <div className="space-y-6">
//             <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//               Discover Your Next
//               <span className="text-blue-400 block">Great Read</span>
//             </h1>
//             <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
//               Welcome to our literary haven where stories come alive. Explore
//               thousands of books across all genres, from timeless classics to
//               contemporary bestsellers. Find your perfect escape in our
//               carefully curated collection.
//             </p>

//             <div className="w-full max-w-md space-y-4">
//               <label className="flex items-center gap-2 px-4 py-3 text-white bg-transparent border border-white/20 rounded-md text-base focus-within:ring-1 focus-within:ring-blue-300 focus-within:border-blue-300">
//                 <svg
//                   className="h-[1em] opacity-50 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <g
//                     strokeLinejoin="round"
//                     strokeLinecap="round"
//                     strokeWidth="2.5"
//                     fill="none"
//                     stroke="currentColor"
//                   >
//                     <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                   </g>
//                 </svg>
//                 <input
//                   type="email"
//                   required
//                   placeholder="Enter your email..."
//                   className="bg-transparent text-white placeholder-white/50 focus:outline-none w-full"
//                 />
//               </label>

//               <div className="validator-hint hidden">Enter your email...</div>
//               <button className="btn bg-blue-600 text-white hover:bg-blue-700 px-6">
//                 Get Started
//               </button>
//             </div>
//           </div>

//           {/* Right side - Image */}
//           <div className="relative">
//             <div className="w-full overflow-hidden rounded-lg">
//               <img
//                 src={poster}
//                 alt="Bookshelf"
//                 className="w-full h-auto object-cover"
//               />
//             </div>

//             {/* Floating elements for visual interest */}
//             <div className="hidden md:block absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
//               Free Shipping
//             </div>
//             <div className="hidden md:block absolute -bottom-4 -left-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-700">
//               24/7 Open
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;

import { useState, useEffect } from "react";
import { Mail, Sparkles, BookOpen, Star } from "lucide-react";
import poster from "../../public/Banner.png";

function Banner() {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <div className="bg-gray-900 text-white mt-15">
      {/* Background Particles and Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>

        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            top: "10%",
            left: "10%",
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-600/15 to-pink-600/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
            bottom: "10%",
            right: "10%",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 ">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Premium Book Collection
              </span>
            </div>

            {/* Heading */}
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent blur-sm">
                    Discover Your Next
                  </span>
                  <span className="relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Discover Your Next
                  </span>
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent blur-sm">
                    Great Read
                  </span>
                  <span className="relative bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                    Great Read
                  </span>
                </span>
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl -z-10 animate-pulse"></div>
            </div>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Welcome to our{" "}
              <span className="text-blue-400 font-semibold">
                literary haven
              </span>{" "}
              where stories come alive. Explore thousands of books across all
              genres, from timeless classics to contemporary bestsellers.
            </p>

            {/* Subscription */}
            <div className="w-full max-w-md space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-1">
                  <div className="flex items-center gap-3 px-4 py-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <input
                      type="email"
                      placeholder="Enter your email for book updates..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-none text-white placeholder-gray-400 focus:outline-none text-base w-full"
                    />
                  </div>
                </div>
              </div>

              <button className="relative group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Start Your Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Image (Manual img instead of Image component) */}
          <div className="relative group">
            <div className="relative transform group-hover:scale-105 transition-all duration-700 perspective-1000">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src={poster}
                    alt="Literary Haven - Modern Bookstore"
                    width="500"
                    height="600"
                    className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl -z-10 opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
            </div>

            {/* Floating Tags */}
            <div className="absolute -top-6 -right-6 transform hover:scale-110 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-50"></div>
                <div className="hidden md:block relative bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Free Shipping
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 transform hover:scale-110 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full blur opacity-50"></div>
                <div className="hidden md:block relative bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl border border-gray-600 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  24/7 Open
                </div>
              </div>
            </div>

            {/* Floating Book Shapes */}
            <div className="absolute top-10 left-10 animate-float">
              <div className="w-8 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-sm shadow-lg rotate-12 opacity-80"></div>
            </div>
            <div className="absolute bottom-20 right-10 animate-float-delayed">
              <div className="w-6 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-sm shadow-lg -rotate-12 opacity-70"></div>
            </div>
            <div className="absolute top-1/2 left-5 animate-float-slow">
              <div className="w-4 h-6 bg-gradient-to-b from-pink-500 to-pink-600 rounded-sm shadow-lg rotate-45 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-12deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

export default Banner;
