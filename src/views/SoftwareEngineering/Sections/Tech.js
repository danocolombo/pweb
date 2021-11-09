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

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function TechStuff() {
  const classes = useStyles();
  return (
    // <div className={classes.section}>
    //   <GridContainer justify="center">
    //     <GridItem xs={12} sm={8} md={8}>
    //       <h2 className={classes.title}>Knowledge, Certification & Results</h2>
    //       <h5 className={classes.description}>
    //         The cloud is a hopping space. AWS came out of the gate bold and big and the other vendors have 
    //         been chasing them done.
    //       </h5>
    //     </GridItem>
    //   </GridContainer>
    //   <div>
    //     <GridContainer>
    //       <GridItem xs={12} sm={4} md={4}>
    //         <InfoArea
    //           title="Knowledge & Training"
    //           description="Offical training and recognition is difficult. But worth it. Not just getting a free account but learning, testing and confirming knowledge."
    //           icon={Cloud}
    //           iconColor="info"
    //           vertical
    //         />
    //       </GridItem>
    //       <GridItem xs={12} sm={4} md={4}>
    //         <InfoArea
    //           title="Certifications"
    //           description="Times are shifting from client side solutions to quick light-weight interfaces with dynamic content from unlimited distributed systems"
    //           icon={Devices}
    //           iconColor="success"
    //           vertical
    //         />
    //       </GridItem>
    //       <GridItem xs={12} sm={4} md={4}>
    //         <InfoArea
    //           title="Results"
    //           description="Tying the devices together with the cloud takes expertise, knowledge and experience."
    //           icon={Integration}
    //           iconColor="danger"
    //           vertical
    //         />
    //       </GridItem>
    //     </GridContainer>
    //   </div>
    <>
        <div>Just info</div>
    </>
  );
}
