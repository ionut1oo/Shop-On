import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  quantity: number;
  imgUrl: string;
  name: string;
  price: number;
}

interface CartState {
  cart: CartItem[];
  isBlinking: boolean;
}

const initialState: CartState = {
  cart: [],
  isBlinking: false,
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
    
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQ: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const item = state.cart.find((item) => item.id === productId);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQ: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const item = state.cart.find((item) => item.id === productId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    toggleBlink: (state) => {
      state.isBlinking = !state.isBlinking;
    },
  },
});

export const { addToCart, incrementQ, decrementQ, removeItem, toggleBlink } = cartSlice.actions;

export default cartSlice.reducer;
