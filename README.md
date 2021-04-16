# cdk8s-argocd-resources

Has the ability to synth ArgoCD Application, and AppProject manifests. See example.

## Overview

### example

```typescript
import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import * as argo from '@opencdk8s/cdk8s-argocd-resources';

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    new argo.ArgoCdApplication(this, 'DemoApp', {
      metadata: {
        name: 'demo',
        namespace: 'argocd',
      },
      spec: {
        project: 'default',
        source: {
          repoURL: 'example-git-repo',
          path: 'examplepath',
          targetRevision: 'HEAD',
        },
        destination: {
          server: 'https://kubernetes.default.svc'
        },
        syncPolicy: {
          syncOptions: [
            'ApplyOutOfSyncOnly=true'
          ]
        }
      },
    });

    new argo.ArgoCdProject(this, 'DemoProject', {
      metadata: {
        name: 'demo',
        namespace: 'argocd',
      },
      spec: {
        description: 'demo project',
        sourceRepos: [
          '*'
        ],
        destination: [{
          namespace: 'default',
          server: 'https://kubernetes.default.svc'
        }]
      }

    });

    // define resources here

  }
}

const app = new App();
new MyChart(app, 'asd');
app.synth();
```
<details>
<summary>demo.k8s.yaml</summary>

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: demo
  namespace: argocd
spec:
  destination:
    server: https://kubernetes.default.svc
  project: default
  source:
    path: examplepath
    repoURL: example-git-repo
    targetRevision: HEAD
  syncPolicy:
    syncOptions:
      - ApplyOutOfSyncOnly=true
---
apiVersion: argoproj.io/v1alpha1
kind: AppProject
metadata:
  name: demo
  namespace: argocd
spec:
  description: demo project
  destination:
    - namespace: default
      server: https://kubernetes.default.svc
  sourceRepos:
    - "*"
```
</details>


## Installation

### TypeScript

Use `yarn` or `npm` to install.

```sh
$ npm install @opencdk8s/cdk8s-argocd-resources
```

```sh
$ yarn add @opencdk8s/cdk8s-argocd-resources
```

### Python

```sh
$ pip install cdk8s-argocd-resources
```

## Contribution

1. Fork ([link](https://github.com/opencdk8s/cdk8s-argocd-resources/fork))
2. Bootstrap the repo:
  
    ```bash
    npx projen   # generates package.json 
    yarn install # installs dependencies
    ```
3. Development scripts:
   |Command|Description
   |-|-
   |`yarn compile`|Compiles typescript => javascript
   |`yarn watch`|Watch & compile
   |`yarn test`|Run unit test & linter through jest
   |`yarn test -u`|Update jest snapshots
   |`yarn run package`|Creates a `dist` with packages for all languages.
   |`yarn build`|Compile + test + package
   |`yarn bump`|Bump version (with changelog) based on [conventional commits]
   |`yarn release`|Bump + push to `master`
4. Create a feature branch
5. Commit your changes
6. Rebase your local changes against the master branch
7. Create a new Pull Request (use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for the title please)

## Licence

[Apache License, Version 2.0](./LICENSE)

## Author

[Hunter-Thompson](https://github.com/Hunter-Thompson)