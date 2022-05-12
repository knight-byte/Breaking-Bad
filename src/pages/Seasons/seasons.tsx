import React from "react";
import { TextContent } from "../../components/Textual/textual.module";
import { SeasonsContainer } from "./seasons.module";

interface SeasonSectionProps {}

const SeasonSection = React.forwardRef<HTMLDivElement, SeasonSectionProps>(
  (_, ref) => {
    return (
      <>
        <SeasonsContainer ref={ref}>
          <TextContent margin="0px">THIS IS SEASONS SECTION</TextContent>
        </SeasonsContainer>
      </>
    );
  }
);

export default SeasonSection;
