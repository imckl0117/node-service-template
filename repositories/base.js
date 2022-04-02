class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create({ document }) {
        return await this.model.create(document);
    }

    async find({ filter = {}, fields = { _id: 0 }, skip = 0, limit = 0 } = {}) {
        return await this.model.find(filter, fields).skip(skip).limit(limit);
    }

    async findOne({ filter, fields = { _id: 0 } }) {
        return await this.model.findOne(filter, fields);
    }

    async count({ filter = {} }) {
        return await this.model.countDocuments(filter);
    }

    async updateOne({ filter, update }) {
        return await this.model.updateOne(filter, update);
    }

    async updateMany({ filter, update }) {
        return await this.model.updateMany(filter, update);
    }

    async deleteOne({ filter }) {
        return await this.model.deleteOne(filter);
    }

    async deleteMany({ filter }) {
        return await this.model.deleteMany(filter);
    }
}

module.exports = BaseRepository;
