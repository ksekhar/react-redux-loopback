import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';

import MainComponent from '../components/main/main';


function mapStateToProps(state) {
    const props = {
        app: state.app,
    };
    return props;
}
// function mapDispatchToProps(dispatch) {
function mapDispatchToProps(dispatch) {
    return {
        onSubmit(form) {
            dispatch({type: 'LOGIN', payload: form});
        }
        // actions: bindActionCreators(boovatechActions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
