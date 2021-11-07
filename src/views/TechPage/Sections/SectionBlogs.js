import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import php_mysql from "assets/img/php-mysql.png";
import lightsail_wordpress from "assets/img/lightsail-wordpress.png";
import ec2_rds from "assets/img/ec2vpc2rdsvpc.png";
import mern from "assets/img/mern.png";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 1 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Integrations & Engagements</h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={php_mysql} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Info>
                      <h6 className={classes.cardCategory}>WEB HOSTING SERVICE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        CRUD system: php & mysql
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Full CRUD system with custom PHP web solution with the backend interface to MySQL database. 
                      Extensive relational database design and implementation.  The system was hosted on a popular web
                      hosting service, which was Windows webserver and integrated with MySQL database also hosted with
                      the service.
                    </p>
                    {/* <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p> */}
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={7} md={7}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        {/* <TrendingUp /> */}
                        Cloud
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        AWS Lightsail Wordpress System
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      This cloud solution involved the network configuration and security layer to support the Linux system, networked elastic file system 
                      and an RDS database setup to use MySQL database.
                    </p>
                    {/* <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p> */}
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={lightsail_wordpress} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={ec2_rds} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Info>
                      <h6 className={classes.cardCategory}>CLOUD</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        AWS PHP and RDS MySQL
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Linux webserver integrated with RDS database (MySQL), both on indivual AWS VPCs. This involved the configuration of the servers as well
                      as the network security groups and system identifies
                    </p>
                    {/* <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p> */}
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={7} md={7}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        {/* <TrendingUp /> */}
                        Cloud
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        React on Heroku w/MongoDB
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Ported the original PHP/MySQL database system to React and MongoDB.  This involved porting all the PHP
                      interfaces into React screens, and Redux implemented to manage the single-page transitions.<br/>
                      Need to convert the database design from RDM to the documentment database (MongoDB)<br/>
                      Also utilized the Heroku automated build system to manage code migrations and updates.
                    </p>
                    {/* <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p> */}
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={mern} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 1 END */}
      
    </div>
  );
}
