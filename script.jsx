class List extends React.Component {
  constructor(props){
    super(props)
    this.changeHandler = this.changeHandler.bind(this);
  }

  state = {
    list : [],
    word : "",
    validation : ""
  }

  changeHandler(event){
      if (event.target.value.length != 0 && event.target.value.length < 20){
        event.target.className = "";
        this.setState({word: event.target.value});
        this.setState({ validation: "" })
        console.log("generating changed word...", event.target.value);
    }else{
        //the className has been set in external stylesheet
        event.target.className = "validation-error";
        this.setState({validation: "Please enter at least one character, but less than 20"})
        console.log("character length issue raised", event.target.value.length);
    }
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

  deleteToDo = index =>{
      console.log(index);
      const spliceList = this.state.list;
      spliceList.splice(index, 1)
      this.setState({spliceList});
  }

  render() {
      // render the list with a map() here
    const list = this.state.list;
    const items = list.map((item, index)=>{
        return (
            <li className = "clickable-removeable" key = {index+item} onClick={this.deleteToDo.bind(this,index)}>
                {item}
            </li>
        )
    });

      {/* can we actually put a onClick event listener inside the render ({return()}) method?
    sauce: https://stackoverflow.com/questions/43893508/remove-items-form-the-list-in-react-js */}

      console.log("rendering");
      console.log(this.state);
      /*by wrapping the form tag around the input and button tags, and also setting the button type to submit,
      I now have the ability to simply use the Enter/Return key on my keyboard to submit this form */
      return (
            <div className = "list">
                <form className="submit-form" onSubmit={(event) => { this.clickHandler(event) }}>
                    <input onChange={(event) => {this.changeHandler(event)}}
                        value={this.state.word}
                        placeholder="John Wick 3"
                    />
                    <button type="submit" >
                        add item
                    </button>
                </form>
                <p className= "validation-error-text">
                    {this.state.validation}
                </p>
                <ol>
                    {items}
                </ol>
                <p className = "instructions">
                    Remove items from list by simply clicking on them
                </p>
            </div>

      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

