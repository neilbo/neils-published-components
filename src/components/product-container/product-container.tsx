import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'product-container',
  styleUrl: 'product-container.css',
  shadow: true,
})
export class ProductContainer implements ComponentInterface {

  render() {
    return (
      <div class="product-container">
        <slot></slot>
      </div>
    );
  }

}
