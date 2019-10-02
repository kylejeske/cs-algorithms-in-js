/**
 * @ignore
 */
/**
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
**/
