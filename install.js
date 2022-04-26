const { execSync } = require('child_process');
const os = require('os');
const path = require('path');
const packageJSON = require('./package.json');

const tarName = `kraken-${os.platform()}-${packageJSON.version}.tar.gz`;
const downloadUrl = `https://kraken.oss-cn-hangzhou.aliyuncs.com/kraken-cli-vendors/${tarName}`;

const wrapPath = (path) => path.replace(/ /g, "\\ ");

const processOptions = {
  cwd: wrapPath(__dirname),
  stdio: 'inherit'
};
execSync(`curl -O ${downloadUrl}`, processOptions);
execSync('mkdir -p build', processOptions);
execSync(`tar xzf ${wrapPath(path.join(__dirname, tarName))} -C ./build`, processOptions);
execSync(`rm ${tarName}`, processOptions);
