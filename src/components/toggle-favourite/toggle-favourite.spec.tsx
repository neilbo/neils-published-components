import { newSpecPage } from '@stencil/core/testing';
import { ToggleFavourite } from './toggle-favourite';

describe('toggle-favourite', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToggleFavourite],
      html: `<toggle-favourite></toggle-favourite>`,
    });
    expect(page.root).toEqualHtml(`
      <toggle-favourite>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </toggle-favourite>
    `);
  });
});
