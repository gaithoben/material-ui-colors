import { expect } from 'chai';

import { red } from './index';

describe('Test Colors', function() {
  describe('color', function() {
    it('Should return a color code in hex', function() {
      expect(red[500]).to.include('#');
      console.log(red[500]);
    });
  });
});
