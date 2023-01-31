import React from "react";
import Header from "./Header";
import FilesList from "./FilesList";
import { format } from "date-fns";
import { CardWrapper, Time, Description, SkeletonLoader } from "./styles";
import { GistData } from "model/gistData";

const GistCard: React.FC<GistData> = ({
  owner,
  comments,
  files: filesObj,
  created_at,
  description,
  updated_at,
  isLoading,
}) => {
  created_at = format(new Date(created_at || 0), "dd/MM/yyyy");
  updated_at = format(new Date(updated_at || 0), "dd/MM/yyyy");

  const files = filesObj && Object.keys(filesObj);

  const { avatar_url: userAvatar, login: userName } = { ...owner };
  return (
    <CardWrapper>
      <Header {...{ files, comments, userAvatar, userName, isLoading }} />
      <Time>
        <span>
          {isLoading ? (
            <SkeletonLoader width="150px" height={15} />
          ) : (
            `Created at: ${created_at}`
          )}
        </span>
        <span>
          {isLoading ? (
            <SkeletonLoader width="150px" height={15} />
          ) : (
            `Last updated: ${updated_at}`
          )}
        </span>
      </Time>
      <Description>
        {isLoading
          ? ["100%", "70%", "30%"].map((val: string) => (
              <SkeletonLoader
                key={val}
                width={val}
                height={20}
                display="block"
                marginBottom
              />
            ))
          : description}
      </Description>
      <FilesList {...{ files, filesObj, isLoading }} />
    </CardWrapper>
  );
};
export default GistCard;
