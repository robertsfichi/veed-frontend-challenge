import { render, screen, fireEvent } from "@testing-library/react";

import RepositoriesList from "../components/RepositoriesList";

test('Render repositories list.', () => {
    render(<RepositoriesList />);

    screen.queryByTestId("name-0");
    screen.queryByTestId("url-0");
    screen.queryByTestId("stars-0");
});

test('User should be able to filter repositories based on languages provided by Github API.', async () => {
    render(<RepositoriesList />);

    const languageFilter = await screen.findByTestId("language-filter");
    fireEvent.click(languageFilter);

    const allOptions = await screen.findAllByTestId(/language-option/i);
    expect(allOptions.length).toBeGreaterThan(1);
});