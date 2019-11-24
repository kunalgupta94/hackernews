import { combineReducers } from 'redux';
import Stories from './stories/stories.reducer';

const rootReducer = combineReducers({
    Stories
});

export default rootReducer;