import React, { Component } from 'react';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';
import editorPic from '../../assets/Lightlines.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <div className="App">
                <div>
                    <header className="App-header">
                        <h1>
                            <span class="heading-hash">#</span> NOVELLI&nbsp;<span class="cursor"> </span>
                        </h1>
                    </header>
                    <p>
                        <strong>NOVELLI</strong> <em>[nov uh lee]</em> : A minimal, distraction free writing application for Mac OS, Windows, and Linux.
                    </p>
                    <p><img src={editorPic} className="editor-pic" /></p>
                    <p>
                        Enter your email below to be notified when our beta launches, and to be one of our limited first users.
                    </p>
                    <SignUp />
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
