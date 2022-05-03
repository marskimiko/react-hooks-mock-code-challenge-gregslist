import React, {useState} from "react";
import ListingCard from "./ListingCard";
import NewListingForm from "./NewListingForm";

function ListingsContainer({handleDelete, listings, setListings}) {

  const [sortBy, setSortBy] = useState("id");

  const sortedListings = listings.sort((listingA, listingB) => {
    if (sortBy === "id") {
      return listingA.id - listingB.id;
    } else {
      return listingA.location.localeCompare(listingB.location)
    }
  })

  function handleAddListing(newListing) {
    const updatedListingsArray = [newListing, ...listings]
    setListings(updatedListingsArray);
  }
  
  const renderListings = () => {
    return sortedListings.map(listing => {
      return <ListingCard
        key={listing.id}
        handleDelete={handleDelete}
        listing={listing}
      />
    })
  }

  return (
    <main>
      <NewListingForm onAddListing={handleAddListing}/>
      <button onClick={() => setSortBy("id")}>Sort By Default</button>
      <button onClick={() => setSortBy("location")}>Sort By Location</button>
      <ul className="cards">
        {renderListings()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
