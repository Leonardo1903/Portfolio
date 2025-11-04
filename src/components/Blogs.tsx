"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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

interface BlogPost {
  id: string;
  title: string;
  brief: string;
  coverImage?: {
    url: string;
  };
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
}
interface BlogEdge {
  node: BlogPost;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `
          query Publication {
            publication(host: "${
              process.env.NEXT_PUBLIC_HASHNODE_USERNAME || ""
            }.hashnode.dev") {
              posts(first: 6) {
                edges {
                  node {
                    id
                    title
                    brief
                    url
                    publishedAt
                    readTimeInMinutes
                    coverImage {
                      url
                    }
                  }
                }
              }
            }
          }
        `;

        const { data } = await axios.post(
          process.env.NEXT_PUBLIC_HASHNODE_API || "",
          { query },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const posts =
          data.data?.publication?.posts?.edges?.map(
            (edge: BlogEdge) => edge.node
          ) || [];
        setBlogs(posts);
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className="w-full min-h-screen bg-[#09090C] py-16 px-4 md:px-8 relative overflow-hidden"
      id="blogs"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl" />
        <div className="absolute top-1/4 left-1/3 w-1/2 h-1/3 bg-gradient-to-r from-red-400/20 via-orange-400/10 to-amber-400/10 blur-3xl rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/4 bg-gradient-to-tl from-amber-400/15 to-transparent blur-2xl rounded-full opacity-20" />
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
            My Blogs
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-amber-500 mx-auto mb-8 rounded-full"
          />
          <motion.p
            variants={fadeIn}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Sharing my thoughts and knowledge on various topics like web
            development, app development, and more.
          </motion.p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/10 animate-pulse"
              >
                <div className="h-48 bg-white/10 rounded-t-lg" />
                <div className="p-6">
                  <div className="h-6 bg-white/10 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-white/10 rounded w-1/2 mb-4" />
                  <div className="h-4 bg-white/10 rounded w-full mb-2" />
                  <div className="h-4 bg-white/10 rounded w-full mb-2" />
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-gray-300 py-12">
            <p>{error}</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-300 py-12">
            <p>No blog posts found.</p>
          </div>
        ) : (
          <>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={fadeIn}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:shadow-red-400/20 hover:shadow-lg group cursor-pointer"
                  onClick={() => window.open(blog.url, "_blank")}
                >
                  <div className="relative h-48 overflow-hidden">
                    {blog.coverImage ? (
                      <>
                        <Image
                          src={blog.coverImage.url}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-500/20 to-amber-500/20" />
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {blog.title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(blog.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTimeInMinutes} min read
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                      {blog.brief}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 flex justify-center"
            >
              <Button
                onClick={() =>
                  window.open(`https://blog.leonardo1903.me/`, "_blank")
                }
                className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white px-10 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 flex items-center gap-3"
                size="lg"
              >
                View All Blogs
                <ExternalLink className="w-5 h-5" />
              </Button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
