import { Heart, MessageCircle, Star } from "lucide-react";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Williams",
      role: "client Member",
      image: "/images/a.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, cor adipiscing elits sed diam nonummy. Lorem ipsum dolor sit amet.",
      likes: "20K",
      comments: "500",
      date: "July 10 , 20xx",
      activeSlide: 0
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "client Member",
      image: "/images/b.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, cor adipiscing elits sed diam nonummy. Lorem ipsum dolor sit amet.",
      likes: "15K",
      comments: "300",
      date: "July 15 , 20xx",
      activeSlide: 0
    },
    {
      id: 3,
      name: "Michael Smith",
      role: "client Member",
      image: "/images/c.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, cor adipiscing elits sed diam nonummy. Lorem ipsum dolor sit amet.",
      likes: "25K",
      comments: "600",
      date: "July 20 , 20xx",
      activeSlide: 0
    },
    {
      id: 4,
      name: "Emily Brown",
      role: "client Member",
      image: "/images/d.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, cor adipiscing elits sed diam nonummy. Lorem ipsum dolor sit amet.",
      likes: "18K",
      comments: "450",
      date: "July 25 , 20xx",
      activeSlide: 0
    },
    {
      id: 5,
      name: "David Wilson",
      role: "client Member",
      image: "/images/a.jpg",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, cor adipiscing elits sed diam nonummy. Lorem ipsum dolor sit amet.",
      likes: "22K",
      comments: "550",
      date: "August 1 , 20xx",
      activeSlide: 1
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "client Member",
      image: "/images/a.jpg",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, cor adipiscing elits sed diam nonummy. Lorem ipsum dolor sit amet.",
      likes: "19K",
      comments: "480",
      date: "August 5 , 20xx",
      activeSlide: 0
    }
  ];

  return (
    <section className="bg-white max-w-6xl h-auto mx-auto py-10 mt-8 px-4 md:px-0" id="testimonials">
      <div className="text-center text-foreground mb-6 md:mb-4 font-semibold">
        <h2 className="text-xs md:text-sm">Testimonials</h2>
        <h1 className="text-xl md:text-2xl">
          What Our Clients Say'<span className="text-amber-300">s</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="h-auto max-w-2xl p-2 rounded-xl bg-gray-100 space-y-4">
              <div className="flex gap-2">
                <div className="w-20 h-20 rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full bg-center object-cover rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-xl font-semibold">{testimonial.name}</h1>
                  <h2 className="text-sm">{testimonial.role}</h2>
                  <h3 className="flex gap-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-500 ml-1"
                        size={20}
                        fill="currentColor"
                      />
                    ))}
                  </h3>
                </div>
              </div>
              <p>
                {testimonial.text}
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <h1 className="flex text-center items-center gap-1">
                    {" "}
                    <Heart className="size-3" /> {testimonial.likes}{" "}
                    <span className="flex items-center gap-1">
                      <MessageCircle className="size-3" /> {testimonial.comments}
                    </span>
                  </h1>
                </div>
                <h2>{testimonial.date}</h2>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-center mt-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`w-5 h-auto p-0.5 ${
                    index === testimonial.activeSlide
                      ? "bg-amber-300"
                      : "bg-black"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Testimonials;
