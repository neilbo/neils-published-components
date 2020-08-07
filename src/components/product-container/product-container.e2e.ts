import { newE2EPage } from '@stencil/core/testing';

describe('product-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<product-container></product-container>');

    const element = await page.find('product-container');
    expect(element).toHaveClass('hydrated');
  });
});
