import React from "react";
import { ReactComponent as FileIcon } from "assets/icons/file.svg";
import { SkeletonLoader, UL } from "./styles";
import { FileList } from "model/gistData";

const FilesList: React.FC<FileList> = ({ files, filesObj, isLoading }) => (
  <UL fontSize={11} alignItem="baseline">
    {isLoading
      ? Array.from({ length: 3 }).map((_, i) => (
          <li key={i}>
            <SkeletonLoader width="100px" height={20} />
          </li>
        ))
      : !!files?.length &&
        files.map((file: string) => (
          <li key={file}>
            <FileIcon />
            <a
              href={filesObj?.[file]?.raw_url}
              target="_blank"
              rel="noreferrer"
            >
              {file}
            </a>
          </li>
        ))}
  </UL>
);

export default FilesList;
