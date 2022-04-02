const {
    between,
    escapeRegExp,
    flattenObj,
    inArray,
    like,
    logger,
    uuid,
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
            uuid,
        };
    }
}

module.exports = BaseService;
