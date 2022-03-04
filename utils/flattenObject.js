function flattenObject(obj) {
    const flatObj = {};

    Object.entries(obj).forEach(([key, value]) => {
        if (
            typeof value !== 'object' ||
            value instanceof Date ||
            value === null
        ) {
            flatObj[key] = value;
            return;
        }

        const childFlatObj = flattenObject(value);

        Object.entries(childFlatObj).forEach(([childKey, childValue]) => {
            flatObj[`${key}.${childKey}`] = childValue;
        });
    });

    return flatObj;
}

module.exports = flattenObject;
