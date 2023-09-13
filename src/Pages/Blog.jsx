import React, { useEffect } from "react";
import { Container } from "../Components/Container";
import { FaTrello } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Blog = () => {
  useEffect(() => {
    document.title = "Blog || Maulana";
  }, []);

  const BlogList = [
    {
      path: "/blog/pengertian&html",
      title: "Apa sih itu pengertian HTML?",
    },
  ];

  return (
    <Container>
      <div className="h-[75vh] flex flex-col gap-5 text-justify">
        <div className="py-8 flex gap-4 items-center text-2xl font-mono font-semibold border-b-2 border-slate-400/60">
          <FaTrello className="animate-bounce" />
          <h1>Blog</h1>
        </div>
        {BlogList.map((blog, index) => (
          <Link key={index} to={blog.path} className="border-2 border-slate-400/60 p-3 rounded-md">
            <h3>{blog.title}</h3>
          </Link>
        ))}
      </div>
    </Container>
  );
};
