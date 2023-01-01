import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import LinkTab from './LinkTab';
import links1 from '../data/links1';
import friends from '../data/friends';
import friends2 from '../data/friends2';
import friends3 from '../data/friends3';
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
import people_kachua_4 from '../data/people_kachua_4.js';
import people_kachua_5 from '../data/people_kachua_5.js';

import people_narshingdi_1 from '../data/people_narshingdi_1.js';
import people_other_places from '../data/people_other_places.js';
import people_co_workers_1 from '../data/people_co_workers_1.js';

import people_professional_1 from '../data/people_professional_1.js';
import people_professional_2 from '../data/people_professional_2.js';

import people_classmates_1 from '../data/people_classmates_1.js';
import people_classmates_2 from '../data/people_classmates_2.js';
import people_classmates_3 from '../data/people_classmates_3.js';

import people_india_1 from '../data/people_india_1.js';

import content_creator_1 from '../data/content_creator_1.js';
import content_creator_2 from '../data/content_creator_2.js';

import people_gym_1 from '../data/people_gym_1.js';
import people_gym_friends_1 from '../data/people_gym_friends_1';
import people_elite_1 from '../data/people_elite_1.js';

import instagram_general_people_1 from '../data/instagram_general_people_1';
import instagram_general_people_2 from '../data/instagram_general_people_2';
import instagram_gym_people_1 from '../data/instagram_gym_people_1';
import instagram_gym_people_2 from '../data/instagram_gym_people_2';

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
        text: 'Friends 3',
        item: friends3,
    },
    {
        text: 'Soothing',
        item: soothing,
    },
    {
        text: 'links1',
        item: links1,
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
        text: 'people_kachua_4',
        item: people_kachua_4,
    },
    {
        text: 'people_kachua_5',
        item: people_kachua_5,
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
        text: 'people_professional_2',
        item: people_professional_2,
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
        text: 'people_classmates_3',
        item: people_classmates_3,
    },
    {
        text: 'people_gym_1',
        item: people_gym_1,
    },
    {
        text: 'people_gym_friends_1',
        item: people_gym_friends_1,
    },
    {
        text: 'people_elite_1',
        item: people_elite_1,
    },
    {
        text: 'people_india_1',
        item: people_india_1,
    },
    {
        text: 'content_creator_1',
        item: content_creator_1,
    },
    {
        text: 'content_creator_2',
        item: content_creator_2,
    },
    {
        text: 'instagram_general_people_1',
        item: instagram_general_people_1,
    },
    {
        text: 'instagram_general_people_2',
        item: instagram_general_people_2,
    },
    {
        text: 'instagram_gym_people_1',
        item: instagram_gym_people_1,
    },
    {
        text: 'instagram_gym_people_2',
        item: instagram_gym_people_2,
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
