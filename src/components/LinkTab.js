import React, {Component} from 'react';
import LinkCard from './LinkCard';
import LinkClicker from './LinkClicker';

class LinkTab extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
    }
    render() { 
        var links = this.props.links;
        return (
            <div className="mt-3">
                { this.props.title ? <h2>{this.props.title}</h2> : '' }
                <p>No of Links - {this.props.links.length}</p>

                <LinkClicker links={this.props.links} />
                {
                 this.props.links.map((link, index) => <LinkCard key={index} link={link} />)
                }
            </div>
        );
    }
}
 
export default LinkTab;