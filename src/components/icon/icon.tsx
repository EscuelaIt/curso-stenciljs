import { Component, ComponentWillLoad, EventEmitter, h, Host, Prop, Event } from '@stencil/core';
import { getSVG } from '../../utils/utils';
import { IconName } from './types/icon-name';
import { Icons } from './utils/icon';
import { Size } from './types/size';

@Component({
  tag: 'tars-icon',
  styleUrl: 'icon.scss',
  assetsDirs: ['assets/svg'],
  shadow: true,
})
export class Icon implements ComponentWillLoad {
  @Prop({
    attribute: 'name',
  })
  icon!: IconName;

  @Prop() size: Size = 'SMALL';

  @Prop({ reflect: true }) ariaHidden = 'true';

  private svgContent!: string;

  @Event() clicked: EventEmitter<boolean>;

  async componentWillLoad() {
    this.svgContent = await getSVG(`./assets/svg/${Icons[this.icon]}`);
  }

  get iconSize(): string {
    if (this.size.toUpperCase() !== 'SMALL') {
      return this.size === 'MEDIUM' ? 'medium' : 'large';
    }

    return 'small';
  }

  render() {
    return (
      <Host class="icon" onClick={() => this.clicked.emit(true)}>
        {this.icon !== undefined ? (
          <div
            class={{ box: true, [this.iconSize]: this.size !== undefined }}
            innerHTML={this.svgContent}
          />
        ) : (
          <div class={{ box: true }} />
        )}
      </Host>
    );
  }
}
