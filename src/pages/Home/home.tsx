import { StartWatchingBtn } from "../../components/buttons/buttons.module";
import logo from "../../assets/images/bb-logo-white.png";
import { HomeContainer, HomeTextWrapper, Logo } from "./home.module";
import { TextContent } from "../../components/Textual/textual.module";
import React from "react";

interface HomePageProps {}
const HomePage = React.forwardRef<HTMLDivElement, HomePageProps>((_, ref) => {
  const homeText =
    "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.";

  return (
    <>
      <HomeContainer ref={ref}>
        <Logo src={logo} alt="Logo" />
        <HomeTextWrapper>
          <TextContent fontSize="50px" fontWeight={700}>
            Breaking
          </TextContent>
          <TextContent fontSize="50px" fontWeight={500} paddingLeft="170px">
            Bad
          </TextContent>
          <TextContent fontSize="26px">{homeText}</TextContent>
        </HomeTextWrapper>
        <StartWatchingBtn
          border="3px"
          height="60px"
          onClick={() => console.log("You clicked Start watching!")}
          width="200px"
          marginLeft="100px"
        >
          <TextContent fontSize="20px" fontWeight={500}>
            Start Watching
          </TextContent>
        </StartWatchingBtn>
      </HomeContainer>
    </>
  );
});

export default HomePage;
