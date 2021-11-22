import { blackColor } from "assets/jss/material-kit-pro-react";
import { title, grayColor, primaryColor } from "assets/jss/material-kit-pro-react.js";

const fileCabinetStyle = {
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
    color: blackColor
  },
  folderDescription: {
    fontSize: "1.5rem",
    fontWeight: "200",
    color: blackColor
  }
};

export default fileCabinetStyle;
