import { ANGULAR2Page } from './app.po';

describe('angular2 App', () => {
  let page: ANGULAR2Page;

  beforeEach(() => {
    page = new ANGULAR2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
