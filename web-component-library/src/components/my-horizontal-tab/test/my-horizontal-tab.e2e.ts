import { newE2EPage } from '@stencil/core/testing';

describe('my-horizontal-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-horizontal-tab></my-horizontal-tab>');

    const element = await page.find('my-horizontal-tab');
    expect(element).toHaveClass('hydrated');
  });
});
