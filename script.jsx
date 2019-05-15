class List extends React.Component {
  constructor(props){
    super(props)
    this.changeHandler = this.changeHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  render() {
      // render the list with a map() here

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={(event) => {this.changeHandler(event)}}
          value={this.state.word}
          />
          <button>add item</button>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

