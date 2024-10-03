import React, {Component} from 'react';

class CGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Hello World!'
        };
    }

    handleChangeGreeting = () => {
        if (this.state.greeting === 'Hello Universe!') {
            this.setState({greeting: 'Hello World!'});
            return;
        } 
        this.setState({greeting: 'Hello Universe!'});
        
    };

    render() {
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.handleChangeGreeting}>Change Greeting</button>
            </div>
        );
    }
}

export default CGreeting;
