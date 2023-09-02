import React, { Component } from 'react';
import { Redirect } from 'react-router';
export default class LoginComponent extends Component {
    render(){            
        return (<Redirect to="/main" />);
    }
}