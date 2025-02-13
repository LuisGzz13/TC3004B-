import React from 'react';
import Item from './Item';

export default function List ({items}) {
    return (
        <div>
        {items.map((i) => (
            <Item item={i} />

        ))}
        </div>
    )
    }

 
