import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import blogList from "../../api/blogList";
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogItems: blogList,
    selectedBlog: "",
  },
  reducers: {
    setSelectedBlog(state, action) {
      state.selectedBlog = action.payload;
    },
  },
});

export const { setSelectedBlog } = blogSlice.actions;

export default blogSlice.reducer;
