module.exports = {
  loadPlugin: loadPlugin,
};

function loadPlugin(packageManager, options) {
  if (options && options.docker) {
    return require('snyk-docker-plugin');
  }
  switch (packageManager) {
    case 'npm': {
      return require('./npm');
    }
    case 'rubygems': {
      return require('./rubygems');
    }
    case 'maven': {
      return require('snyk-mvn-plugin');
    }
    case 'gradle': {
      return require('snyk-gradle-plugin');
    }
    case 'sbt': {
      return require('snyk-sbt-plugin');
    }
    case 'yarn': {
      return require('./yarn');
    }
    case 'pip': {
      return require('snyk-python-plugin');
    }
    case 'golangdep':
    case 'govendor': {
      return require('snyk-go-plugin');
    }
    case 'nuget': {
      return require('snyk-nuget-plugin');
    }
    case 'composer': {
      return require('snyk-php-plugin');
    }
    case 'paket': {
      return require('./paket');
    }
    default: {
      throw new Error('Unsupported package manager: ' + packageManager);
    }
  }
}
