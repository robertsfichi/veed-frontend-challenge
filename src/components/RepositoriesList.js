import { useEffect, useState } from "react";
import fetchRepos from "../utils/fetchRepos";
import formatDate from '../utils/formatDate';
import FavoritesIcon from "./FavoritesIcon";

const RepositoriesList = () => {
    const [reposList, setReposList] = useState(null);
    const [error, setError] = useState(null);

    const storedLocally = JSON.parse(localStorage.getItem('favoriteRepositories'));
    const [favoriteRepositories, setFavoriteRepositories] = useState(storedLocally);

    // Fetch repositories when component first mounts
    useEffect(() => {
        fetchRepos().then(data => {
            setReposList(data);
        }).catch(() => {
            setError({ text: 'Error fetching repositories.' });
        });
    }, []);

    // Update local storage based on local state
    useEffect(() => {
        localStorage.setItem('favoriteRepositories', JSON.stringify(favoriteRepositories));
    }, [favoriteRepositories]);

    return <ol className="RepositoriesList">
        {error ? <p>{error.text}</p> : reposList ? reposList.map((repo) => {
            const { name, html_url, stargazers_count, description, created_at } = repo;

            return <li key={html_url} className="RepositoriesList__Repo">
                {created_at ? <p className="RepositoriesList__Repo--Date">{formatDate(created_at)}</p> : null}
                <div className="RepositoriesList__Repo--NameAndStars">
                    <FavoritesIcon favoriteRepositories={favoriteRepositories}
                        setFavoriteRepositories={setFavoriteRepositories}
                        name={name}
                        html_url={html_url}
                        stargazers_count={stargazers_count}
                        description={description}
                        created_at={created_at} />
                    &nbsp;
                    <a target="_blank" rel="noreferrer" href={html_url} className="RepositoriesList__Repo--Name">
                        <h3>{name}</h3>
                    </a>
                    &nbsp;
                    <span className="RepositoriesList__Repo--Stars">{stargazers_count} ⭐</span>
                </div>
            </li>;
        }) : null}
    </ol>;
};

export default RepositoriesList;