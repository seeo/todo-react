class List extends React.Component {
  constructor(props){
    super(props)
    //this.changeHandler = this.changeHandler.bind( this );
  }

  state = {
    list : [],
    word : "",
  }

  changeHandler = event => {
    this.setState({word: event.target.value});
    console.log("generating changed word...", event.target.value);
  }

  clickHandler = event =>{
    //when button is clicked, make the state of word back to null
    this.setState({ word: " " });
    //and then as a precautionary measure, prevent page from trying to load the action url-> 'cause gonna change to submit button.
    event.preventDefault();
    //and then also start pushing the 'text' into the list which currently begins as empty

    //first declare a new variable and assign to this.state.list; pushList is an array that will hold entered words
    const pushList = this.state.list;
    //also declare a new variable and assign to this.state.word; insertWord is the word that was typed and will be pushed into pushList array
    const insertWord = this.state.word;
    //let the pushing begin!
    pushList.push(insertWord);

    console.log("want to see what is inside list", this.state.list);
    console.log("remove word from state but push...", event.target.value);
  }


  render() {
      // render the list with a map() here
    const list = this.state.list;
    const items = list.map((item, index)=>{
        return (
            <li key = {index+item}>
                {item}
            </li>
        )
    });


      console.log("rendering");
      /*by wrapping the form tag around the input and button tags, and also setting the button type to submit,
      I now have the ability to simply use the Enter/Return key on my keyboard to submit this form */
      return (

            <div className = "list">
              <form className="submit-form" onSubmit={(event) => { this.clickHandler(event) }}>
                <input onChange={(event) => {this.changeHandler(event)}}
                    value={this.state.word}
                />
                    <button type="submit">
                        add item
                    </button>
                </form>
                <ol> {items}</ol>
            </div>

      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

