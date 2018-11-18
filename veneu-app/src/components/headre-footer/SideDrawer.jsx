import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElemnt = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
        });
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElemnt('featured')}>
                    Event starts in
                </ListItem>

                <ListItem button onClick={()=> scrollToElemnt('venueNFO')}>
                    Venue NFO
                </ListItem>

                <ListItem button onClick={()=> scrollToElemnt('highlights') }>
                    Highlights
                </ListItem>

                <ListItem button onClick={()=> scrollToElemnt('pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={()=> scrollToElemnt('location')}>
                    Location
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;