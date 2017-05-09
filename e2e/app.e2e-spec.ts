import { BoarsTalePage } from './app.po';

describe('boars-tale App', () => {
  let page: BoarsTalePage;

  beforeEach(() => {
    page = new BoarsTalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
