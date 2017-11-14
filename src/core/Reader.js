import Lodash from 'lodash';
import LineByLine from 'line-by-line';
import CliMessage from '../utils/CliMessage';

class Reader {


    constructor() { }

    static readTemplateByLines(path, templateSelector) {
        return new Promise((resolve, reject) => {
            try {
                let linesReader = new LineByLine(path);
                let file = '';
                let newLine = '';
                linesReader.on('error', (error) => {
                    return CliMessage.errorMsg(error);
                });

                linesReader.on('line', function (line) {
                    newLine = Reader.returnTemplateLine(templateSelector, line);
                    if (newLine) file += newLine;
                });

                linesReader.on('end', function () {
                    return resolve(file);
                    // All lines are read, file is closed now.
                });
            } catch (error) {
                return CliMessage.errorMsg(error);
            }
        });
    }


    static returnTemplateLine(criteriaSplit, line) {
        let newLine = line.split(criteriaSplit);
        if (newLine.length > 1) {
            return `${newLine[newLine.length - 1]}\n`;
        } else {
            return null;
        }
    }


}

export default Reader;