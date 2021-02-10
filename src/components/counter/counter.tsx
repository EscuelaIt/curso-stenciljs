import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'tars-counter',
  styleUrl: 'counter.css',
})
export class Counter {
  @Listen('clicked', { target: 'window' })
  handlerClicked(ev: Event) {
    ev.preventDefault();
    if (this.actualValue !== this.initialValue) {
      this.actualValue = this.initialValue;
    }
  }

  @Prop()
  initialValue: number = 0;

  @State() actualValue: number = this.initialValue;

  @Watch('initialValue')
  watchInitialValue(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }

    this.actualValue = newValue;
  }

  async componentWillLoad(): Promise<void> {
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
  }

  componentWillUpdate(): void {
    console.log('TARS se ha actualizado');
  }

  onClickHandler(ev: Event) {
    ev.preventDefault();
    const action = (ev.target as Element).getAttribute('data-action');
    if (action !== null) {
      action === 'add' ? this.actualValue++ : (this.actualValue -= 1);
    }
  }

  render() {
    return (
      <div class="tars-counter">
        <button
          disabled={this.actualValue === 0}
          type="button"
          data-action="subtract"
          onClick={this.onClickHandler.bind(this)}
        >
          <span>-</span>
        </button>
        <span class="number-label">{this.actualValue}</span>
        <button type="button" data-action="add" onClick={this.onClickHandler.bind(this)}>
          <span>+</span>
        </button>
      </div>
    );
  }
}
