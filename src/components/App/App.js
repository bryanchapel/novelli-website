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
                    {/* <Features /> */}
                    <SignUp />
                    <div className="coming-soon">
                    <p>
                        Coming soon after launch... <i className="fab fa-android android-green"></i> <i className="fab fa-apple apple-white"></i>
                    </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
