import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'tars-input',
  styleUrl: 'input.css',
})
export class Input {
  // private labelText = 'Select pizza';
  private input!: HTMLInputElement;

  // @ts-ignore
  private styleProperties: { [key: string]: string } = {
    display: 'flex',
    padding: '1rem',
  };

  translateLabelText(lang: string) {
    const translateText = {
      es: 'Selecciona tu pizza: ',
      en: 'Select pizza: ',
    };

    return translateText[lang];
  }

  greet() {
    return false;

    {

    }
  }

  // The render function simply needs to return the template, which will use JSX, that the component should use.
  render() {
    const language = navigator.language;

    return (
      <Host>
        <div class={{ 'tars-input': true }}>
          {this.greet()}
          {language === 'es' ? (
            <label>
              {/*add a style to an element in JSX*/}
              <span style={{ fontSize: '1.1rem' }}>🍕 {this.translateLabelText(navigator.language)}</span>
              <input
                // reference
                ref={el => {
                  return (this.input = el as HTMLInputElement);
                }}
                type="text"
                // events
                onInput={this.handlerInput.bind(this)}
              />
            </label>
          ) : (
            <label>
              <span style={{ fontSize: '1.1rem' }}>🏴󠁧󠁢󠁥󠁮󠁧󠁿 {this.translateLabelText(navigator.language)}</span>
              <input
                ref={el => (this.input = el as HTMLInputElement)}
                type="text"
                onInput={this.handlerInput.bind(this)}
              />
            </label>
          )}
          {/*We can use the map method on an array of data to loop through the data and render out a part of the template for each iteration*/}
          {['rafael', 'miguel', 'juan'].map(x => {
            return <li>{x}</li>;
          })}
        </div>
      </Host>
    );
  }

  private handlerInput() {
    console.log(this.input.value);
  }
}
