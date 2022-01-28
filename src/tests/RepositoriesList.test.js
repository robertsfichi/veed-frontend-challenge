import { render, screen } from "@testing-library/react";
import RepositoriesList from "../components/RepositoriesList";

test('on initial render, the repositories list is empty', () => {
    render(<RepositoriesList />);
});