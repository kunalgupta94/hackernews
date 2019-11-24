import { UPDATE_NEW_AND_TOP_STORIES } from "./stories.actionType";

export const updateTopStories = data => {
  return {
    type: UPDATE_NEW_AND_TOP_STORIES,
    data
  };
};
