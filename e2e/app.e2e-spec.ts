import { DawsonPortfolioPage } from './app.po';

describe('dawson-portfolio App', () => {
  let page: DawsonPortfolioPage;

  beforeEach(() => {
    page = new DawsonPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
