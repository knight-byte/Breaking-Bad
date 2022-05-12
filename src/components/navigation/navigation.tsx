import {
  GitHubIcon,
  Line,
  LineGithub,
  NavArrow,
  NavLinkIndicator,
  VerticalNavContainer,
  VerticalNavLink,
} from "./navigation.module";

import githubSvg from "../../assets/images/github-icon.svg";
import arrowSvg from "../../assets/images/arrow.svg";
import React, { useEffect, useState } from "react";

interface SingleNavProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

interface VerticalNavigationProps {
  refs: Array<React.MutableRefObject<HTMLDivElement>>;
}

const SingleNav: React.FC<SingleNavProps> = ({ text, isSelected, onClick }) => {
  return (
    <NavLinkIndicator onClick={onClick}>
      <VerticalNavLink>{text}</VerticalNavLink>
      <NavArrow src={arrowSvg} alt="Nav Indicator" isSelected={isSelected} />
    </NavLinkIndicator>
  );
};

export const VerticalNavigation: React.FC<VerticalNavigationProps> = ({
  refs,
}) => {
  const navList = [
    {
      text: "Home",
      isSelected: true,
      ref: refs[0],
    },
    {
      text: "About",
      isSelected: false,
      ref: refs[1],
    },
    {
      text: "Casts",
      isSelected: false,
      ref: refs[2],
    },
    {
      text: "Seasons",
      isSelected: false,
      ref: refs[3],
    },
  ];
  const [navListState, setNavListState] = useState(navList);

  const updateNavList = (index: number) => {
    setNavListState((prevState) => {
      const newState = prevState.map((val, ind) => {
        val.isSelected = ind === index;
        return val;
      });
      return newState;
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollHandler = () => {
    refs.forEach((ref, ind) => {
      const r = ref.current;
      const condition = r !== undefined || r !== null;
      if (condition) {
        const valueY = ref.current.getBoundingClientRect().y;
        /**
         * Offset to detect new Section
         */
        if ((valueY >= 0 && valueY <= 400) || (valueY <= 0 && valueY >= -400)) {
          updateNavList(ind);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, [scrollHandler]);

  return (
    <>
      <VerticalNavContainer>
        {navListState.map((single) => {
          const scrollToRef = () => {
            single.ref.current.scrollIntoView({ behavior: "smooth" });
          };
          return (
            <SingleNav
              text={single.text}
              isSelected={single.isSelected}
              onClick={scrollToRef}
            />
          );
        })}
        <LineGithub>
          <Line />
          <GitHubIcon src={githubSvg} alt="" />
        </LineGithub>
      </VerticalNavContainer>
    </>
  );
};
