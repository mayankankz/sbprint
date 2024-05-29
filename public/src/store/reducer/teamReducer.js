import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import teamMembers from "../../api/team";
const teamSlice = createSlice({
  name: "team",
  initialState: {
    teamMembers: teamMembers,
    selectedTeamMember: "",
  },
  reducers: {
    setSelectedTeamMember(state, action) {
      state.selectedTeamMember = action.payload;
    },
  },
});

export const { setSelectedTeamMember } = teamSlice.actions;

export default teamSlice.reducer;
