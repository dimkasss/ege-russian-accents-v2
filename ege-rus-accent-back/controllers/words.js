const handleWords = (dict, dict_length) => (req, res) => {
    const index = Math.floor(Math.random() * dict_length);
    const [ firstWord, secondWord ] = dict[index][0];
    const wordsSwap = Math.floor(Math.random() * (2));
    const responseObject = {
        words: wordsSwap ? [secondWord, firstWord] : [firstWord, secondWord],
        whichOne: wordsSwap ? 1 : 0
    }
    res.json(responseObject);
}

export { handleWords };