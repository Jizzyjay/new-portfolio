import React from "react";
import styled from "styled-components";
import WebsiteDesignCard from "../Cards/WebsiteDesignCard";
import { websiteDesigns } from "../../data/constants";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 40px 20px 100px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.p`
  font-size: 1.08rem;
  text-align: center;
  max-width: 650px;
  margin: 0;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
  width: 100%;
  margin: 28px 0 0;
`;

const WebsiteDesigns = () => {
  return (
    <Container id="designs">
      <Wrapper>
        <Title>Website Designs</Title>
        <Desc>
          Live marketing and brand sites I designed and built — from luxury
          hospitality to food delivery and real estate.
        </Desc>
        <CardContainer>
          {websiteDesigns.map((design) => (
            <WebsiteDesignCard key={design.id} design={design} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default WebsiteDesigns;
