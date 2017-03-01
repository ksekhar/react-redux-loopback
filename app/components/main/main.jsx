/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { Card, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { login } from '../../redux/modules/app/actions';
import './main.css';


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }


  onFormSubmit(e) {
    e.preventDefault();

    this.props.login(this.state);
  }


  render() {
    return (
      <Card className="container">
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <h2 className="card-heading">Sign In</h2>
          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              required
            />
          </div>
          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              required
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="login" primary/>
          </div>
          <CardText>New to TapGoods? <Link to={'/signup'}>Sign Up</Link></CardText>
        </form>
      </Card>
    );
  }
}

export default connect(null, {login})(Main);
