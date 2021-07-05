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
      handleValueToSearch(value);
      setSearchValue("");
    }
  };

  const handleValueToSearch = (value) => {
    setValueToSearch(value);
  }

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
    handleSidebarOpening,
    handleValueToSearch
  }

  return (
    <>
      <Navbar {...navbarProps} />
      <NewsFeedLayout {...newsLayoutProps} />
    </>
  )
}

export default Home
