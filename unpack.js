const { join } = require('path');
let packageJson = require('./package.json');

const pathFromDepList = depList => depList.reduce((prev, depName) => {
  const packageMainPath = join(__dirname, 'node_modules', depName);
  if (prev) {
    prev += `:${packageMainPath}`;
  } else {
    prev = packageMainPath
  }
  return prev;
}, '');

let depPath, devDepPath;

if (packageJson.dependencies) {
  depPath = pathFromDepList(Object.keys(packageJson.dependencies));
}
if (packageJson.devDependencies) {
  devDepPath = pathFromDepList(Object.keys(packageJson.devDependencies));
}

if (depPath && devDepPath) {
  console.log(`${depPath}:${devDepPath}`);
} else if (depPath) {
  console.log(depPath);
} else if (devDepPath) {
  console.log(devDepPath);
}
