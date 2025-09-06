import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Introduction to Web Development",
    excerpt: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    date: "March 15, 2025",
    author: "Tech Team",
    image: "https://ext.same-assets.com/812608780/849522504.jpeg"
  },
  {
    id: 2,
    title: "Getting Started with Machine Learning",
    excerpt: "Discover the fundamentals of machine learning and how to implement your first model.",
    date: "March 5, 2025",
    author: "AI-ML Team",
    image: "https://ext.same-assets.com/812608780/849522504.jpeg"
  },
  {
    id: 3,
    title: "Robotics Workshop Recap",
    excerpt: "A summary of our recent robotics workshop and the projects that were built.",
    date: "February 20, 2025",
    author: "Robotics Team",
    image: "https://ext.same-assets.com/812608780/849522504.jpeg"
  },
  {
    id: 4,
    title: "The Future of Technology",
    excerpt: "Exploring emerging technologies and their potential impact on our lives.",
    date: "February 10, 2025",
    author: "Research Team",
    image: "https://ext.same-assets.com/812608780/849522504.jpeg"
  }
];

export default function BlogsPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Media
          </h1>

          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Stay updated with the latest news, blog posts, and updates from Geek Room Plaksha.
            Learn about our events, projects, and the exciting world of technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.id}
                className="bg-background border border-muted overflow-hidden card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">{blog.date}</span>
                    <span className="text-xs text-primary">{blog.author}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-2">{blog.title}</h2>

                  <p className="text-sm text-muted-foreground mb-4">
                    {blog.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
