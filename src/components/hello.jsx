import React from 'react'
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
    <div>
      <h1>hello {this.props.name}, {this.props.age}</h1>
      <h2>Its is {this.state.date.toLocaleTimeString()}</h2>
    </div>
    );
  }
}


  ReactDOM.render(
    <Hello name="hans" age="23"/>,
    document.getElementById('root')
  );





export default Hello
