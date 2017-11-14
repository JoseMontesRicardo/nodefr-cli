import HolaModel from '../models/HolaModel';
import Mongodb from 'mongodb';

class HolaRepository {

    constructor() {
    }

    index(query = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await HolaModel.find(query));
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    show(id) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await HolaModel.findOne({ _id: Mongodb.ObjectID(id) }));
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    store(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let newData = new HolaModel(data);
                resolve(await newData.save());
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

    update(id, data) {
        return new Promise(async (resolve, reject) => {
            try {
                let element = await HolaModel.findOne({ _id: Mongodb.ObjectID(id) })
                console.log(id);
                element.set(data);
                resolve(await element.save());
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }


    delete(id) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await HolaModel.remove({ _id: Mongodb.ObjectID(id) }));
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    }

}

export default HolaRepository;

