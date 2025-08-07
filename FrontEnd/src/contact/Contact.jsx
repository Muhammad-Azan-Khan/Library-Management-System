import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen py-16 mt-15">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Contact Our <span className="text-blue-400">Bookstore</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Welcome to our literary haven. Find us in the heart of the city
              where stories come alive and knowledge awaits. We're here to help
              you discover your next great read.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get In <span className="text-blue-400">Touch</span>
                </h2>
                <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4h16v16H4V4zm0 0l8 8 8-8"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      For inquiries and book recommendations
                    </p>
                    <p className="text-blue-400 break-all whitespace-normal w-full max-w-xs">
                      azan.khan6082@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-200">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5h2l3 5-2.5 2.5C9 16 16 9 16 9l-2.5-2.5L19 3h2v6a1 1 0 0 1-1 1h-6z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Speak with our book experts
                    </p>
                    <p className="text-blue-400"> 0303 5204 804</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
