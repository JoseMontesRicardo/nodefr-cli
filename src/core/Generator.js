import Lodash from 'lodash';
import FindRoot from 'find-root';
import Pluralize from 'pluralize';

class Generator {


    constructor(name, layer) {
        this.name = name;
        this.layer = layer;
    }


    /**
     * 
     */
    get src() {
        return '/src';
    }


    /**
     * 
     */
    get fileName() {
        return Lodash.upperFirst(Lodash.camelCase(this.name + this.getSuffix()));
    }


    get resourceFolderName() {
        return Lodash.camelCase(this.name + this.getSuffix());
    }


    /**
     * 
     */
    getLayerFolder(resourcePath = false) {
        let srcPath = `${FindRoot(process.cwd())}${this.src}`;
        let currentPath = '';
        switch (this.layer) {
            case 'route':
                currentPath = (resourcePath) ? `${resourcePath}` : `${srcPath}/${Pluralize(this.layer)}`;
                break;

            case 'model':
                currentPath = (resourcePath) ? `${resourcePath}/${Pluralize(this.layer)}` : `${srcPath}/${Pluralize(this.layer)}`;
                break;

            case 'controller':
                currentPath = (resourcePath) ? `${resourcePath}/${Pluralize(this.layer)}` : `${srcPath}/${Pluralize(this.layer)}`;
                break;

            case 'repository':
                currentPath = (resourcePath) ? `${resourcePath}/${Pluralize(this.layer)}` : `${srcPath}/${Pluralize(this.layer)}`;
                break;

            default:
                break;
        }
        return currentPath;
    }


    /**
     * 
     */
    getResourceFolder() {
        let srcPath = `${FindRoot(process.cwd())}${this.src}`;
        return `${srcPath}/${this.resourceFolderName}`;
    }


    /**
     * 
     */
    getPath(path = false) {
        let layerFolder = null;
        if (!path) {
            layerFolder = this.getLayerFolder();
        } else {
            layerFolder = path;
        }
        return `${layerFolder}/${this.fileName}${this.ext}`;
    }


    /**
     * 
     */
    getResourcePath() {
        let layerFolder = this.getResourceFolder();
        return `${layerFolder}/${this.fileName}${this.ext}`;
    }


    /**
     * 
     */
    getSuffix() {
        let currentSuffix = '';
        switch (this.layer) {
            case 'route':
                currentSuffix = Lodash.upperFirst(this.layer);
                break;

            case 'model':
                currentSuffix = Lodash.upperFirst(this.layer);
                break;

            case 'controller':
                currentSuffix = Lodash.upperFirst(this.layer);
                break;

            case 'repository':
                currentSuffix = Lodash.upperFirst(this.layer);
                break;

            case 'resource':
                currentSuffix = Lodash.upperFirst(this.layer);
                break;

            default:
                break;
        }
        return currentSuffix;
    }


    /**
     * 
     */
    get ext() {
        if (this.layer === 'route' || this.layer === 'controller' || this.layer === 'model' || this.layer === 'repository') {
            return '.js';
        }
    }

}

export default Generator;