/**
 * FoodsContainer will display only the food items that
 * match the user's search term. It will know this from
 * the 'searchResults' state variable that lives in 
 * the parent-level App.tsx
 */
import { FoodType } from '../types/FoodType';
import { FoodItem } from './FoodItem';

interface Props {
    searchTerm: string;
    searchResults: FoodType[];
}
export function FoodsContainer({ searchTerm, searchResults }: Props) {
    return (
        <>
            {searchResults.map((result) => (
                <FoodItem
                    key={result.id}
                    id={result.id}
                    name={result.name}
                    description={result.description}
                    searchTerm={searchTerm}
                />))}
        </>
    )
}