browser.browserAction.onClicked.addListener( async function()
{
    const tabs = await browser.tabs.query({active:true,currentWindow:true});
    browser.tabs.create({url:"popup/studyboxnote.html"});
})