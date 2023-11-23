import { Chart, Testing } from 'cdk8s';
import * as argo from '../src/';

test('app', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'test', {
    namespace: 'test',
  });

  new argo.ArgoCdApplication(chart, 'test', {
    spec: {
      project: 'test',
      ignoreDifferences: [
        {
          kind: 'Deployment',
          jsonPointers: [
            '/spec/replicas',
          ],
          group: 'apps',
        },

      ],
      source: {
        repoURL: 'test',
        targetRevision: 'test',
        path: 'test',
        directory: {
          recurse: true,
        },
      },
    },
  });

  expect(Testing.synth(chart)).toMatchSnapshot();
});
