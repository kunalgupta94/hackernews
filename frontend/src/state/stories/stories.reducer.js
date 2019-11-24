import { UPDATE_NEW_AND_TOP_STORIES } from "./stories.actionType";
import initialState from "../initialState";

const Stories = (state = initialState.Stories, action) => {
  switch (action.type) {
    case UPDATE_NEW_AND_TOP_STORIES:
      return {
        ...state,
        topStoryIds: action.data
      };
    default:
      return state;
  }
};

export default Stories;
