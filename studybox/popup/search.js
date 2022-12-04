// (async () => {
//     const engines = await browser.search.get();
//
//     engines.forEach(engine => {
//         browser.menus.create({
//             id: engine.name,
//             title: engine.name,
//             contexts: ["selection"]
//         })
//     });
//
//     browser.menus.onClicked.addListener(info => {
//         browser.search.search({
//             query: info.selectionText,
//             engine: info.menuItemId
//         });
//     });
// })()

//TODO: Come back to this search implementation