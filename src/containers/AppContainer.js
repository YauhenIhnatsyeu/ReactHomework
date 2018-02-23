import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChangeCity } from '../actions/actionCreators';
import { getChangeGenerated } from '../actions/actionCreators';
import App from '../components/App';
import './AppContainer.css';

const mapStateToProps = (state) => {
    return { state: state.App };
}

const mapDispatchToProps = (dispatch) => {
    return {
        bindActionCreators({
            handleChangeGenerated: getChangeGenerated,
            handleChangeCity: getChangeCity
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);