import { TextContent } from "../../components/Textual/textual.module";
import { AboutSectionData } from "./about.data";
import {
  AboutFlexWrapper,
  AboutPoster,
  AboutSectionContainer,
  AboutTextContent,
  SayMyName,
} from "./about.module";
import posterPng from "../../assets/images/about-poster.png";
import React from "react";

interface AboutSectionProps {}

const AboutSection = React.forwardRef<HTMLDivElement, AboutSectionProps>(
  (_, ref) => {
    const textData = AboutSectionData;
    return (
      <>
        <AboutSectionContainer ref={ref}>
          <SayMyName color="rgba(0, 0, 10, 0)" strokeSize="2px">
            SAY MY
          </SayMyName>
          <SayMyName margin="200px 50px 200px 100px">NAME</SayMyName>
          <AboutFlexWrapper>
            <AboutTextContent>
              <TextContent fontSize="70px" fontWeight={500}>
                {textData.title}
              </TextContent>
              <TextContent>{textData.body}</TextContent>
            </AboutTextContent>
            <AboutPoster src={posterPng} alt="Poster" />
          </AboutFlexWrapper>
        </AboutSectionContainer>
      </>
    );
  }
);

export default AboutSection;
