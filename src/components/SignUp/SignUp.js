import React from 'react';
import './SignUp.css';

const signUp = () => {
    return (
        <div>
            <div id="mc_embed_signup">
                <form action="https://novelliapp.us18.list-manage.com/subscribe/post?u=4ca7d4485fbba6427cf275bdd&amp;id=1291d013b4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <label htmlFor="mce-EMAIL">Enter your email below to be notified when our beta launches, and to be one of our limited first users.</label>
                        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                        <div className="chimp-div" aria-hidden="true">
                            <input type="text" name="b_4ca7d4485fbba6427cf275bdd_1291d013b4" tabIndex="-1" />
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default signUp;