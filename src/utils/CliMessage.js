import Chalk from 'chalk';

class CliMessage {

    constructor(){}

    static successMsg (message) {
        console.log( Chalk.green.bold( `[OK] ${message}!` ) );
    }

    static warningMsg (message) {
        console.log( Chalk.yellow.bold( `[WARNING] ${message}!` ) );
    }

    static errorMsg (message) {
        console.error( Chalk.red.bold(new Error(`[ERROR] ${message}`) ) );
    }

}

export default CliMessage