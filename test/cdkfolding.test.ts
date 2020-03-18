import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Cdkfolding = require('../lib/cdkfolding-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Cdkfolding.CdkfoldingStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
