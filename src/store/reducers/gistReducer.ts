import { Octokit } from "@octokit/rest";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const octokit = new Octokit();

interface gistsState {
  gistList: object[];
  isLoading: boolean;
  error: boolean | string;
}
const initialState: gistsState = {
  gistList: [],
  isLoading: true,
  error: false,
};

// Generates pending, fulfilled and rejected action types
const fetchPublicGists = createAsyncThunk("gists/fetchPublicGists", () => {
  const response = octokit.gists.listPublic();
  return response.then((res) => res?.data);
});

const fetchGistForUser = createAsyncThunk(
  "gists/fetchGistForUser",
  (username: string) => {
    const response = octokit.gists.listForUser({ username });
    return response.then((res) => res?.data);
  }
);

const gistDataSlice = createSlice({
  name: "gists",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchPublicGists.pending, (state) => {
      state.isLoading = true;
    });
    addCase(fetchPublicGists.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      gistList: action?.payload,
      error: !action?.payload?.length && "We couldn’t find any gists",
    }));
    addCase(fetchPublicGists.rejected, (state, action: any) => ({
      ...state,
      isLoading: false,
      error: action.error.message,
    }));
    addCase(fetchGistForUser.pending, (state) => {
      state.isLoading = true;
    });
    addCase(fetchGistForUser.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      gistList: action?.payload,
      error: !action?.payload?.length && "We couldn’t find any gists",
    }));
    addCase(fetchGistForUser.rejected, (state, action: any) => ({
      ...state,
      isLoading: false,
      gistList: [],
      error: action?.error?.message,
    }));
  },
});

export { fetchPublicGists, fetchGistForUser };

export default gistDataSlice.reducer;
