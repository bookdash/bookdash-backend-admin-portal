export class BookDashAdminPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('book-dash-admin-app p')).getText();
  }
}
