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
import people_dhaka_2 from '../data/people_dhaka_2.js';
import people_dhaka_3 from '../data/people_dhaka_3.js';
import people_dhaka_nearby_1 from '../data/people_dhaka_nearby_1.js';
import people_kachua_1 from '../data/people_kachua_1.js';
import people_kachua_2 from '../data/people_kachua_2.js';
import people_kachua_3 from '../data/people_kachua_3.js';
import people_narshingdi_1 from '../data/people_narshingdi_1.js';
import people_other_places from '../data/people_other_places.js';
import people_co_workers_1 from '../data/people_co_workers_1.js';
import people_professional_1 from '../data/people_professional_1.js';
import people_classmates_1 from '../data/people_classmates_1.js';
import people_classmates_2 from '../data/people_classmates_2.js';
import content_creator_1 from '../data/content_creator_1.js';
import people_gym_1 from '../data/people_gym_1.js';
import people_elite_1 from '../data/people_elite_1.js';

var linkItems = [
    {
        text: 'Priority',
        item: priority,
    },
    {
        text: 'Friends',
        item: friends,
    },
    {
        text: 'Friends 2',
        item: friends2,
    },
    {
        text: 'Soothing',
        item: soothing,
    },
    {
        text: 'links1',
        item: links3,
    },
    {
        text: 'Links3',
        item: links3,
    },
    {
        text: 'people_dhaka_1',
        item: people_dhaka_1,
    },
    {
        text: 'people_dhaka_2',
        item: people_dhaka_2,
    },
    {
        text: 'people_dhaka_3',
        item: people_dhaka_3,
    },
    {
        text: 'people_dhaka_nearby_1',
        item: people_dhaka_nearby_1,
    },
    {
        text: 'people_kachua_1',
        item: people_kachua_1,
    },
    {
        text: 'people_kachua_2',
        item: people_kachua_2,
    },
    {
        text: 'people_kachua_3',
        item: people_kachua_3,
    },
    {
        text: 'people_narshingdi_1',
        item: people_narshingdi_1,
    },
    {
        text: 'people_other_places',
        item: people_other_places,
    },
    {
        text: 'people_co_workers_1',
        item: people_co_workers_1,
    },
    {
        text: 'people_professional_1',
        item: people_professional_1,
    },
    {
        text: 'people_classmates_1',
        item: people_classmates_1,
    },
    {
        text: 'people_classmates_2',
        item: people_classmates_2,
    },
    {
        text: 'people_gym_1',
        item: people_gym_1,
    },
    {
        text: 'content_creator_1',
        item: content_creator_1,
    },
];

class LinkTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                {
                    linkItems.map(linkItem => 
                            <Tab label={linkItem.text}>
                                <LinkTab title="" links={linkItem.item}></LinkTab>
                            </Tab>

                        )
                }
                
            </Tabs>
        </div> );
    }
}
 
export default LinkTabs;