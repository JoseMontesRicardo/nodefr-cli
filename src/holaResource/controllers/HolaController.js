import HolaRepository from '../repositories/HolaRepository';

class HolaController extends Bases.BaseController {

    constructor() {
        super();
        this.holaRepository = new HolaRepository();
    }

    index() {
        return async (req, res) => {
            let a = await this.holaRepository.index();
            res.send(a);
        }
    }

    show() {
        return async (req, res) => {
            let a = await this.holaRepository.show(req.params.id);
            res.send(a);
        }
    }

    store() {
        return async (req, res) => {
            let a = await this.holaRepository.store(req.body);
            res.send(a);
        }
    }

    update() {
        return async (req, res) => {
            let a = await this.holaRepository.update(req.params.id, req.body);
            res.send(a);
        }
    }


    destroy() {
        return async (req, res) => {
            let a = await this.holaRepository.delete(req.params.id);
            res.send(a);
        }
    }

}

export default HolaController;

