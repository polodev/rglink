import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import LinkTab from './LinkTab';
import links1 from '../data/links1';
import links2 from '../data/links2';
import links3 from '../data/links3';

class LinkTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Tabs onSelect={(index, label) => console.log(label + ' selected')}>
                <Tab label="Links 1">
                    <LinkTab title="" links={links1}></LinkTab>
                </Tab>
                <Tab label="Linkg 2g">
                    <LinkTab title="" links={links2}></LinkTab>
                </Tab>
                <Tab label="Links 3">
                    <LinkTab title="" links={links3}></LinkTab>
                </Tab>
            </Tabs>
        </div> );
    }
}
 
export default LinkTabs;