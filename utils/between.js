function between(min, max, { includeStart = true, includeEnd = true } = {}) {
    const minNum = Number(min);
    const maxNum = Number(max);

    const greaterThanOperator = includeStart ? '$gte' : '$gt';
    const lessThanOperator = includeEnd ? '$lte' : '$lt';

    return { [greaterThanOperator]: minNum, [lessThanOperator]: maxNum };
}

module.exports = between;
