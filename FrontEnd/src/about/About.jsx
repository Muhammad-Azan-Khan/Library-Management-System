import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function About() {
  const iconWrapper =
    "bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-6";
  const bigIconWrapper =
    "bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4";
  const svgClass = "w-6 h-6 text-white";
  const bigSvgClass = "w-8 h-8 text-white";

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen py-16 mt-15">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              About <span className="text-blue-400">Literary Haven</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              More than just a bookstore, we're a sanctuary for book lovers, a
              community hub for literary enthusiasts, and a gateway to countless
              worlds waiting to be discovered.
            </p>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our <span className="text-blue-400">Foundation</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our
                commitment to the literary community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                <div className={iconWrapper}>
                  <svg
                    className={svgClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To inspire, educate, and connect our community through the
                  transformative power of books...
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                <div className={iconWrapper}>
                  <svg
                    className={svgClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 20v-6m0 0V4m0 10H4m8 0h8"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the premier destination for book lovers, fostering a
                  lifelong love of reading and learning...
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                <div className={iconWrapper}>
                  <svg
                    className={svgClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42
                    4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01
                    14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4
                    6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Values
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passion for literature, commitment to community, dedication to
                  quality, and belief in stories...
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                What Makes Us <span className="text-blue-400">Special</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Discover the unique features and services that set Literary
                Haven apart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:scale-105 transition-transform duration-200">
                <div className={bigIconWrapper}>
                  <svg
                    className={bigSvgClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 16v-2m8-8h-2m-12 0H4m16.24 4.24l-1.42-1.42M6.34 6.34L4.92 4.92m12.02 0l1.42 1.42M6.34 17.66l-1.42 1.42"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Curated Selection
                </h3>
                <p className="text-gray-300 text-sm">
                  Every book is hand-picked by our expert team.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:scale-105 transition-transform duration-200">
                <div className={bigIconWrapper}>
                  <svg
                    className={bigSvgClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a4 4 0 10-8 0 4 4 0 008 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm-14 0a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Community Events
                </h3>
                <p className="text-gray-300 text-sm">
                  Book clubs, readings, and more.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:scale-105 transition-transform duration-200">
                <div className={bigIconWrapper}>
                  <svg
                    className={bigSvgClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.75L18.67 21l-1.8-7.73L22 9.24l-7.81-.67L12 2 9.81 8.57 2 9.24l5.13 4.03L5.33 21z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Personal Service
                </h3>
                <p className="text-gray-300 text-sm">
                  Tailored book recommendations.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center hover:scale-105 transition-transform duration-200">
                <div className={bigIconWrapper}>
                  <svg
                    className={bigSvgClass}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7l6 6-6 6M21 7l-6 6 6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Rare Collections
                </h3>
                <p className="text-gray-300 text-sm">
                  First editions and signed copies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
