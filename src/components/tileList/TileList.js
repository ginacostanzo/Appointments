import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((item, index) => {
        return <Tile key={index} name={item.name} description={{...item, name: undefined}} />
      })}
    </div>
  );
};
