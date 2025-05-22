"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Leonardo delivered our web application ahead of schedule and exceeded our expectations. His technical expertise and attention to detail made our project a success. We've already hired him for our next project!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Founder, BlockChain Ventures",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Working with Leonardo on our DeFi platform was a game-changer. He understood our vision perfectly and implemented complex smart contracts with ease. His knowledge of Web3 technologies is impressive.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthLabs",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Leonardo built us a custom CRM that perfectly integrated with our existing tools. His solution has increased our team's productivity by 40%. He was responsive, professional, and a pleasure to work with.",
    rating: 5,
  },
  {
    name: "David Kim",
    position: "CTO, InnovateTech",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "We hired Leonardo to optimize our e-commerce platform, and the results were outstanding. Page load times decreased by 60%, and our conversion rate improved significantly. His technical skills are top-notch.",
    rating: 5,
  },
  {
    name: "Jessica Patel",
    position: "Product Manager, AI Solutions",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "Leonardo integrated advanced AI capabilities into our application, which has transformed our user experience. He's not just a developer but a strategic partner who understands business objectives.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#09090C] py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-gradient-to-tr from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            Client Testimonials
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={fadeIn}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Don't just take my word for it. Here's what my clients have to say
            about working with me.
          </motion.p>
        </motion.div>

        {/* Desktop Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-red-400/20 hover:shadow-lg flex flex-col"
            >
              <div className="flex items-start mb-4">
                <Quote className="w-8 h-8 text-red-400 mr-2 flex-shrink-0" />
              </div>

              <p className="text-gray-300 mb-6 flex-grow">
                {testimonial.content}
              </p>

              <div className="flex items-center mt-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>

              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-amber-400"
                        : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Testimonial Carousel */}
        <div className="md:hidden">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/10">
            <div className="flex items-start mb-4">
              <Quote className="w-8 h-8 text-red-400 mr-2 flex-shrink-0" />
            </div>

            <p className="text-gray-300 mb-6 min-h-[150px]">
              {testimonials[activeIndex].content}
            </p>

            <div className="flex items-center mt-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-white font-medium">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>

            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[activeIndex].rating
                      ? "text-amber-400"
                      : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-black/30 text-white hover:bg-red-500/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-black/30 text-white hover:bg-red-500/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Ready to join my list of satisfied clients? Let's work together on
            your next project.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const mainContent = document.querySelector("main");
                if (mainContent) {
                  mainContent.scrollTo({
                    top: contactSection.offsetTop,
                    behavior: "smooth",
                  });
                }
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white rounded-xl shadow-lg transition duration-300 inline-flex items-center"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </div>
  );
}
