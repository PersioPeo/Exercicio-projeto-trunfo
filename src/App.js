import Form from "./componets/Form";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardName: "",
      cardDescription: "",
      cardAttr1: "0",
      cardAttr2: "0",
      cardAttr3: "0",
      cardImage: "",
      cardRare: "normal",
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      nameFilter: "",
      rareFilter: "todas",
      trunfoFilter: false
    };
  } // fim do contructor
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      nameFilter,
      rareFilter,
      trunfoFilter
    } = this.state;
    const { onInputChange, onSaveButtonClick, updateCardList } = this;
    return (
      <Form
        onInputChange={onInputChange}
        cardName={cardName}
        cardDescription={cardDescription}
        cardAttr1={cardAttr1}
        cardAttr2={cardAttr2}
        cardAttr3={cardAttr3}
        cardImage={cardImage}
        cardRare={cardRare}
        cardTrunfo={cardTrunfo}
        hasTrunfo={hasTrunfo}
        isSaveButtonDisabled={isSaveButtonDisabled}
        onSaveButtonClick={onSaveButtonClick}
      />
    );
  }
} // fim da class
export default App;
