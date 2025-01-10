import React from "react";
import Slider from "react-slick"; // React Slick Carousel
import "slick-carousel/slick/slick.css"; // Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel Theme CSS

const reviews = [
  {
    name: "albert",
    username: "@albert_123",
    body: "The best platform for learning languages. Highly recommend! The learning process is smooth and enjoyable.",
    img: "https://avatar.vercel.sh/emily",
    rating: 5,
    date: "Jan 5, 2025",
    location: "New York, USA",
    verified: true,
  },
  {
    name: "siam",
    username: "@siam_student",
    body: "Made incredible progress here. Love it! The one-on-one sessions really helped me grow and the community is great.",
    img: "https://avatar.vercel.sh/liam",
    rating: 5,
    date: "Aug 18, 2024",
    location: "Sydney, Australia",
    verified: true,
  },
  {
    name: "Alice",
    username: "@alice_scholar",
    body: "A fantastic experience overall! The tutors are very professional, and the platform is very intuitive to use.",
    img: "https://avatar.vercel.sh/alice",
    rating: 5,
    date: "Jan 2, 2025",
    location: "Berlin, Germany",
    verified: true,
  },
  {
    name: "Olivia",
    username: "@olivia_languages",
    body: "Fun and effective learning experience! I’ve improved my skills rapidly and the entire experience has been fantastic.",
    img: "https://avatar.vercel.sh/olivia",
    rating: 5,
    date: "Sep 22, 2024",
    location: "Paris, France",
    verified: false,
  },
];

// Review card component
const ReviewCard = ({ img, name, username, body, rating, date, location, verified }) => (
  <div className="w-full px-2">
    <figure className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-[400px] w-[280px] mx-auto mb-2">
      <img className="w-24 h-24 rounded-full mb-4 border-4 border-gray-200" alt={name} src={img} />
      <figcaption className="text-lg font-semibold text-center text-gray-800">{name}</figcaption>
      <p className="text-xs text-center text-gray-500 mb-2">{username}</p>
      <div className="text-xs text-center mb-2">
        {verified ? (
          <span className="text-green-500 font-semibold">Verified User</span>
        ) : (
          <span className="text-red-500 font-semibold">Unverified User</span>
        )}
      </div>
      <div className="flex items-center justify-center mb-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill={index < rating ? "gold" : "gray"}
          >
            <path d="M10 15l-3.1 1.8.6-3.6L3.5 8.6l3.7-.3L10 5l1.8 3.3 3.7.3-2.9 5.6.6 3.6z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-center text-gray-600 mb-2">{body}</p>
      <p className="text-xs text-center text-gray-400">{location} | {date}</p>
    </figure>
  </div>
);

// Slick Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// Main component
const ReviewCarousel = () => (
  <div className="w-full overflow-hidden bg-gray-200">
    <div className="max-w-screen-xl mx-auto text-center px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        What Our <span className="text-red-600">Users</span> Say
      </h2>
      <p className="text-lg text-gray-600 mb-8">Share Experience both teachers and learners</p>
      <div>
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Slider>
      </div>
    </div>
  </div>
);

export default ReviewCarousel;
