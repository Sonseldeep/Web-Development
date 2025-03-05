import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: ["Sandeep", "Hari", "Krishna"],
};
export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUsers: (state, action) => {
      console.log(action);
      state.users.splice(action.payload, 1);
    },
  },
});

export default UserSlice.reducer;
export const { deleteUsers } = UserSlice.actions;
