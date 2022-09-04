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

      const toRemoveIndexes = [];
      if (state.value.length === 0) {
        state.value = newData;
      } else {
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

        toRemoveIndexes.map((idx) => (newData[idx] = 'removed'));
        const newOrders = newData.filter((order) => order !== 'removed');
        state.value = [...updatedOrders, ...newOrders];
      }
    }
  }
});

export const { updateOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
