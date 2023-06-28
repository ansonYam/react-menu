/**
 * FoodItem will be our individual food item component.
 * It will handle the highlighting of the matching letters
 * e.g. 'su' will result in 'Su'shi and Dim 'su'm being highlighted.
 */
interface Props {
    id: number;
    name: string;
    description: string;
    searchTerm: string;
}

// https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
export function FoodItem({ name, description, searchTerm }: Props) {
    // search both the name and description for matching letters
    const getHighlightedText = (text: string, searchTerm: string) => {    
        if (!searchTerm) return text; // don't highlight the whole page

        // gi means 'g'lobally (throughout the text string) look for case-'i'nsensitive matches
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        
        // split the text string into an array of 'parts' using the regular expression
        // matching parts will be separated, e.g. "Dim", "su", "m is a variety..."
        const parts = text.split(regex);
        // console.log(parts);
        
        return (
            <span>
                {parts.filter(part => part).map((part, i) => (
                    regex.test(part) 
                    ? <mark key={i}>{part}</mark>
                    : <span key={i}>{part}</span>
                ))}
            </span>
        )
    }

    return (
        <div className="row">
            <div className="left">{getHighlightedText(name, searchTerm)}</div>
            <div className="right">{getHighlightedText(description, searchTerm)}</div>
        </div>
    )
}