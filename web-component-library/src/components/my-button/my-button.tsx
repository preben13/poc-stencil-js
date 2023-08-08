// button.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {
  @Prop() label: string;
  @Prop() disabled: boolean;

  render() {
    return (
      <button class="button" disabled={this.disabled}>
        {this.label}
      </button>
    );
  }
}
