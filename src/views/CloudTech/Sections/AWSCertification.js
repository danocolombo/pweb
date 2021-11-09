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
import cpCert from "assets/img/sections/certs/AWS-CloudPractitioner.png";
import saCert from "assets/img/sections/certs/AWS-SolutionArchitect.png";
import devCert from "assets/img/sections/certs/AWS-DeveloperAssociate.png";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function TechStuff() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>AWS Certifications</h2>
          <h5 className={classes.description}>
            In the ever changing world of software engineering, there needs to be a standard to reference. In cloud computing, Amazon Web Services has led the way, and I have followed along...
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="AWS Certified Solutions Architect - Assoc."
              description="Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Badge owners are able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant."
              icon={Cloud}
              iconColor="danger"
              certImage="assets/img/sections/certs/AWS-SolutionArchitect.jpg"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="AWS Certified Developer - Assoc"
              description="Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices."
              icon={Cloud}
              certImage="assets/img/sections/certs/AWS-DeveloperAssociate.jpg"
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="AWS Certified Cloud Practioner"
              description="Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects."
              icon={Cloud}
              certImage="assets/img/sections/certs/AWS-CloudPractitioner.jpg"
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
