import { newSpecPage } from '@stencil/core/testing';
import { ProductContainer } from './product-container';

describe('product-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProductContainer],
      html: `<product-container></product-container>`,
    });
    expect(page.root).toEqualHtml(`
      <product-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </product-container>
    `);
  });
});
