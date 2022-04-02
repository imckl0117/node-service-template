const {
    between,
    escapeRegExp,
    flattenObj,
    inArray,
    like,
    logger,
} = require('@/utils');

class BaseService {
    constructor() {
        this.util = {
            between,
            escapeRegExp,
            flattenObj,
            inArray,
            like,
            logger,
        };
    }
}

module.exports = BaseService;
