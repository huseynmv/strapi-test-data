import type { Schema, Struct } from '@strapi/strapi';

export interface BodyItem extends Struct.ComponentSchema {
  collectionName: 'components_body_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface BodySection extends Struct.ComponentSchema {
  collectionName: 'components_body_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    category: Schema.Attribute.String;
    items: Schema.Attribute.Component<'body.item', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'body.item': BodyItem;
      'body.section': BodySection;
    }
  }
}
