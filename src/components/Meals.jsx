import {useState,useEffect,axios} from 'react'
import '../Styles/Meals.css'

const Meals = () => {

  const [items,setItems] = useState([])

 useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => {
        // console.log(res.data);
        setitems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  itemslist = () => {
    items.map(({ strMeal, strMealThumb, idMeal }) => {
      return <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section className='content'>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    })
  }
  
  
  return <div className="items-container">{itemslist}</div>

}

export default Meals