import './style.css'

export function Table() {

    const arr= [
        {
         "id": 1,
         "name": "Антистеплер",
         "price": 10,
         "count": 12,
         "img": "img/1.jpg"  
        },
    
        {
          "id": 2,
          "name": "Блок для записей",
          "price": 15,
          "count": 32,
          "img": "img/2.jpg"  
        },
    
        {
        "id": 3,
        "name": "Дырокол",
        "price": 8,
        "count": 10,
        "img": "img/3.jpg"  
        },
          
        {
          "id": 4,
          "name": "Зажимы для бумаг",
          "price": 5,
          "count": 101,
          "img": "img/4.jpg"  
        },
    
        {
          "id": 5,
          "name": "Клей-карандаш",
          "price": 2,
          "count": 80,
          "img": "img/5.jpg"  
        },
    ]
    
    return (
      
        <table>

          {arr.map((item, index)=>{
            return (<tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td ><img className='img1' src={item.img}></img></td>
            </tr>)
          })
        }
        </table>
    )
}