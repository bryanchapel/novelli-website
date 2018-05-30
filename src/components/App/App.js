import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import editorPic from '../../assets/Lightlines.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div className="App">
                <div>
                    <Header />
                    <div><img src={editorPic} className="editor-pic" alt=""/></div>
                    <Features />
                    <SignUp />
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
