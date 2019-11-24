import React from 'react'
import '../index.css';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    logo: {
        margin: "40px 0px 40px 100px",
    }
})


const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
        <h1 className="logo">HackerNews</h1>
        </div>
    )
}

export default Header;
