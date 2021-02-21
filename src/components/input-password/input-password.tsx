import { Component, h, Element, Event, EventEmitter, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'tars-input-password',
  styleUrl: 'input-password.css',
  shadow: true,
})
export class InputPassword {
  @Element() el!: HTMLTarsInputPasswordElement;

  @Prop({
    attribute: 'placeholder',
  })
  inputPlaceholder?: string;

  @State() type: 'text' | 'password' = 'password';

  @Prop({
    attribute: 'name',
    mutable: true,
    reflect: false,
  })
  inputName: string = '';

  @Event({})
  showPassword: EventEmitter<boolean>;

  private inputPassword: HTMLInputElement;

  // ways to bind (1)
  // constructor() {
  //   this.handlerInput = this.handlerInput.bind(this);
  // }

  render() {
    return (
      <Host>
        <div class={'wrapper'}>
          <input
            ref={el => (this.inputPassword = el)}
            type={this.type}
            name={this.inputName}
            placeholder={this.inputPlaceholder}
            // ways to bind (2)
            onInput={this.handlerInput.bind(this)}

            // ways to bind (3)
            // onInput={() => this.handlerInput()}
          />
          <button type="button" onClick={this.handlerClick.bind(this)}>
            Button
          </button>
        </div>
        <slot />
      </Host>
    );
  }

  componentDidLoad() {
    this.el.setAttribute('checked', 'true');
  }

  private handlerInput() {
    this.inputPassword.value;
  }

  private handlerClick(ev: Event) {
    ev.preventDefault();

    if (this.type === 'password') {
      this.type = 'text';
      this.showPassword.emit(true);
      return;
    }

    this.type = 'password';
    this.showPassword.emit(false);
    return;
  }
}
