import isFavorite from "../utils/isFavorite";
import setAsFavorite from "../utils/setAsFavorite";

const FavoritesIcon = ({ favoriteRepositories, setFavoriteRepositories, name, html_url, description, stargazers_count, created_at }) => {
    return <svg onClick={() => setAsFavorite(favoriteRepositories, setFavoriteRepositories, name, html_url, description, stargazers_count, created_at)} xmlns="http://www.w3.org/2000/svg" fill={isFavorite(favoriteRepositories, html_url) ? "red" : "none"} className="Icon" viewBox="0 0 24 24" stroke="red">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>;
};

export default FavoritesIcon;