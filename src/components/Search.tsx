import React, { useCallback } from "react";
import styled from "styled-components";
import { fetchGistForUser, fetchPublicGists } from "store/reducers/gistReducer";
import debounce from "lodash.debounce";
import { useAppDispatch } from "store/hooks";

const Search: React.FC = () => {
  const dispatch = useAppDispatch();

  const searchUserGistsHandle = useCallback(
    debounce((event: React.ChangeEvent): void => {
      const searchedValue = (event?.target as HTMLInputElement).value;
      if (searchedValue?.length) {
        dispatch(fetchGistForUser(searchedValue));
      } else {
        dispatch(fetchPublicGists());
      }
    }, 1000),
    []
  );

  return (
    <Wrapper>
      <InputBox>
        <Input
          placeholder="Search Gists for the username"
          onChange={searchUserGistsHandle}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px 20px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 14px;
  &::placeholder {
    font-weight: 600;
  }

  &:focus {
    outline: 0;
  }
`;

export default Search;
