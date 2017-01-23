import { NgBusinessContactsPage } from './app.po';

describe('ng-business-contacts App', function() {
  let page: NgBusinessContactsPage;

  beforeEach(() => {
    page = new NgBusinessContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
