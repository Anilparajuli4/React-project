import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function deleteItem(id) {
    const newItem = tours.filter((tour) => tour.id !== id);
    return setTours(newItem);
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <h2>no tour left</h2>
        <button onClick={fetchData} className="btn">
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteItem={deleteItem} />
    </main>
  );
}

export default App;
