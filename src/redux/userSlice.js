import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";

import {walletApi} from "../api";

export const logIn = createAsyncThunk("user/logIn", async ({email, password}) => {
  const {data} = await walletApi.post("/auth/login", {email, password});

  if (data.error) throw new Error(data.error);
  const {accessToken} = data;
  const {
    data: {first_name, last_name},
  } = await walletApi.get("/auth/me", {headers: {Authorization: `Bearer ${accessToken}`}});

  const userData = {
    name: first_name + " " + last_name,
    email,
    accessToken: data.accessToken,
  };

  localStorage.setItem("user", userData);

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
