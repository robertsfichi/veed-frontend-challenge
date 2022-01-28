const isFavorite = (favoriteRepositories, url) => {
    if (favoriteRepositories) {
        return favoriteRepositories.filter(element => element.url === url).length > 0;
    } else return false;
};

export default isFavorite;