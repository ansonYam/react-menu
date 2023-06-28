/**
 * SearchBar will take in a user text input and after every
 * change to the input run a search for matching food items
 * from 'foods.ts'
 */

import { ChangeEvent, useState, useEffect } from 'react';
import { FoodType } from '../types/FoodType';

interface Props {
    content: FoodType[],
    onSearch: (searchResults: FoodType[], searchTerm: string) => void,
}

export function SearchBar({ content, onSearch }: Props) {
    const [searchTerm, setSearchTerm] = useState('');

    // run a query whenever the search term changes
    useEffect(() => {
        const searchResults = content.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
        // console.log("Array of matches: ", searchResults);
        onSearch(searchResults, searchTerm);
    }, [searchTerm]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        // console.log("New search term: ", searchTerm);
    }

    return (
        <>
            <label>Search:&nbsp;
                <input onChange={handleSearch} value={searchTerm} />
            </label>
            <hr></hr>
        </>
    )

}