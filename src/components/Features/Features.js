import React from 'react';
import './Features.css';
import activeLinePic from '../../assets/ActiveLineScreenshot.png';

const features = () => {
    return (
        <div className="features-container">
            <div>
                <h2>
                    <span className="heading-hash">##</span><span> Features</span>
                </h2>
            </div>
            <div className="features">
                <div>
                    <p>Feature heading here.</p>
                    <img src={activeLinePic} className="feature-pic" alt=""/>
                    <p>Description of a feature here.</p>
                </div>
                <div>
                    <p>Feature heading here.</p>
                    <img src={activeLinePic} className="feature-pic" alt=""/>
                    <p>Description of a feature here.</p>
                </div>
                <div>
                    <p>Feature heading here.</p>
                    <img src={activeLinePic} className="feature-pic" alt=""/>
                    <p>Description of a feature here.</p>
                </div>
                <div>
                    <p>Feature heading here.</p>
                    <img src={activeLinePic} className="feature-pic" alt=""/>
                    <p>Description of a feature here.</p>
                </div>
                <div>
                    <p>Feature heading here.</p>
                    <img src={activeLinePic} className="feature-pic" alt=""/>
                    <p>Description of a feature here.</p>
                </div>
                <div>
                    <p>Feature heading here.</p>
                    <img src={activeLinePic} className="feature-pic" alt=""/>
                    <p>Description of a feature here.</p>
                </div>
            </div>
        </div>
    );
};

export default features;
