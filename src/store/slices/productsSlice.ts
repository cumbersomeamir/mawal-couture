import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: string;
  name: string;
  slug?: string;
  price: number;
  images?: string[];
  description?: string;
  category?: string;
  collection?: string;
  gender?: string;
  tags?: string[];
};

type ProductsState = {
  items: Product[];
};

const initialState: ProductsState = {
  items: []
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    }
  }
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
