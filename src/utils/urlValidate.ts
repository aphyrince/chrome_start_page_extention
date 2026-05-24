const checkUrlWithRegex = (urlString: string) => {
    const regex = /\.[a-z]{2,6}$/i;
    return regex.test(urlString);
};

export default checkUrlWithRegex;
