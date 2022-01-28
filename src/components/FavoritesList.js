import { useState, useEffect } from 'react';
import formatDate from '../utils/formatDate';

const FavoritesList = () => {
    let locallyStoredFavorites = localStorage.getItem('favoriteRepositories');
    const [favoriteRepositories, setFavoriteRepositories] = useState(JSON.parse(locallyStoredFavorites));

    // Update favorites list local state every time a new repository is added
    useEffect(() => {
        setFavoriteRepositories(JSON.parse(locallyStoredFavorites));
    }, [locallyStoredFavorites]);

    return <div className="RepositoriesList">
        {favoriteRepositories ? favoriteRepositories.map((repo) => {
            const { name, url, description, stars, created_at } = repo;

            return <div key={url}>
                {created_at ? <p className="RepositoriesList__Repo--Date">{formatDate(created_at)}</p> : null}
                <div className="RepositoriesList__Repo--NameAndStars">
                    <a target="_blank" rel="noreferrer" href={url} className="RepositoriesList__Repo--Name">
                        <h3>{name}</h3>
                    </a>
                    &nbsp;
                    <span>{stars} ⭐</span>
                </div>
                <p className="RepositoriesList__Repo--Description">{description ? description : 'No description provided.'}</p>
            </div>;
        }) : <p>You don't have any favorite repositories yet.</p>}
    </div>;
};

export default FavoritesList;