// orderSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { orderItems } from "constants/appConstants";
import { OrderItem } from "model/model";

interface OrderState {
  orders: OrderItem[];
}

const initialState: OrderState = {
  orders: orderItems,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    loadOrders: (state) => {
      state.orders = orderItems;
    },
    addOrder: (state, action: PayloadAction<OrderItem>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { loadOrders, addOrder } = orderSlice.actions;

export default orderSlice.reducer;
