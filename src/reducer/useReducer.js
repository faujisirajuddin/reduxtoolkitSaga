import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "Ramesh",
  age: 20,
};

const useReducer = createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_NAME_SUCCESS", (action, state) => {
    state.name = action.payload;
  });
});

export default useReducer;
