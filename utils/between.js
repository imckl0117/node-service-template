function between(
    min,
    max,
    { dataType = 'number', includeStart = true, includeEnd = true } = {}
) {
    let minValue, maxValue;

    switch (dataType) {
        case 'number':
            minValue = Number(min);
            maxValue = Number(max);

            break;
        case 'date':
            minValue = new Date(min);
            maxValue = new Date(max);

            break;
    }

    const greaterThanOperator = includeStart ? '$gte' : '$gt';
    const lessThanOperator = includeEnd ? '$lte' : '$lt';

    return { [greaterThanOperator]: minValue, [lessThanOperator]: maxValue };
}

module.exports = between;
