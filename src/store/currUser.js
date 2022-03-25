import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: {
    userId: 1,
    username: "Augi",
    email: "augi@gmail.com",
  },
};

const userSlice = createSlice({
  name: "currUser",
  initialState,
  reducers: {
    changeUsername: (currUser, action) => {
      currUser.lists.username = action.payload.value;
    },

    changeEmail: (currUser, action) => {
      currUser.lists.email = action.payload.value;
    },
  },
});

export const { changeEmail, changeUsername } = userSlice.actions;
export default userSlice.reducer;
