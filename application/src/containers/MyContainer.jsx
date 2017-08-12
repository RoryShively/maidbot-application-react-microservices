import React from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../actions/actions';

// Components
import MyTitle from '../components/MyTitle';

class MyContainer extends React.Component {

  submitForm(e) {
    e.preventDefault;
    console.log(this.state);
  };

  render() {
    return (
      <section>
        <div>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => this.setState({username: e.target.value})}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => this.setState({password: e.target.value})}
          />
          <button onClick={(e) => { this.submitForm(e) }}>Login</button>
        </div>
      </section>
    );
  }
}

// Map the state to the props of this component
const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

export default connect(
  mapStateToProps
)(MyContainer);
