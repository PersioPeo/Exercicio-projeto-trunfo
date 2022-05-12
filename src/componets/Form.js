import React from "react";
import Input from "./Input";

class Form extends React.Component {
  render() {
   
    const { cardName } = this.props;

    

    
    return (
      <>
      
      <Input 
        textLabel = 'Nome : '
        cardName = { cardName } 
        nomeDoAtributo = 'name-input'
        nomeDoHtmlFor = 'cardName'
      />
    </>
    );
  }
}
export default Form;

