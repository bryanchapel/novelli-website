import React from 'react';
import './SignUp.css';

const signUp = () => {
    return (<form>
        <input type="email" autoComplete="email" name="email" placeholder="ernst@hemming.com" />
        <input type="submit" value="Sign up!"/>
    </form>);
};

export default signUp;