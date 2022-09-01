import './style.css';
import { ProductItem } from '../ProductItem';



export const Product = (props) => {
  const elem = props.productItems.map(item => {
    return (<ProductItem name={item.name} price={item.price} count={item.count} img={item.img}/>)
  })

  return (
    {elem}
  )
}


