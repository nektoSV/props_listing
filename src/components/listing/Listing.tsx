import { FC } from "react";
import { Item } from "./Item";
import { ItemType } from "../../types/ItemType";

type ListingProps = { items: ItemType[] };

export const Listing: FC<ListingProps> = ({items}) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        return <Item data={item} key={item.listing_id} />
      })}
    </div>
  )
}
