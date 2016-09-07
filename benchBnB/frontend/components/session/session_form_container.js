import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processType = (formType === 'login') ? login : signup;

  return {
    processType: user => dispatch(handleSubmit(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
