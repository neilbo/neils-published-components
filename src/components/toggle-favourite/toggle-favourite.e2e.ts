import { newE2EPage } from '@stencil/core/testing';

describe('toggle-favourite', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<toggle-favourite></toggle-favourite>');

    const element = await page.find('toggle-favourite');
    expect(element).toHaveClass('hydrated');
  });
});
