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
        'react-bootstrap': 'lib/react-bootstrap.min',
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

    // data
    var data = [
        { introduce: '1' },
        { experience: '2' },
        { community: '3' },
    ]

    // render
    ReactDOM.render(
        React.createElement( Root, null ),
        document.querySelector('#app')
    );

    // // register request-animation-frame
    // global.requestAnimationFrame = function(callback) {
    //     setTimeout(callback, 0);
    // };
});

