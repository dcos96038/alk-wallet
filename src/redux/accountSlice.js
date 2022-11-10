import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walletApi } from "../api";

const initialState = {
  // id,
  // creationDate,
  money: "0",
  // isBlocked,
  // userId,
  // createdAt,
  // updatedAt,
};

export const sendMoney = createAsyncThunk(
  "account/sendMoney",
  async ({ recipientID, concept, amount }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.accessToken;
    const amountInt = parseInt(amount);

    const res = await walletApi.post(
      `/accounts/${recipientID}`,
      { type: "payment", concept, amount: amountInt },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return res.data;
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendMoney.fulfilled, (state, action) => {
      console.log("success");
      console.log(action);
    });
  },
});

export const accountReducer = accountSlice.reducer;
