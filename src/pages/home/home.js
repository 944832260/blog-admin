import React, { Component } from 'react';
import './home.scss'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div id='home'>
                homes
                {/* <img src={require('../../assets/shopicon.png')} alt=""/> */}
                <img src={require('../../assets/shopicon.png')} alt=""/>
            </div>
        );
    }
}

export default Home;