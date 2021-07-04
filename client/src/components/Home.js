import React, { useState } from 'react'
import Navbar from "./Navbar";
import NewsFeedLayout from "./NewsFeedLayout";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [valueToSearch, setValueToSearch] = useState("");

  const handleSearchValue = (event) => {
    const value = event?.target?.value || "";
    setSearchValue(value);
    if (event.key === 'Enter') {
      setValueToSearch(value);
      setSearchValue("");
    }
  };

  return (
    <>
      <Navbar searchValue={searchValue} handleSearch={handleSearchValue} />
      <NewsFeedLayout searchValue={valueToSearch} newsType="anything" />
    </>
  )
}

export default Home
