import { useState, useEffect } from 'react';
import formatDate from '../utils/formatDate';

const FavoritesList = () => {
    let locallyStoredFavorites = localStorage.getItem('favoriteRepositories');
    const [favoriteRepositories, setFavoriteRepositories] = useState(JSON.parse(locallyStoredFavorites));

    // Update favorites list local state every time a new repository is added
    useEffect(() => {
        setFavoriteRepositories(JSON.parse(locallyStoredFavorites));
    }, [locallyStoredFavorites]);

    return <ol className="RepositoriesList">
        {favoriteRepositories ? favoriteRepositories.map((repo, i) => {
            const { name, url, description, stars, created_at } = repo;

            return <li key={url}>
                {created_at ? <p className="RepositoriesList__Repo--Date">{formatDate(created_at)}</p> : null}
                <div className="RepositoriesList__Repo--NameAndStars">
                    <a target="_blank" rel="noreferrer" href={url} className="RepositoriesList__Repo--Name" data-testid={`url-${i}`}>
                        <h3 data-testid={`name-${i}`}>{name}</h3>
                    </a>
                    &nbsp;
                    <span data-testid={`stars-${i}`}>{stars} ⭐</span>
                </div>
                <p className="RepositoriesList__Repo--Description" data-testid={`description-${i}`}>{description ? description : 'No description provided.'}</p>
            </li>;
        }) : <p>You don't have any favorite repositories yet.</p>}
    </ol>;
};

export default FavoritesList;