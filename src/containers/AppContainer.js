import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getChangeCurrentCity } from '../actions/actionCreators';
import { getChangeGenerated } from '../actions/actionCreators';
import App from '../components/App';
import './AppContainer.css';

const mapStateToProps = (state) => {
    return { 
        app: state.app 
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
            handleChangeCurrentCity: getChangeCurrentCity,
            handleChangeGenerated: getChangeGenerated,
        }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);