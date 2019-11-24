import axios from "axios";
import { updateTopStories } from "../state/stories/stories.action";
export default {
  getTopStories: dispatch => {
    return new Promise((resolve, reject) =>
      axios
        .get(
          `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
        )
        .then(res => {
          const splitedIds = res.data.slice(0, 20);
          return splitedIds;
        })
        .then(async ids => {
          const fetchedData = [];
          ids.map(id =>
            axios
              .get(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
              )
              .then(resdata => {
                fetchedData.push(resdata.data);
                dispatch(updateTopStories(fetchedData));
              })
          );
        })
        .then(response => resolve(response))
        .catch(error => reject(error))
    );
  },
  getStoryById: id => {
    return new Promise((resolve, reject) =>
      axios
        .get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
        .then(res => resolve(res.data))
        .catch(error => reject(error))
    );
  }
};
