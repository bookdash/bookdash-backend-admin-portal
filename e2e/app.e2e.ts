import { BookDashAdminPage } from './app.po';

describe('book-dash-admin App', function() {
  let page: BookDashAdminPage;

  beforeEach(() => {
    page = new BookDashAdminPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('book-dash-admin Works!');
  });
});
