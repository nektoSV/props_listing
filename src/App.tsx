import './App.css'
import { Listing } from "./components/listing/Listing";
import etsy from "./data/etsy.json";
import { ItemType } from './types/ItemType';

const data: ItemType[] = etsy
  .filter(item => item.state !== 'removed')
  .map(item => ({
    ...item,
    url: item.url || 'default-url',
    title:  item.title || 'default-title',
    currency_code: item.currency_code || 'default-currency_code',
    price: item.price || '0',
    quantity: item.quantity || 0
  }));

function App() {
  return (
    <Listing items={data} />
  )
}

export default App
