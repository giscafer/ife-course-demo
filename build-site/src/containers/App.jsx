import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
import HeaderContainer from './HeaderContainer';
import Footer from '../components/common/footer/Footer';
import Jumbotron from '../components/goods/Jumbotron';
import GoodContent from './GoodContent';


class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderContainer />
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" />*/}
                    <Jumbotron />
                </div>
                <GoodContent/>
                <Footer />
            </div>
        )
    }
}

export default App;
