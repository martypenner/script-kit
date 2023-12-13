// Name: Take screenshot of news webpage

import '@johnlindquist/kit';

const screenshotResults = await getScreenshotFromWebpage('https://twitter.com', {
  screenshotOptions: { fullPage: true },
});

await writeFile(home('desktop/news.png'), screenshotResults);
