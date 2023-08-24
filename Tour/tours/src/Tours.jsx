import Tour from "./Tour";
const Tours = ({ tours, deleteItem }) => {
  return (
    <section className="title">
      <h2>Our tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} deleteItem={deleteItem} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
