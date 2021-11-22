import { blackColor } from "assets/jss/material-kit-pro-react";
import { title, grayColor, primaryColor } from "assets/jss/material-kit-pro-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    //color: grayColor[0]
    // color: blackColor[0]
    color: primaryColor[0]
  }
};

export default productStyle;
