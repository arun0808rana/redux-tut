import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementActionCreator } from "./redux/actions";

class DecrementCounter extends Component {
  constructor(props) {
    super(props);
    this.decrement = this.decrement.bind(this);
  }

  decrement = () => {
    //   alternative-1
    // this.props.decrementor();
    
    //   alternative-2
    this.props.dispatch(decrementActionCreator())
  };

  render() {
    return <button onClick={this.decrement}>-</button>;
  }
}

const mapStateToProps = (state) => ({ count: state.count });

//   alternative-1
// const mapDispatchToProps = (dispatch) => ({
//   decrementor: () => dispatch(decrementActionCreator()),
// });

//   alternative-1
// export default connect(mapStateToProps, mapDispatchToProps)(DecrementCounter);

//   alternative-2
// notice there is no mapDispatchToProps. Still we you can use this.props.dispatch
export default connect(mapStateToProps)(DecrementCounter);
