import {useState} from "react";

function ListingCard({handleDelete, listing}) {

  const [favorite, setFavorite] = useState(false)

  const handleClick = () => {
    setFavorite(!favorite)
  }

  const onDelete = () => {
    handleDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button
        onClick={onDelete}
        className="emoji-button delete"
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
