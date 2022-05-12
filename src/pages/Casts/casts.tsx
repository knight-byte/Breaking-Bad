import React from "react";
import { TextContent } from "../../components/Textual/textual.module";
import { CastsContainer } from "./casts.module";

interface CastSectionProps {}

const CastSection = React.forwardRef<HTMLDivElement, CastSectionProps>(
  (_, ref) => {
    return (
      <>
        <CastsContainer ref={ref}>
          <TextContent margin="0px">THIS IS CASTS SECTION</TextContent>
        </CastsContainer>
      </>
    );
  }
);

export default CastSection;
