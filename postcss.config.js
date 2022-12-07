const postcssImport = require('postcss-import');
const postcssApply = require('postcss-apply');
const postcssFocusWithin = require('postcss-focus-within');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCalc = require('postcss-calc');
const postcssNested = require('postcss-nested');
const cssnano = require('cssnano');

module.exports = ({ env }) => {
  const plugins = [
    postcssImport({}),
    postcssApply({}),
    postcssFocusWithin({ preserve: false }),
    postcssCustomProperties({ preserve: false }),
    postcssPresetEnv({
      /* use stage 0 features + css nesting rules */
      stage: 1,
      features: {
        'nesting-rules': false,
        'focus-within': false
      }
    }),
    postcssCalc({}),
    postcssNested({})
  ];

  if (env !== 'development') {
    // prettier-ignore
    plugins.push(cssnano({
            preset: "default"
        }));
  }

  return {
    plugins: plugins
  };
};
