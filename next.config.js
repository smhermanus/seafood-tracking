const path = require('path');

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.module.rules.push({
                test: /\.node$/,
                use: 'node-loader',
            });

            // Exclude the `@node-rs/argon2` package from the client bundle
            config.externals.push({
                '@node-rs/argon2': 'commonjs2 @node-rs/argon2',
            });
        }

        return config;
    },
};

