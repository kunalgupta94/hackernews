import React from "react";
import { useEffect } from "react";
import "./App.css";
import Story from "./components/story";
import { connect } from "react-redux";
import api from "./api/topstories.api";
import Header from "./components/Header";

function App(props) {
  const { updateTopStories } = props;
  useEffect(() => {
    updateTopStories();
  }, [updateTopStories]);

  return (
    <div className="App">
      <Header />
      <Story />
    </div>
  );
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  updateTopStories: () => api.getTopStories(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
