import {Component} from 'react';
class PasswordComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            password: 'friends',
            showChildren: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        if(this.state.value == this.state.password) {
            this.setState({ showChildren: true });
        }else {
            alert('nothing match');
        }
        event.preventDefault();
    }
    render() { 
        console.log('value', this.state.value);
        return this.state.showChildren ? this.props.children : 
            <div className="card mb-2">
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="password">Secret</label>
                            <input value={this.state.value} onChange={this.handleChange} type="password" autofocus id="password" className="form-control"/>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div> 
    }
}
 
export default PasswordComponent;