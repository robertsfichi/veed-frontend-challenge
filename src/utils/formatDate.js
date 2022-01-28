
const formatDate = (created_at) => {
    let date = new Date(created_at);
    return date.toDateString();
};

export default formatDate;
