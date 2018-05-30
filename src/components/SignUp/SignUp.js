import React from 'react';
import './SignUp.css';

const signUp = () => {
    return (
        <div>
            <p>
                Enter your email below to be notified when our beta launches, and to be one of our limited first users.
            </p>
            <form>
                <input type="email" autoComplete="email" name="email" placeholder="ernst@hemming.com" />
                <input type="submit" value="Sign up!"/>
            </form>
        </div>
    );
};

export default signUp;