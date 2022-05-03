import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  const handleSearch = (query) => {
    setSearch(query)
  }

  const listingsToRender = () => {
    return listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
  }

  const handleDelete= (id) => {
    let updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
    const config = {
      method: "DELETE",
    }
    fetch(`http://localhost:6001/listings/${id}`, config)
  }
  
  const fetchListings = () => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(listings => setListings(listings))
  }
  
  useEffect(fetchListings, [])

  return (
    <div className="app">
      <Header 
        search={search}
        handleSearch={handleSearch}
      />
      <ListingsContainer
        handleDelete={handleDelete} 
        listings={listingsToRender()}
        setListings={setListings}
      />
    </div>
  );
}

export default App;
