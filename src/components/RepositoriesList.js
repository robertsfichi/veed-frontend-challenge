import { useEffect, useState } from "react";
import fetchRepos from "../utils/fetchRepos";
import LanguageFilter from "./LanguageFilter";
import RepositoryListItem from "./RepositoriesListItem";

const RepositoriesList = () => {
    const [error, setError] = useState(null);

    const locallyStoredFavorites = JSON.parse(localStorage.getItem('favoriteRepositories'));
    const [favoriteRepositories, setFavoriteRepositories] = useState(locallyStoredFavorites);

    const [repos, setRepos] = useState({
        list: null,
        availableLanguages: null,
        selectedLanguage: 'All'
    });

    // Update local storage based on local state
    useEffect(() => {
        localStorage.setItem('favoriteRepositories', JSON.stringify(favoriteRepositories));
    }, [favoriteRepositories]);

    // Get available programming languages and add them to state
    useEffect(() => {
        fetchRepos().then(data => {
            setRepos((prevState => {
                return {
                    ...prevState,
                    availableLanguages: [...new Set(data.availableLanguages)]
                };
            }));
        }).catch(() => {
            setError({ text: 'Error updating available languages.' });
        });
    }, []);

    // Fetch repositories & update them based on selected language
    useEffect(() => {
        fetchRepos(repos.selectedLanguage).then(data => {
            setRepos((prevState => {
                return {
                    ...prevState,
                    list: data.repos,
                };
            }));
        }).catch(() => {
            setError({ text: 'Error fetching repositories based on language.' });
        });
    }, [repos.selectedLanguage]);

    const isLoading = () => {
        return !repos.list && error === null;
    };

    return <ol className="RepositoriesList">
        <LanguageFilter repos={repos} setRepos={setRepos} />

        {isLoading() ? <h2>Loading...</h2> : null}

        {error ? <p>{error.text}</p> : null}

        {repos.list ?
            repos.list.map((repo) => <RepositoryListItem repo={repo} favoriteRepositories={favoriteRepositories} setFavoriteRepositories={setFavoriteRepositories} />)
            : null}
    </ol>;
};

export default RepositoriesList;