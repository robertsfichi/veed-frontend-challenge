import isFavorite from "./isFavorite";

const setAsFavorite = (favoriteRepositories, setFavoriteRepositories, name, url, description, stars, created_at) => {

    // If there's no favorites list, create one and add currently selected repository to it
    if (!favoriteRepositories) {
        setFavoriteRepositories([{ name, url, description, stars, created_at }]);
        localStorage.setItem('favoriteRepositories', JSON.stringify(favoriteRepositories));

        // If currently selected repository is not set as favorite, add it to the list
    } else if (!isFavorite(favoriteRepositories, url)) {
        setFavoriteRepositories((previousState) => {
            return [...previousState, { name, url, description, stars, created_at }];
        });

        // If currently selected repository is already part of the list, remove it
    } else {
        setFavoriteRepositories(favoriteRepositories.filter(element => element.url !== url));
    }
};

export default setAsFavorite;