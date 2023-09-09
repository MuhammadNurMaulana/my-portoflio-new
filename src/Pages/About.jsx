import React, { useEffect } from "react";
import { Container } from "../Components/Container";

export const About = () => {
  useEffect(() => {
    document.title = "About || Maulana";
  }, []);
  return <Container>About</Container>;
};
