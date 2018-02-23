import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import './AppContainer.css';

const mapStateToProps = (state) => {
    return { state };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);