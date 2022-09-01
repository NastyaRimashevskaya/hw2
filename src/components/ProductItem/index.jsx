import { useState } from 'react';


export const ProductItem = (props) => {
const [color, setColor]= useState(true);
const colorClass = color ? 'white' : 'red'
const changeColor = () => {
    setColor((previousState) => !previousState);
  }

  return (
    <table>
        <tr key={index}>
            <td className={colorClass} onClick={changeColor}>{props.name}</td>
            <td className={colorClass} onClick={changeColor}>{props.price}</td>
            <td className={colorClass} onClick={changeColor}>{props.count}</td>
            <td className={colorClass} onClick={changeColor}><img className='img1' src={props.img}></img></td>
            <button className={colorClass} onClick={changeColor}>DELETE</button>
        </tr>
    </table>
  )   
}        




