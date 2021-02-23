import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'tars-input-password',
  styleUrls: {
    ios: 'input-password.ios.scss',
    desktop: 'input-password.scss',
  },
  shadow: true,
})
export class InputPassword {
  @Element() el!: HTMLTarsInputPasswordElement;

  /**
   * Set placeholder.
   */
  @Prop({
    attribute: 'placeholder',
  })
  inputPlaceholder?: string;

  @Prop() value?: string;

  @State() type: 'text' | 'password' = 'password';

  @Prop({
    attribute: 'name',
    mutable: false,
    reflect: true,
  })
  inputName: string = '';

  @Prop({
    attribute: 'visible',
  })
  isPasswordVisible: boolean = false;

  @State() fruits = ['melon', 'plátano', 'fresa'];

  @Event()
  showPassword: EventEmitter<boolean>;

  @Watch('value')
  evaluatePasswordSecurity() {
    const passwordCharts = Array.from(this.value);

    if (passwordCharts.includes('#') && passwordCharts.some(x => !isNaN(+x))) {
      console.log('your password is very strong');
      return;
    }

    if (passwordCharts.includes('#') || passwordCharts.some(x => !isNaN(+x))) {
      console.log('your password is strong');
    }
  }

  private inputPassword: HTMLInputElement;

  // ways to bind (1)
  // constructor() {
  //   this.handlerInput = this.handlerInput.bind(this);
  // }

  @Method()
  async getValue() {
    return this.isPasswordVisible;
  }

  render() {
    return (
      <Host>
        <div class={'wrapper-button'}>
          <input
            ref={el => (this.inputPassword = el as HTMLInputElement)}
            onInput={this.handlerInput.bind(this)}
            type={this.type}
            name={this.inputName}
            placeholder={this.inputPlaceholder}
            // ways to bind (2)

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

  private handlerInput() {
    this.value = this.inputPassword.value;
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
