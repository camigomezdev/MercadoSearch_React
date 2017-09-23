import React from 'react'
import Item from '../Item/Item';
import { Card, Grid } from 'semantic-ui-react'

const Items = ({ items }) => {
    return(
        <Card.Group stackable centered>
            {items.map(item =>
                <Item
                    key = {item.id}
                    title={item.title}
                    img = {item.thumbnail}
                    price = {item.price}
                    statusSeller = {item.seller.power_seller_status}
                    sold = {item.sold_quantity}
                />
            )}
        </Card.Group>
    )
}

export default Items;
