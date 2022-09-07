import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateOrders: (state, action) => {
      const newData = action.payload.sort();

      if (state.value.length === 0) {
        state.value = newData;
      } else {
        let toRemoveIndexes = [];
        const updatedOrders = state.value.sort().map((preOrder) => {
          let nextOrder = { ...preOrder };
          newData.map((newOrder, newOrderIndex) => {
            if (preOrder.id === newOrder.id) {
              nextOrder = { ...newOrder };
              toRemoveIndexes.push(newOrderIndex);
            }
          });
          return nextOrder;
        });

        const newOrders = newData.filter((_, index) => !toRemoveIndexes.includes(index));
        toRemoveIndexes = [];
        state.value = [...updatedOrders, ...newOrders];
      }
    }
  }
});

export const { updateOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
