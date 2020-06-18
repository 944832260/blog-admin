import React, { Component } from 'react';
import './home.scss'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0,
        }
    }
    add = () =>{
        let {num} = this.state;
        this.setState({num:++num})
        this.setState({num:++num})
    }
    render() {
        return (
            <div id='home'>
                homes
                {/* <img src={require('../../assets/shopicon.png')} alt=""/> */}
                <img src={require('../../assets/shopicon.png')} alt=""/>
                <p>{this.state.num}</p>
                <button onClick={()=>{this.add()}}>+++++</button>
            </div>
        );
    }
}

export default Home;