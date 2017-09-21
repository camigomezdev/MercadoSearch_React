import React from 'react'
import Item from './Item';
import {Card} from 'semantic-ui-react'

const Items = ({ items }) => {
    return(
        <Card.Group stackable='true' textAlign='center'>
            {items.map(item =>
                <Item
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
