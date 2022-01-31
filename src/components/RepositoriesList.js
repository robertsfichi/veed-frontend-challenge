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

    // Fetch repositories & update them based on selected language
    useEffect(() => {
        let unmounted = false;

        fetchRepos(repos.selectedLanguage).then(data => {
            if (!unmounted) {
                setRepos((prevState => {
                    return {
                        ...prevState,
                        list: data.repos,
                    };
                }));
            }
        }).catch(() => {
            setError({ text: 'Error fetching repositories based on language.' });
        });

        return () => unmounted = true;
    }, [repos.selectedLanguage]);

    // Get available programming languages
    useEffect(() => {
        let unmounted = false;

        fetchRepos().then(data => {
            if (!unmounted) {
                setRepos((prevState => {
                    return {
                        ...prevState,
                        availableLanguages: [...new Set(data.availableLanguages)]
                    };
                }));
            }
        }).catch(() => {
            setError({ text: 'Error updating available languages.' });
        });

        return () => unmounted = true;
    }, []);

    // Update local storage based on local state
    useEffect(() => {
        localStorage.setItem('favoriteRepositories', JSON.stringify(favoriteRepositories));
    }, [favoriteRepositories]);

    const isLoading = () => {
        return !repos.list && error === null;
    };

    return <ol className="RepositoriesList">
        <LanguageFilter repos={repos} setRepos={setRepos} />

        {isLoading() ? <h2>Loading...</h2> : null}

        {error ? <p>{error.text}</p>
            : repos.list ? repos.list.map((repo, i) => <RepositoryListItem repo={repo} favoriteRepositories={favoriteRepositories} setFavoriteRepositories={setFavoriteRepositories} key={i} index={i} />)
                : null}
    </ol>;
};

export default RepositoriesList;