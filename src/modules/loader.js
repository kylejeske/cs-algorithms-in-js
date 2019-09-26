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

const ModuleLoader = () => { console.log('loader.'); };

export default { ModuleLoader }
