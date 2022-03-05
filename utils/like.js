const escapeRegExp = require('./escapeRegExp');

function like(str, { ignoreCase = true } = {}) {
    const strEscaped = escapeRegExp(str);

    let flags = '';

    if (ignoreCase) {
        flags += 'i';
    }

    return new RegExp(strEscaped, flags);
}

module.exports = like;
