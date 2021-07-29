import React from "react";

class MessageClass extends React.Component {
  constructor(props) {
    super(props);

    console.log('Start class - MessageClass');
    console.log('class - constructor');

    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('class - componentDidMount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('class - componentDidUpdate', 'prevProps = ', prevProps, 'prevProps=', prevState);
  }
  componentWillUnmount() {
    console.log('class - componentWillUnmount');
  }

  handleClick = () => {
    this.setState(currentState => {
      return { count: currentState.count + 1 }
    },
      () => console.log('Произведено обновление counter')
    )
  }

  render() {
    console.log('render');

    return <>
      <p> {this.props.message}</p>
      <p>Counter = {this.state.count}</p>
      <button onClick={this.handleClick}>+1</button>
    </>
  }
}
export default MessageClass;