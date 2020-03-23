const sass = require('node-sass');
const fs = require('fs');
const path = require('path');

describe('Custom syntax', () => {
  it('should generate proper custom syntax', () => {
    const {css} = sass.renderSync({
      file: path.join(__dirname, './fixture/input.scss')
    });

    expect(css.toString('utf-8')).toMatchSnapshot();
  });
});
