function inArray(str, { separator = ',', trim = true } = {}) {
    let values = str.split(separator);

    if (trim) {
        values = values.map((v) => v.trim());
    }

    return { $in: values };
}

module.exports = inArray;
