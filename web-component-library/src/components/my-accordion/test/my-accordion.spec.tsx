import { newSpecPage } from '@stencil/core/testing';
import { MyAccordion } from '../my-accordion';

describe('my-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyAccordion],
      html: `<my-accordion></my-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <my-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-accordion>
    `);
  });
});
