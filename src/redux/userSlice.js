import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";

import {walletApi} from "../api";

export const logIn = createAsyncThunk("user/logIn", async ({email, password}) => {
  let accessToken;

  try {
    ({
      data: {accessToken},
    } = await walletApi.post("/auth/login", {email, password}));
  } catch (e) {
    throw new Error(e.response?.data?.error || e.message);
  }

  const {
    data: {id, first_name, last_name},
  } = await walletApi.get("/auth/me", {headers: {Authorization: `Bearer ${accessToken}`}});

  const userData = {
    id,
    name: first_name + " " + last_name,
    email,
    accessToken,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  return userData;
});

const userSlice = createSlice({
  name: "user",
  initialState: () => {
    const stateStr = localStorage.getItem("user");

    if (stateStr) return {...JSON.parse(stateStr), loggedIn: true};
    else return {loggedIn: false};
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state = {...action.payload, loggedIn: true};
    });
  },
});

export const selectUser = (state) => state.user;
export const selectIsLoggedIn = createSelector(selectUser, (user) => user.loggedIn);
export const userReducer = userSlice.reducer;
