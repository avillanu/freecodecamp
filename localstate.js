class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);


  }


  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage(event){
    var stateInput = this.state.input.slice();
    var concatInput = this.state.messages.concat(stateInput);
     this.setState({
    input: '',
    messages: concatInput
    });
  }




  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
          <input onChange={this.handleChange} value={this.state.input}></input>
          <button onClick={this.submitMessage} >Submit</button>
          <ul>
          {this.state.messages.map((elem) =>
          <li>{elem}</li>)};
          </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
