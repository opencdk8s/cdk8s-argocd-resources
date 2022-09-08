const { cdk8s } = require('projen');
const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'Hunter-Thompson',
  authorAddress: 'aatman@auroville.org.in',
  cdk8sVersion: '2.2.74',
  constructsVersion: '10.0.5',
  defaultReleaseBranch: 'development',
  stability: 'experimental',
  name: '@opencdk8s/cdk8s-argocd-resources',
  repositoryUrl: 'https://github.com/opencdk8s/cdk8s-argocd-resources',
  publishToGo: {
    gitUserName: 'Hunter-Thompson',
    gitUserEmail: 'aatman@auroville.org.in',
    moduleName: 'github.com/opencdk8s/cdk8s-argocd-resources-go',
  },
  python: {
    distName: 'cdk8s-argocd-resources',
    module: 'cdk8s_argocd_resources',
  },
  npmAccess: 'public',
  mergify: true,
  keywords: ['cdk8s'],

  depsUpgrade: false,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
