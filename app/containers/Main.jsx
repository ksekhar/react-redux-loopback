// import {PropTypes} from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/modules/app/actions';

// import { bindActionCreators } from 'redux';

import MainComponent from '../components/main/main';

const mapStateToProps = (state, ownProps) => {
  const props = {
    app: state.app,
    email: ownProps.email,
    password: ownProps.password
  };
  return props;
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      dispatch(login({email: ownProps.email, password: ownProps.password}));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
