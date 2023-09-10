import React, { useEffect } from "react";
import { Container } from "../Components/Container";
import { FaTrello } from "react-icons/fa";

export const Blog = () => {
  useEffect(() => {
    document.title = "Blog || Maulana";
  }, []);
  return (
    <Container>
      <div className="h-[75vh] flex flex-col gap-5 text-justify">
        <div className="py-8 flex gap-4 items-center text-2xl font-mono font-semibold border-b-2 border-slate-400/60">
          <FaTrello className="animate-bounce" />
          <h1>Blog</h1>
        </div>
      </div>
    </Container>
  );
};
