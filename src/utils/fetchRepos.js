import getPastWeeksDate from './getPastWeeksDate';

const fetchRepos = async (language) => {
    let fromDate = getPastWeeksDate();

    // Build Github endpoint
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=created:>${fromDate}${language ? `+language:${language}` : ''}&sort=stars&order=desc`);

    // Fetch repos
    const res = await fetch(endpoint);
    const data = await res.json();
    if (!data.items) {
        console.warn(`GitHub API returns: ${data.message}`);
        throw new Error(data.message);
    }

    let availableLanguages = [];
    for (let repo of data.items) {
        if (repo.language) availableLanguages.push(repo.language);
    }

    return {
        repos: data.items,
        availableLanguages
    };
};

export default fetchRepos;