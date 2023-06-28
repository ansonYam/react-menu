import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { FoodsContainer } from './components/FoodsContainer';
import { foods } from './foods';
import { FoodType } from './types/FoodType';

function App() {
  // state variable, will be set by the 'SearchBar' component and passed down onto 'FoodsContainer'
  const [searchResults, setSearchResults] = useState<FoodType[]>(foods);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (results: FoodType[], searchTerm: string) => {
    setSearchResults(results);
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <SearchBar content={foods} onSearch={handleSearch} />
      <FoodsContainer searchTerm={searchTerm} searchResults={searchResults} />
    </>
  )
}

export default App
