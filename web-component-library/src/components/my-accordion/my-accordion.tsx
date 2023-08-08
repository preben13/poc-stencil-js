// accordion.tsx
import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'my-accordion',
  styleUrl: 'my-accordion.scss',
  shadow: false,
})
export class MyAccordion {
  @State() isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class="accordion">
        <div class="accordion-header" onClick={() => this.toggleAccordion()}>
          <slot name="header">Accordion Header</slot>
        </div>
        <div class={{ 'accordion-content': true, 'accordion-content-open': this.isOpen }}>
          <slot name="content">Accordion Content</slot>
        </div>

      </div>
    );
  }
}
