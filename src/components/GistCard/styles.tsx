import { SkeletonLoaderTypes, UL_Types } from "model/styles";
import styled, { keyframes } from "styled-components";

const CardWrapper = styled.div`
  padding: 10px 0 30px;
  margin: 20px 16px 0;
  border-bottom: 1px solid #d0d7de;
`;
const shimmer = keyframes`
0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonLoader = styled.div<SkeletonLoaderTypes>`
  display: ${({ display }) => display || "inline-block"};
  width: ${({ width }) => width};
  height: ${({ height }) => height}px;
  background-color: #eee;
  ${({ marginBottom }) => marginBottom && "margin-bottom: 5px;"}
  border-radius: ${({ borderRadius }) => borderRadius || 4}px;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1300ms ease-in-out infinite;
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #0969da;
`;
const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ProfileAvatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
`;

const UL = styled.ul<UL_Types>`
  font-size: ${({ fontSize }) => fontSize || 12}px;
  display: flex;
  flex-wrap: wrap;
  font-weight: 500;
  list-style: none;
  color: #0969da;
  padding: 0;
  li {
    display: flex;
    align-items: ${({ alignItem }) => alignItem || "center"};
    margin-left: 16px;
    span,
    a {
      margin-left: 5px;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;
const Time = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  span {
    margin-right: 10px;
  }
`;
const Description = styled.div`
  font-size: 18px;
  margin: 20px 0;
`;

export {
  CardWrapper,
  HeaderWrapper,
  ProfileWrapper,
  ProfileAvatar,
  Img,
  UL,
  Time,
  Description,
  SkeletonLoader,
};
