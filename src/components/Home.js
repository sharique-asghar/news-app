import React, { useState } from 'react'
import Navbar from "./Navbar";
import NewsFeedLayout from "./NewsFeedLayout";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [valueToSearch, setValueToSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearchValue = (event) => {
    const value = event?.target?.value || "";
    setSearchValue(value);
    if (event.key === 'Enter') {
      setValueToSearch(value);
      setSearchValue("");
    }
  };

  const handleSidebarOpening = (event, open) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsSidebarOpen(open);
  };

  const navbarProps = {
    searchValue,
    handleSearch: handleSearchValue,
    handleSidebarOpening
  }

  const newsLayoutProps = {
    searchValue: valueToSearch,
    isSidebarOpen,
    handleSidebarOpening
  }

  return (
    <>
      <Navbar {...navbarProps} />
      <NewsFeedLayout {...newsLayoutProps} />
    </>
  )
}

export default Home
