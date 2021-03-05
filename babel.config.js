const path = require('path');
const VARIANT = process.env.VARIANT || 'one';

console.log(VARIANT, process.env.VARIANT);

if (!VARIANT) {
    throw new Error(`You must define a VARIANT environment variable when bundling typescript module`)
}

const plugins = [
    [
        require.resolve('babel-plugin-module-resolver'),
        {
            extensions: [".ts", ".tsx"],
            alias: {
                "current-variant": ([, requirePath]) => path.resolve(__dirname, "variants/" + VARIANT + requirePath )
            }
        }
    ]
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins,
};
