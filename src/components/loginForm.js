import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Input from './common/input';

class LoginForm extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {},
    };

    schema = {
        username: Joi.stringify().required().label('Username'),
        password: Joi.stringify().required().label('Password'),
    };

    doSubmit = () => {
        console.log('Submitted');
    };

    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm;
