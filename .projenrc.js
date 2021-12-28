const { ConstructLibraryCdk8s } = require('projen');


const project = new ConstructLibraryCdk8s({
  author: 'Hunter Thompson',
  authorAddress: 'aatman@auroville.org.in',
  cdk8sVersion: '1.2.1',
  constructsVersion: '3.3.161',
  projenVersion: '0.36.5',
  defaultReleaseBranch: 'development',
  stability: 'experimental',
  jsiiFqn: 'projen.ConstructLibraryCdk8s',
  name: '@opencdk8s/cdk8s-argocd-resources',
  keywords: ['aws', 'cdk8s', 'cdk'],
  npmAccess: 'public',
  repositoryUrl: 'https://github.com/opencdk8s/cdk8s-argocd-resources',
  python: {
    distName: 'cdk8s-argocd-resources',
    module: 'cdk8s_argocd_resources',
  },
  releaseEveryCommit: true,
  dependabot: false,
  pullRequestTemplate: false,
  codeCov: true,
  clobber: false,
  readme: true,
  mergify: true,
});

const common_exclude = ['cdk.out', 'yarn-error.log', 'coverage', '.DS_Store', '.idea', '.vs_code'];
project.gitignore.exclude(...common_exclude);

project.synth();

