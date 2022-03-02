import React from "react";

class Input extends React.Component {
  render() {
     const {textLabel, cardName, nomeDoHtmlFor, nomeDoAtributo} = this.props
    return (
      <>
        <section>
          <label htmlFor={nomeDoHtmlFor}>
            {textLabel}
            <input
              name={cardName}
              data-testid={nomeDoAtributo}
              value={ cardName }
              type="text"
            />
          </label>
        </section>
      </>
    );
  }
}
export default Input;
