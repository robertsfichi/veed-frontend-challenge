import formatDate from '../utils/formatDate';
import FavoritesIcon from "./FavoritesIcon";

const RepositoryListItem = ({ repo, favoriteRepositories, setFavoriteRepositories, index }) => {
    const { name, html_url, stargazers_count, description, created_at } = repo;

    return <li key={html_url} className="RepositoriesList__Repo">
        {created_at ? <p className="RepositoriesList__Repo--Date">{formatDate(created_at)}</p> : null}
        <div className="RepositoriesList__Repo--NameAndStars">
            <FavoritesIcon favoriteRepositories={favoriteRepositories}
                index={index}
                setFavoriteRepositories={setFavoriteRepositories}
                name={name}
                html_url={html_url}
                stargazers_count={stargazers_count}
                description={description}
                created_at={created_at} />
            &nbsp;
            <a target="_blank" rel="noreferrer" href={html_url} className="RepositoriesList__Repo--Name" data-testid={`url-${index}`}>
                <h3 data-testid={`name-${index}`}>{name}</h3>
            </a>
            &nbsp;
            <span className="RepositoriesList__Repo--Stars" data-testid={`stars-${index}`}>{stargazers_count} ⭐</span>
            &nbsp;

        </div>
    </li>;
};

export default RepositoryListItem;