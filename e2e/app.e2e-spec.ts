import { YoutubeTutorialsPage } from './app.po';

describe('youtube-tutorials App', () => {
  let page: YoutubeTutorialsPage;

  beforeEach(() => {
    page = new YoutubeTutorialsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
