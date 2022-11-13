import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walletApi } from "../api";

const initialState = {};

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

export const chargeMoney = createAsyncThunk(
  "account/chargeMoney",
  async ({ concept, amount }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.accessToken;
    const amountInt = parseInt(amount);
    const id = state.account.id;

    const res = await walletApi.post(
      `/accounts/${id}`,
      { type: "topup", concept, amount: amountInt },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return res.data;
  }
);

export const getAccount = createAsyncThunk(
  "account/getAccount",
  async (args, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.accessToken;
    try {
      const res = await walletApi.get(`/accounts/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (e) {
      throw new Error(e.response?.data?.error || e.message);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendMoney.fulfilled, (state, action) => {
      state.money = state.money - parseInt(action.meta.arg.amount);
    });
    builder.addCase(chargeMoney.fulfilled, (state, action) => {
      state.money += parseInt(action.meta.arg.amount);
    });
    builder.addCase(getAccount.fulfilled, (state, action) => {
      let money = parseInt(action.payload[0].money);
      return { ...action.payload[0], money };
    });
  },
});

export const accountReducer = accountSlice.reducer;
