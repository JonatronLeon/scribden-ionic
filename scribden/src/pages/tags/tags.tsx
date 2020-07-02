import { Component, Prop, h } from '@stencil/core';
import { ItemService } from '../../services/item';

@Component({
  tag: 'tag-page'
})
export class TagPage {
  @Prop() itemId: string;

  componentDidLoad() {
    ItemService.fetchItem(this.itemId);
  }

  render() {
    const item = ItemService.getItem(this.itemId);
    
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>{item && item.name}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        {item && (
          <tag-form
            itemId={item.id}
          ></tag-form>)}
      </ion-content>
    ];
  }
}
