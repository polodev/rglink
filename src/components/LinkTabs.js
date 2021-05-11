import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import LinkTab from './LinkTab';
import links1 from '../data/links1';
import friends from '../data/friends';
import friends2 from '../data/friends2';
import priority from '../data/priority';
import soothing from '../data/soothing';
import links3 from '../data/links3';

import people_dhaka_1 from '../data/people_dhaka_1.js';
import people_dhaka_1 from '../data/people_dhaka_2.js';
import people_dhaka_1 from '../data/people_dhaka_3.js';
import people_dhaka_1 from '../data/people_dhaka_nearby_1.js';
import people_dhaka_1 from '../data/people_kachua_1.js';
import people_dhaka_1 from '../data/people_kachua_2.js';
import people_dhaka_1 from '../data/people_narshingdi_1.js';
import people_dhaka_1 from '../data/people_other_places.js';
import people_dhaka_1 from '../data/people_co_workers_1.js';



class LinkTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                <Tab label="Priority">
                    <LinkTab title="" links={priority}></LinkTab>
                </Tab>
                <Tab label="Friends">
                    <LinkTab title="" links={friends}></LinkTab>
                </Tab>
                <Tab label="Friends 2">
                    <LinkTab title="" links={friends2}></LinkTab>
                </Tab>
                <Tab label="Soothing">
                    <LinkTab title="" links={soothing}></LinkTab>
                </Tab>
                <Tab label="Links 1">
                    <LinkTab title="" links={links1}></LinkTab>
                </Tab>
                <Tab label="Links 3">
                    <LinkTab title="" links={links3}></LinkTab>
                </Tab>
            </Tabs>
        </div> );
    }
}
 
export default LinkTabs;