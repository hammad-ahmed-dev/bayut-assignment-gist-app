import React from "react";
import styled from "styled-components";
import { ReactComponent as GithubLogo } from "assets/icons/github.svg";
import Search from "./Search";

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

const Header: React.FC = () => (
  <Wrapper>
    <GithubLogo />
    <Search />
  </Wrapper>
);

export default Header;
