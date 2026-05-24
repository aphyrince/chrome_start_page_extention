const checkUrlWithRegex = (urlString: string) => {
    const regex = /\.[a-z]{2,7}$/i;
    return regex.test(urlString);
};

export default checkUrlWithRegex;
