import { WdWeatherAppPage } from './app.po';

describe('wd-weather-app App', () => {
  let page: WdWeatherAppPage;

  beforeEach(() => {
    page = new WdWeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
