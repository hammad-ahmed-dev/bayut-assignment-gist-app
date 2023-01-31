import React from "react";
import { ReactComponent as CodeIcon } from "assets/icons/code.svg";
import { ReactComponent as ForkIcon } from "assets/icons/fork.svg";
import { ReactComponent as CommentIcon } from "assets/icons/comment.svg";
import { ReactComponent as StarIcon } from "assets/icons/star-fill.svg";
import {
  HeaderWrapper,
  ProfileWrapper,
  ProfileAvatar,
  Img,
  UL,
  SkeletonLoader,
} from "./styles";
import { GistCardHeader, GistInfo } from "model/gistData";

const Header: React.FC<GistCardHeader> = ({
  files,
  comments,
  userAvatar,
  userName,
  isLoading,
}) => {
  const gistInfo: object[] = [
    {
      icon: <CodeIcon />,
      title: "Files",
      count: files?.length || 0,
    },
    { icon: <ForkIcon />, title: "Forks", count: 0 },
    { icon: <CommentIcon />, title: "Comments", count: comments || 0 },
    { icon: <StarIcon />, title: "Stars", count: 0 },
  ];
  return (
    <HeaderWrapper>
      <ProfileWrapper>
        <ProfileAvatar>
          {isLoading ? (
            <SkeletonLoader width="100%" height={40} borderRadius={50} />
          ) : (
            <Img src={userAvatar} alt="user-avatar" />
          )}
        </ProfileAvatar>
        <h4>
          {isLoading ? <SkeletonLoader width="150px" height={15} /> : userName}
        </h4>
      </ProfileWrapper>

      <UL>
        {gistInfo.map(({ icon, title, count }: GistInfo) => (
          <li key={title}>
            {isLoading ? (
              <SkeletonLoader width="50px" height={20} />
            ) : (
              <>
                {icon}
                <span>{count}</span>
                <span>{title}</span>
              </>
            )}
          </li>
        ))}
      </UL>
    </HeaderWrapper>
  );
};

export default Header;
