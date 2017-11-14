if ( process.env.node_env === 'production' ) {
    require('./dist');
} else if ( process.env.node_env === 'develop' ) {
    require('./src');
}