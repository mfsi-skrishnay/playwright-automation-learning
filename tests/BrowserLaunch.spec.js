const{chromium,firefox,webkit}= require('playwright');
(async ()=>{

    const browser =await chromium.launch({
         headless: true,           // boolean — no visible window
         slowMo: 0,                // ms delay after each action
         channel:'msedge',         // launches either chrome or msedge
         devtools: false,          // open Chrome DevTools automatically
         timeout: 30000,           // ms to wait for browser to launch
         args: [
            '--start-maximized',    // launch maximised
            '--disable-infobars',   // remove automation warning bar
                ]
    })

const page=await browser.newPage();
await page.goto("https://www.demoblaze.com");
await page.close();
await browser.close();


// Launch Firefox
  const ffBrowser = await firefox.launch({ headless: true });
  const ffPage = await ffBrowser.newPage();
  await ffPage.goto('https://www.demoblaze.com');
  await ffPage.close();
  await ffBrowser.close();

  // Launch WebKit (Safari engine)
  const wkBrowser = await webkit.launch({ headless: false });
  const wkPage = await wkBrowser.newPage();
  await wkPage.goto('https://www.demoblaze.com');
  await wkPage.close();
  await wkBrowser.close();

})();
