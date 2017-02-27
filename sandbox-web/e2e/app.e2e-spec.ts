import { SandboxWebPage } from './app.po';

describe('sandbox-web App', () => {
  let page: SandboxWebPage;

  beforeEach(() => {
    page = new SandboxWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
