import { Ve12Page } from './app.po';

describe('ve12 App', () => {
  let page: Ve12Page;

  beforeEach(() => {
    page = new Ve12Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
