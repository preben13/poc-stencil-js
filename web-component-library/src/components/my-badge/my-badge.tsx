// badge.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-badge',
  styleUrl: 'my-badge.scss',
  shadow: false,
})
export class MyBadge {
  @Prop() value: string;

  render() {
    return (
      <span class="badge">
        {this.value}
      </span>
    );
  }
}
