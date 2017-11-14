import HolaController from './controllers/HolaController';
    
class HolaRoute extends Bases.BaseRoute {
        
    /**
    * construct for HolaRoute
    * 
    * @param {json} router instance of ExpressJS router 
    */
    constructor(app) {
        super(app);
    }

    resourceInit(){
      this.resource(this.nameRoute, HolaController);
    }

}

export default HolaRoute;

