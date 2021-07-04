import React, { useState } from 'react'
import Navbar from "./Navbar";
import NewsFeedLayout from "./NewsFeedLayout";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [valueToSearch, setValueToSearch] = useState("");

  const handleSearchValue = (event) => {
    const value = event?.target?.value || "";
    setSearchValue(value);
  };

  const handleSearchSave = (event) => {
    if (event.key === 'Enter') {
      setValueToSearch(event?.target?.value || "");
    }
  }

  return (
    <>
      <Navbar searchValue={searchValue} handleSearch={handleSearchValue} handleSave={handleSearchSave} />
      <NewsFeedLayout searchValue={valueToSearch} newsType="anything" />
    </>
  )
}

export default Home
