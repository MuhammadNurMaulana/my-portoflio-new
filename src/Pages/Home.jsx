import React, { useEffect } from "react";
import { Container } from "../Components/Container";

import { HomeHeader } from "../Components/HomeComponents/HomeHeader";
import { HomeSocialMedia } from "../Components/HomeComponents/HomeSocialMedia";
import { HomeSkills } from "../Components/HomeComponents/HomeSkills";

export const Home = () => {
  useEffect(() => {
    document.title = "Muhammad Nur Maulana || Home";
  }, []);
  return (
    <Container>
      <HomeHeader />

      <HomeSocialMedia />

      <HomeSkills />
    </Container>
  );
};
