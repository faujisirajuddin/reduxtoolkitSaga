import "./App.css";
import { useSelector } from "react-redux";

function Cat() {
  const cats = useSelector((state) => state.cats.cats);

  return (
    <>
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure.
      </p>
      <hr />
      <div className="gallery">
        {cats.map((cat) => {
          return (
            <div key={cat.id} className="row">
              <div className="column column-left">
                <img
                  alt={cat.name}
                  src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                  width={200}
                  height={200}
                />
              </div>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5>Temperament : {cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cat;
