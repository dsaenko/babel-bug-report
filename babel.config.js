module.exports = (api) => {
    api.cache(false);

    const plugins = [
        '@babel/plugin-transform-runtime'
    ];

    return {
        compact: true,
        plugins,
        presets: [
            '@babel/preset-typescript',
            '@babel/preset-react',
            '@babel/preset-env'
        ],
        sourceType: 'unambiguous'
    };
};
