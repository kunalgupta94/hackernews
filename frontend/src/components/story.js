import React from "react";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";

const useStyles = createUseStyles({
  container: {
    display: "inline-block",
    width: "fit-content",
    maxWidth: "600px",
    height: "auto",
    border: 0,
    borderRadius: "10px",
    padding: 20,
    boxShadow: "0px 0px 20px 10px rgba(77,83,89,0.3)",
    backgroundColor: "#ECF0F1",
    cursor: "pointer",
    margin: 20
  },
  titleMain: {
    textDecoration: "none",
    textAlign: "left",
    margin: 0,
    "&:hover": {
      textDecoration: "underline"
    },
    "word-spacing": 5
  },
  title: {
    color: "#132b40",
    fontSize: "1em",
    fontWeight: "800",
    "&:hover": {
      textDecoration: "underline",
      "-webkit-transform": "rotateY(180deg)",
      "-moz-transform": "rotateY(180deg)",
      "-o-transform": "rotateY(180deg)",
      "-ms-transform": "rotateY(180deg)",
      "unicode-bidi": "bidi-override",
      direction: "rtl",
      display: "inline-block"
    }
  },
  body: {
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
    wordSpacing: "5px",
    textAlign: "left",
    margin: "10px 20px"
  }
});

const Story = props => {
  const classes = useStyles();
  const flipTitle = title => {
    const titleArray = title.split(" ");
    return (
      <h1 className={classes.titleMain}>
        {titleArray.map((word, wordIndex) => (
          <span key={`${wordIndex}_wrapper`}>
            <span key={wordIndex} className={classes.title}>
              {word.split("").map((character, index) => {
                return (
                  <span key={index} className={`${classes.title}`}>
                    {character}
                  </span>
                );
              })}
            </span>
            <span key={`${wordIndex}_space`}> </span>
          </span>
        ))}
      </h1>
    );
  };
  return props.state.Stories.length !== 0
    ? props.state.Stories.topStoryIds.map(story => (
        <div key={story.id} className={classes.container}>
          <a href={story.url} style={{ textDecoration: "none" }}>
            {flipTitle(story.title)}
          </a>
          <h5 style={{ color: "gray", margin: 0, textAlign: "left"}}>{story.url}</h5>
          <h5 style={{ margin: "10px 0px 20px 0px", textAlign: "left" }}>
            {new Date(story.time * 1000).toLocaleDateString()} -{" "}
            {new Date(story.time * 1000).toTimeString()}
          </h5>
          comments
        </div>
      ))
    : null;
};

const mapStateToProps = state => ({
  state: state
});

export default connect(mapStateToProps)(Story);
