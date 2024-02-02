import { FC } from "react";
import { ItemType } from "../../types/ItemType"; 

type ItemProps = { data: ItemType };

export const Item: FC<ItemProps> = ({data}) => {
  return (
    <div className="item">
    <div className="item-image">
      <a href={data.url}>
        <img src={data.MainImage?.url_570xN} />
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{data.title.length > 50 ? data.title.slice(0, 50) + '...': data.title}</p>
      <p className="item-price">{data.currency_code === 'USD' ? '$': (data.currency_code === 'EUR' ? '€': data.currency_code + ' ')}{data.price}</p>
      <p className={`item-quantity ${data.quantity <= 10 ? 'level-low': (data.quantity <= 20 ? 'level-medium': 'level-high')}`}>{data.quantity} left</p>
    </div>
  </div>
  )
}
