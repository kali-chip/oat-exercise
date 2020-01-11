function capitalize(word) {
    return word.replace(/^\w/, function (chr) { return chr.toUpperCase(); });
}

module.exports = {
    capitalize: capitalize
};
