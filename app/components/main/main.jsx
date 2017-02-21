import React from 'react';
import { Card, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './main.css';

const Main = ({
  handleSubmit,
  email,
  password
}) => {
  return (
    <Card className="container">
      <form action="/auth/local" onSubmit={handleSubmit}>
        <h2 className="card-heading">Sign In</h2>
        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            value={email}
          />
        </div>
        <div className="field-line">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            value={password}
          />
        </div>

        <div className="button-line">
          <RaisedButton type="submit" label="Login" primary />
        </div>
        <CardText>New to TapGoods? <Link to={'/signup'}>Sign Up</Link></CardText>
      </form>
    </Card>
  );
};

export default Main;
