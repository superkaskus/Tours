import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://course-api.com/react-tours-project';


const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

 // fetching data from url using useEffect
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
  // render the component when tours data is fetched.
  return (
  <main>
    <Tours tours = {tours} />
   </main>
  )
};
export default App;
