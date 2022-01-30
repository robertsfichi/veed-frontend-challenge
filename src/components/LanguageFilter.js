const LanguageFilter = ({ repos, setRepos }) => {

    const handleChange = (e) => {
        setRepos(prevState => {
            return {
                ...prevState,
                list: null,
                selectedLanguage: e.target.value
            };
        });
    };
    return <select onChange={(e) => handleChange(e)} value={repos.selectedLanguage}>
        <option value="All">All languages</option>
        {repos.availableLanguages && repos.availableLanguages.length > 1 && repos.availableLanguages.map(element => element ? <option value={element} key={element}>{element}</option> : null)}
    </select>;
};

export default LanguageFilter;