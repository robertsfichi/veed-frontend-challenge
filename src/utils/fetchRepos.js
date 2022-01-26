import getPastWeeksDate from './getPastWeeksDate';

const fetchRepos = () => {
    let fromDate = getPastWeeksDate();

    // Build Github endpoint
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=created:>${fromDate}&sort=stars&order=desc`);

    // Fetch repos
    return fetch(endpoint).then(res => res.json()).then(data => {
        if (!data.items) {
            console.warn(`GitHub API returns: ${data.message}`);
            throw new Error(data.message);
        }

        return data.items;
    });

};

export default fetchRepos;