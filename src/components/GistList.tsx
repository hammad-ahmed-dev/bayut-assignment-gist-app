import React, { useEffect } from "react";
import GistCard from "./GistCard";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { fetchPublicGists } from "store/reducers/gistReducer";
import { GistData } from "model/gistData";

const Container = styled.div`
  max-width: 930px;
  margin-right: auto;
  margin-left: auto;
`;
const ErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20%;

  h3 {
    font-size: 20px;
    color: #24292f;
  }
`;

const GistList: React.FC = () => {
  const {
    gistData: { gistList, isLoading, error },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPublicGists());
  }, []);

  return (
    <Container>
      {isLoading
        ? Array.from({ length: 10 }).map((_, i) => (
            <GistCard
              key={new Date().getMilliseconds() * i}
              isLoading={isLoading}
            />
          ))
        : !!gistList?.length &&
          gistList.map((gistData: GistData) => (
            <GistCard key={gistData?.id} {...gistData} />
          ))}
      {error && (
        <ErrorMessageWrapper>
          <SearchIcon />
          <h3>{error}</h3>
        </ErrorMessageWrapper>
      )}
    </Container>
  );
};

export default GistList;
