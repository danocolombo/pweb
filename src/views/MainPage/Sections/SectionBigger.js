import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Cloud from '@material-ui/icons/FilterDrama';
import Devices from '@material-ui/icons/ImportantDevices';
import Integration from '@material-ui/icons/SettingsInputComponent';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';

import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js';
import { AccessibilityNew, HomeOutlined, Restaurant } from '@material-ui/icons';

const useStyles = makeStyles(productStyle);

export default function SectionBigger() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify='center'>
                <GridItem xs={12} sm={8} md={8}>
                    <h2 className={classes.title}>Indescribable</h2>
                    <h5 className={classes.description}>
                        Regardless of where we are in life, we had never
                        imagined what we have experienced and the bredth of life
                        as we know it. The fact is that we made it this far, and
                        if you are like me, there have been times when that was
                        in doubt. But there is somthing bigger than ourselves
                        going on.
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={4} md={4}>
                        <InfoArea
                            title='Wholeness'
                            description='When things matter more than just living'
                            icon={AccessibilityNew}
                            iconColor='success'
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                        <InfoArea
                            title='Engineering'
                            description='Using our mind to be creative, and contribute to evolution'
                            icon={Devices}
                            iconColor='success'
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                        <InfoArea
                            title='Homeowner'
                            description='Messy, challenging and eventful'
                            icon={HomeOutlined}
                            iconColor='success'
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={4}>
                        <InfoArea
                            title='Consumption'
                            description='We do have to eat, but it does not have to be boring'
                            icon={Restaurant}
                            iconColor='success'
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
