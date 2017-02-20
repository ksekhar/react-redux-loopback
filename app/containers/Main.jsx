import {connect} from 'react-redux';

import MainComponent from '../components/main/main';


function mapStateToProps(state) {
  const props = {
    app: state.app,
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  return {
    handleSubmit(e) {
      e.preventDefault();
      dispatch({type: 'LOGIN'});
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
