const contentfulImport = require('contentful-import');

const migrateContentfulSpace = async config => {
  try {
    await contentfulImport(config);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = migrateContentfulSpace;
