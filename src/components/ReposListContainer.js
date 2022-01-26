import { useEffect, useState } from "react";
import fetchRepos from "../utils/fetchRepos";

const ReposListContainer = () => {
    const [reposList, setReposList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRepos().then(data => {
            setReposList(data);
        }).catch(() => {
            setError({ text: 'Error fetching repositories.' });
        });
    }, []);

    return <ol className="ReposList__Container">
        {!error ? reposList.map((repo) => {
            const { name, html_url, stargazers_count, description } = repo;

            return <li key={html_url}>
                <a target="_blank" rel="noreferrer" href={html_url}>{name}</a>
                <p>{description}</p>
                <p>stars: {stargazers_count}</p>
            </li>;
        }) : <p>{error.text}</p>}
    </ol>;
};

export default ReposListContainer;