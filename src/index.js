#!/usr/bin/env node

import Chalk from 'chalk';
import Cli from 'cli';
import Figlet from 'figlet';
import Fs from 'fs';
import Path from 'path';
import Lodash from 'lodash';
import Exec from 'exec';
import Download from 'download-git-repo';
import Generator from './core/Generator';
import Reader from './core/Reader';
import Creator from './core/Creator';

let creator = new Creator();

let options = Cli.parse({
    generate: ['g', 'create new File with specification', 'string', false],
    new: ['n', 'create new project']
});

(async () => {
    if (options.generate) {

        switch (options.generate) {
            case 'route':
                await executorForLayer();
                break;

            case 'model':
                await executorForLayer();
                break;

            case 'controller':
                await executorForLayer();
                break;

            case 'repository':
                await executorForLayer();
                break;

            case 'resource':
                await executorForResource();

            default:
                break;
        }
        
    }
})();


async function executorForLayer() {
    let fileOptions = {};
    let generator = null;
    
    for (let key in Cli.args) {
        if (Cli.args.hasOwnProperty(key)) {
            let layerElement = Cli.args[key];
            generator = new Generator(layerElement, options.generate);
            fileOptions.folder = generator.getLayerFolder();
            fileOptions.path = generator.getPath();
            fileOptions.resourceFolder = generator.getResourceFolder();
            fileOptions.fileName = generator.fileName;
            fileOptions.ext = generator.ext;
            fileOptions.layer = generator.layer;
            await creator.generateLayer(fileOptions, templateSelectors('default').criteria);
        }
    }

}


async function executorForResource() {
    let resourceLayerFolder = '';
    let fileOptions = {};
    let layerGenerator = null;
    let generator = null;
    const layers = getLayers();

    for (var key in Cli.args) {
        if (Cli.args.hasOwnProperty(key)) {
            var layerElement = Cli.args[key];
            generator = new Generator(layerElement, options.generate);
            resourceLayerFolder = generator.getResourceFolder();
            creator.createLayerFolder(resourceLayerFolder);

            for (let key in layers) {
                if (layers.hasOwnProperty(key)) {
                    let layer = layers[key];
                    layerGenerator = new Generator(layerElement, layer);
                    fileOptions.folder = layerGenerator.getLayerFolder(resourceLayerFolder);
                    fileOptions.path = layerGenerator.getPath(fileOptions.folder);
                    fileOptions.fileName = layerGenerator.fileName;
                    fileOptions.ext = layerGenerator.ext;
                    fileOptions.original = layerElement;
                    fileOptions.layer = layerGenerator.layer;
                    await creator.generateLayer(fileOptions, templateSelectors('mongorito').criteria);
                }
            }
        }
    }
}


function getLayers() {
    return [
        'model',
        'controller',
        'route',
        'repository'
    ]
}


function templateSelectors(criteria) {
    const templates = [
        { name: 'default', criteria: '#default' },
        { name: 'mongorito', criteria: '#mongorito' },
        { name: 'sequelize', criteria: '#sequelize' }
    ]
    
    let found = Lodash.find(templates, { name: criteria });
    return found;
}
