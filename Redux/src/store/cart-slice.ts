import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
    id: string;
    title: string;
    price: number;
    quntity: number;
};

type CartState = {
    items: CartItem[]
};

const initialState: CartState = {
   items: [] 
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart(
            state, 
            action: PayloadAction<{ id: string; title: string, price: number}>
        ) {},
        removeFromCart() {}
    }
});