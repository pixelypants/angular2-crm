import { Angular2CrmPage } from './app.po';

describe('angular2-crm App', function() {
  let page: Angular2CrmPage;

  beforeEach(() => {
    page = new Angular2CrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
