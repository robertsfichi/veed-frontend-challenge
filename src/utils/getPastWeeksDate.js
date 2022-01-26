const getPastWeeksDate = () => {
    let date = new Date(Date.now() - 604800000);

    // Get timezone
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - (offset * 60 * 1000));

    const currentDate = date.toISOString().split('T')[0];
    return currentDate;
};

export default getPastWeeksDate;