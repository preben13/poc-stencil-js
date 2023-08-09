import { newSpecPage } from '@stencil/core/testing';
import { MyHorizontalTab } from '../my-horizontal-tab';

describe('my-horizontal-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyHorizontalTab],
      html: `<my-horizontal-tab></my-horizontal-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <my-horizontal-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-horizontal-tab>
    `);
  });
});
