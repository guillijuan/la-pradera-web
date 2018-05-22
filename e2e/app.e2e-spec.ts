import { LaPraderaWebPage } from './app.po';

describe('la-pradera-web App', function() {
  let page: LaPraderaWebPage;

  beforeEach(() => {
    page = new LaPraderaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
