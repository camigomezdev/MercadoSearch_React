import React, { PropTypes } from 'react';
import { Icon, Card, Image, Label } from 'semantic-ui-react'

const Item = ({ title, img, price, statusSeller, sold }) => (
    <Card>
      <Image centered src={img} as='a' size='small'/>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta> <Label as='a'>${price}</Label></Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='smile' />
          Seller: {statusSeller}
        </a>
        <br/>
        <a>
          <Icon name='tags' />
          Sold: {sold}
        </a>
      </Card.Content>
  </Card>
);

export default Item;
