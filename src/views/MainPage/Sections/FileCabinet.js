import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Cloud from "@material-ui/icons/FilterDrama";
import Devices from "@material-ui/icons/ImportantDevices";
import Integration from "@material-ui/icons/SettingsInputComponent";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// import productStyle from "assets/jss/material-kit-pro-react/views/mainPageStyles/fileCabinetStyle.js"
import fileCabinetStyle from "assets/jss/material-kit-pro-react/views/mainPagySections/fileCabinet";

const useStyles = makeStyles(fileCabinetStyle);

export default function FileCabinet() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Explorations, Treks & Destinations</h2>
          <h5 className={classes.description}>
            Over the decades, there has been a lot of things I have explored and experienced.
            These are just a few of the areas that we highlight at this time.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
          <a
                    href="/cloud"
                    className={classes.block}
                  >
            <InfoArea
              title="Engineering"
              className={classes.folderDescription}
              description="Always ingriguing to figure things out and even more rewards creating. The tilting point is understanding what your doing and not just blowing things out with no clue."
              icon={Cloud}
              iconColor="info"
              vertical
            />
            </a>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Flexible Front-ends"
              description="Times are shifting from client side solutions to quick light-weight interfaces with dynamic content from unlimited distributed systems"
              icon={Devices}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Integration"
              description="Tying the devices together with the cloud takes expertise, knowledge and experience."
              icon={Integration}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
