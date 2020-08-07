import { Component, ComponentInterface, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'product-card',
  styleUrl: 'product-card.css',
  shadow: true,
})
export class ProductCard implements ComponentInterface {
  @Prop() name: string;
  @Prop() description: string;
  @Prop() price: number | string;
  @Prop() img: string;

  @State() isFavourite: boolean = false;
  @Listen('onToggleFavourite')
  log(event: Event) {
    console.dir(event);
  }
  isChecked() {
    return this.isFavourite;
  }
  render() {
    return (
      <div class="card">
        <img src={this.img} alt={this.name} />
        <div class="container">
          <h4 class="product-name"><strong>{this.name}</strong></h4>
          <p class="product-description">{this.description}</p>
          <p class="product-price">{this.price}</p>
          <slot></slot>
        </div>
    </div>
    );
  }

}
