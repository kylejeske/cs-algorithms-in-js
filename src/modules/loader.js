/**
const loader = async function dynamicInstantiate(url) {
  return {
    exports: ['moduleLoader'],
    execute: (exports) => {
      // Get and set functions provided for pre-allocated export names
      exports.moduleLoader.set('value');
    }
  };
};
**/
/** @tbd **/

const ModuleLoader = () => {

  // mocked fake
  let exportableModules = { exports: [] };
  exportableModules.exports = ['testfile1', 'testfile2'];

  let {
    exports: [],
    execute: (moduleObject) => {
      console.log('loading modules');
      console.table(this.exports);
    }
  } = exportableModules;

  console.log('loader.');
};

export default { ModuleLoader }
