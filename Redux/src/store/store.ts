import { configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cart-slice';

export const store = configureStore ({
    reducer: {
        cart: cartSlice.reducer
    }
});

export type AddDispatch = typeof store.dispatch;