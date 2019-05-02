var browser = browser || chrome;

browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript({file: "cleaner.js"})
});
