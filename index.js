/**
 * Config
 */
require.config({
    baseUrl: '/app/',
    paths: {
        // 'react': 'lib/react.production.min',
        // 'react-dom': 'lib/react-dom.production.min',
        'react': 'lib/react.development',
        'react-dom': 'lib/react-dom.development',
        'create-react-class': 'lib/create-react-class.min',
        'axios': 'lib/axios.min',
    },
});
/**
 * Main
 */
require([
    'react',
    'react-dom',
    'components/Root',
], function(React, ReactDOM, Root) {
    // render
    ReactDOM.render(
        React.createElement( Root, null ),
        document.querySelector('#app')
    );
});

