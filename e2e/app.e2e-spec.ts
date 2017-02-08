import { CockFrameworkPage } from './app.po';

describe('cock-framework App', function() {
  let page: CockFrameworkPage;

  beforeEach(() => {
    page = new CockFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
