import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://course-api.com/react-tours-project';


const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  // filter tours

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id )
    setTours(newTours)
  }

 // A function to fetch data from url using
  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours)
    } catch (error) {
  console.error();
    }
    setIsLoading(false)
  }
// using useEffect to to trigger data fetch.
  useEffect(()=>{
      fetchTours()
  },[])

  //display loading while the data is beign fetched
  if (isLoading){
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // A condition to display Empty list if no data available 
  //set refresh button to refetch data

  if (tours.length === 0 ){
    return (
      <main>
        <h2>No more Tours left</h2>
        <button type="button" className="btn" 
        onClick={()=>{fetchTours()}} style={{marginTop: '2rem'}}
        >Refresh</button>
      </main>
    )
  }
  // render the component when tours data is fetched.
  return (
  <main>
    <Tours tours = {tours} removeTour ={removeTour} />
   </main>
  )
};
export default App;
