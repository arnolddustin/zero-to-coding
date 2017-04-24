import { ZeroToCodingAppPage } from './app.po';

describe('zero-to-coding-app App', () => {
  let page: ZeroToCodingAppPage;

  beforeEach(() => {
    page = new ZeroToCodingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
