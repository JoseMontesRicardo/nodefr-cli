import Fs from 'fs';
import CliMessage from '../utils/CliMessage';
import Generator from './Generator';
import Reader from './Reader';
import Lodash from 'lodash';

class Creator {

    constructor() {

    }


    /**
     * 
     * @param {*} layer 
     */
    static getPathOfTemplates(layer) {
        let coreTemplatesPath = `${__dirname}/core-templates`;
        let suffix = '.template';
        let ext = '.txt';
        switch (layer) {
            case 'route':
                coreTemplatesPath = `${coreTemplatesPath}/${layer}${suffix}${ext}`;
                break;

            case 'model':
                coreTemplatesPath = `${coreTemplatesPath}/${layer}${suffix}${ext}`;
                break;

            case 'controller':
                coreTemplatesPath = `${coreTemplatesPath}/${layer}${suffix}${ext}`;
                break;

            case 'repository':
                coreTemplatesPath = `${coreTemplatesPath}/${layer}${suffix}${ext}`;
                break;

            default:
                break;
        }
        return coreTemplatesPath;
    }


    /**
     * 
     * @param {*} fileOptions 
     */
    generateLayer(fileOptions, templateSelector) {
        return new Promise(async (resolve, receject) => {
            try {
                let file = '';
                let pathOfTemlate = '';

                if (Fs.existsSync(fileOptions.path)) return CliMessage.warningMsg(`${fileOptions.path} allready exist`);
                this.createLayerFolder(fileOptions.folder);
                pathOfTemlate = Creator.getPathOfTemplates(fileOptions.layer);
                file = await Reader.readTemplateByLines(pathOfTemlate, templateSelector);
                file = this.replaceTemplate(file, fileOptions);
                this.createFile(fileOptions.path, file);

                CliMessage.successMsg(`${fileOptions.path} created`);
                return resolve();
                // console.log('no existe')
            } catch (error) {
                return CliMessage.errorMsg(error);
            }
        })
    }


    /**
     * 
     * @param {*} pathOfLayerFolder 
     */
    createLayerFolder(pathOfLayerFolder) {
        try {
            if (Fs.existsSync(pathOfLayerFolder)) return;
            Fs.mkdirSync(pathOfLayerFolder);
        } catch (error) {
            return CliMessage.errorMsg(error);
        }
    }


    /**
     * 
     * @param {*} path 
     * @param {*} file 
     */
    createFile(path, file) {
        try {
            if (Fs.existsSync(path)) return;
            Fs.writeFileSync(path, file);
        } catch (error) {
            return CliMessage.errorMsg(error);
        }
    }


    /**
     * 
     * @param {*} templatePath 
     */
    readTemplate(templatePath) {
        try {
            let file = Fs.readFileSync(templatePath, 'utf-8');
            return file;
        } catch (error) {
            return CliMessage.errorMsg(error);
        }
    }


    /**
     * 
     * @param {*} file 
     * @param {*} newName 
     */
    replaceTemplate(file, fileOptions) {

        switch (fileOptions.layer) {
            case 'route':
                let generatorController = new Generator(fileOptions.original, 'controller');
                file = file.replace(/(controllerName)/g, generatorController.fileName);
                break;

            case 'model':
                break;

            case 'controller':
                let generatorRepository = new Generator(fileOptions.original, 'repository');
                file = file.replace(/(nameRepository)/g, generatorRepository.fileName);
                file = file.replace(/(instanceRepository)/g, Lodash.lowerFirst(generatorRepository.fileName));
                break;

            case 'repository':
                let generatorModel = new Generator(fileOptions.original, 'model');
                file = file.replace(/(nameModel)/g, generatorModel.fileName);

                break;

            default:
                break;
        }
        return file.replace(/(fileName)/g, fileOptions.fileName);
    }


}

export default Creator;