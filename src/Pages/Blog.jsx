import React, { useEffect } from "react";
import { Container } from "../Components/Container";

export const Blog = () => {
  useEffect(() => {
    document.title = "Blog || Maulana";
  }, []);
  return <Container>Blog</Container>;
};
