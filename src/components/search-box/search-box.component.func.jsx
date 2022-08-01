import "./search-box.styles.css";
// every other elements with the same class will apply the same style
const SearchBoxFunc = ({className, placeholder, onChangeHandler}) => (
    <input
        type="search"
        className = {`search-box ${className}`}
        placeholder = {placeholder}
        onChange={onChangeHandler}
    />

);
 
 export default SearchBoxFunc;