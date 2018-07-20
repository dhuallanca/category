import { CategoryWebPage } from './app.po';

describe('category-web App', () => {
  let page: CategoryWebPage;

  beforeEach(() => {
    page = new CategoryWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
