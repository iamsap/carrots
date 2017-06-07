import { CarrotsPage } from './app.po';

describe('carrots App', () => {
  let page: CarrotsPage;

  beforeEach(() => {
    page = new CarrotsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
