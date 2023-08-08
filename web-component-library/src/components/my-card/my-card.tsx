// card.tsx
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.scss',
  shadow: false,
})
export class MyCard {
  @Prop() title: string;
  @Prop() description: string;
  @Prop() imgurl: string;

  render() {
    return (
      <div class="card">
        {this.imgurl && <img src={this.imgurl} alt="Card Image" />}
        <div class="card-content">
          {this.title && <h2>{this.title}</h2>}
          {this.description && <p>{this.description}</p>}
        </div>
      </div>
    );
  }
}
