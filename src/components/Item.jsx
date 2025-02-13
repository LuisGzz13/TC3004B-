import React from 'react';

export default function Item({item}) {
  return (
    <div>
      <ul>
        <li>{item.id}</li> 
        <li>{item.name}</li>
        </ul>
    </div>
  );
};


