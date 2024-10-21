import { createSlice } from '@reduxjs/toolkit';

const initialProducts = [
    { id: 1, name: 'Pizza', price: 10.99, description: 'Delicious pizza with various toppings' },
    { id: 2, name: 'Burger', price: 8.99, description: 'Juicy beef burger with fresh vegetables' },
    { id: 3, name: 'Salad', price: 7.99, description: 'Healthy mixed salad with dressing' },
    { id: 4, name: 'Pasta', price: 9.99, description: 'Homemade pasta with rich sauce' },
];

const loadProducts = () => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : initialProducts;
};

const saveProducts = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
};

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: loadProducts(),
        loading: false,
        error: null,
    },
    reducers: {
        addProduct: (state, action) => {
            state.items.push(action.payload);
            saveProducts(state.items);
        },
        updateProduct: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
                saveProducts(state.items);
            }
        },
        deleteProduct: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveProducts(state.items);
        },
    },
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
