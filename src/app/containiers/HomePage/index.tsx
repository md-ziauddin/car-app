import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/BookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";

const PageConatiner = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export const HomePage = () => {
  return (
    <PageConatiner>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="2em" />
      <BookCard />
    </PageConatiner>
  );
};
