/* eslint-disable testing-library/prefer-presence-queries */
import { render, screen, fireEvent } from "@testing-library/react";

import RepositoriesList from "../components/RepositoriesList";
import FavoritesList from "../components/FavoritesList";

test('User should be able to add repository to favorites and store them locally.', async () => {
    render(<RepositoriesList />);

    const addToFavoritesIcon = await screen.findByTestId('fav-icon-0');
    fireEvent.click(addToFavoritesIcon);

    const favoriteRepos = JSON.parse(localStorage.getItem('favoriteRepositories'));
    expect(favoriteRepos.length).toBeGreaterThan(0);
});

test('Render favorite repositories list.', async () => {
    render(<FavoritesList />);

    await screen.findByTestId("name-0");
    await screen.findByTestId("url-0");
    await screen.findByTestId("description-0");
    await screen.findByTestId("stars-0");
});

test('User should be able to remove repository from favorites list.', async () => {
    render(<RepositoriesList />);

    const addToFavoritesIcon = await screen.findByTestId("fav-icon-0");
    fireEvent.click(addToFavoritesIcon);

    const favoriteRepos = JSON.parse(localStorage.getItem('favoriteRepositories'));
    expect(favoriteRepos.length).toBeLessThan(1);
});