import React, { useEffect } from "react";
import { Container } from "../Components/Container";
import { FaHotjar } from "react-icons/fa";

export const About = () => {
  useEffect(() => {
    document.title = "About || Maulana";
  }, []);
  return (
    <Container>
      <div className="h-[75vh] flex flex-col gap-5 text-justify">
        <div className="py-8 flex gap-4 items-center text-2xl font-mono font-semibold border-b-2 border-slate-400/60">
          <FaHotjar className="animate-bounce" />
          <h1>About</h1>
        </div>

        <p>
          I am Muhammad Nur Maulana, a Frontend Developer domiciled in Jakarta, Indonesia. I have experience and skills in using various web technologies such as HTML, CSS, JavaScript, React JS, Tailwind CSS, Bootstrap, Sass, Git, and
          Webpack. I enjoy learning new things and look for challenges in developing a responsive, interactive, and user-friendly website. I am also able to work independently as well as in a team, and communicate well with clients and
          colleagues.
        </p>
        <p>
          This portfolio website is one example of my work that demonstrates my ability to design and implement web interfaces. Here you can see some of the projects I've worked on before, both for personal and professional purposes. You
          can also see testimonials from clients or users who are satisfied with my services.
        </p>
        <p>
          If you are interested in working with me or would like to find out more about me, please contact me via email or social media listed below. I will be happy to answer your questions and discuss your ideas for making your dream
          website a reality.
        </p>
        <p>Thank you for visiting my portfolio website. I hope you enjoy and are inspired by my works.</p>
      </div>
    </Container>
  );
};
