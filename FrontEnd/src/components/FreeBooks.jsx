import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { BookOpen, Sparkles } from "lucide-react";
import Cards from "./Cards";

function FreeBooks() {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const res = await axios.get("http://localhost:4001/api/book");
      setBook(res.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  const filterData = book.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dotsClass: "slick-dots custom-dots",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 py-20 overflow-hidden">
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Free Collection
            </span>
          </div>

          <h1 className="relative font-black text-4xl lg:text-6xl pb-6 leading-tight">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent blur-sm">
              Free Offered Books
            </span>
            <span className="relative bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Free Offered
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Books
              </span>
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-6">
            Discover our collection of free books across various genres. From
            classic literature to contemporary fiction, expand your library
            without spending a penny.
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">
              {filterData.length} Free Books Available
            </span>
          </div>
        </div>

        <div className="slider-container mb-12 md: px-3">
          <Slider {...settings}>
            {filterData.map((item) => (
              <div key={item._id || item.id} className="md:px-3">
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .custom-dots {
          bottom: -60px;
        }
        .custom-dots li button:before {
          color: #60a5fa;
          font-size: 14px;
          opacity: 0.5;
        }
        .custom-dots li.slick-active button:before {
          color: #2563eb;
          opacity: 1;
        }
        .slick-prev:before,
        .slick-next:before {
          color: #60a5fa;
          font-size: 24px;
        }
        .slick-prev,
        .slick-next {
          z-index: 1;
        }
        .slick-prev {
          left: -40px;
        }
        .slick-next {
          right: -40px;
        }
        .slick-prev:hover:before,
        .slick-next:hover:before {
          color: #2563eb;
        }
      `}</style>
    </div>
  );
}

export default FreeBooks;
