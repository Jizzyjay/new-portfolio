import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  SecondaryButton,
  CTAGroup,
  RightPanel,
  PanelTop,
  StatusBadge,
  MiniCard,
  MetricRow,
  MetricLabel,
  MetricValue,
  TagList,
  PanelTag,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, {" "}I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <CTAGroup>
              <ResumeButton href={Bio.resume} target="_blank" rel="noreferrer">
                Check Resume
              </ResumeButton>
              <SecondaryButton href="#projects">View Projects</SecondaryButton>
            </CTAGroup>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <RightPanel>
              <PanelTop>
                <StatusBadge>Available for work</StatusBadge>
              </PanelTop>
              <MiniCard>
                <MetricRow>
                  <MetricLabel>Experience</MetricLabel>
                  <MetricValue>4+ yrs</MetricValue>
                </MetricRow>
                <MetricRow>
                  <MetricLabel>Projects</MetricLabel>
                  <MetricValue>20+</MetricValue>
                </MetricRow>
                <MetricRow>
                  <MetricLabel>Focus</MetricLabel>
                  <MetricValue>UI/UX</MetricValue>
                </MetricRow>
              </MiniCard>
              <TagList>
                <PanelTag>React</PanelTag>
                <PanelTag>Next.js</PanelTag>
                <PanelTag>TypeScript</PanelTag>
                <PanelTag>Design Systems</PanelTag>
              </TagList>
            </RightPanel>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
