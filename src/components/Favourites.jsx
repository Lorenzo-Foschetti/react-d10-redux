import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavourites } from "../redux/actions";

const Favourites = () => {
  const dispatch = useDispatch();
  const favouriteCompany = useSelector((state) => state.favourite.content);
  return (
    <ListGroup>
      {favouriteCompany.length > 0 ? (
        favouriteCompany.map((company, i) => {
          return (
            <ListGroup.Item key={i}>
              <Link to={`/${company}`}>{company}</Link>

              <Button
                variant="danger mx-3"
                onClick={() => {
                  dispatch(removeFromFavourites(company));
                }}
              >
                REMOVE<i className="bi bi-trash3"></i>
              </Button>
            </ListGroup.Item>
          );
        })
      ) : (
        <ListGroup.Item>Nessuna azienda aggiunta ai preferiti</ListGroup.Item>
      )}
    </ListGroup>
  );
};
export default Favourites;
