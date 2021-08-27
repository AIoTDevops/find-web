chrome.contextMenus.create({
    "title": "translate",
    "contexts": ["selection"],
    "onclick": openTab()
});


function openTab() {
    return function(info, tab) {
        let text = info.selectionText;
        // let redditLink = "https://www.reddit.com/" + format(text) +
        // "/top/?t=all"

        // let redditLink = "https://translate.google.com/?source=dict-chrome-ex&sl=en&tl=zh-CN&q=" + format(text);
        let redditLink = "https://translate.google.com/?source=dict-chrome-ex&sl=en&tl=zh-CN&q=" + text;
        chrome.tabs.create({
            index: tab.index + 1,
            url: redditLink,
            selected: true
        });
    }
};



// function format(subName) {
//     if (subName[0] === "r" && subName[1] === "/") {
//         return subName
//     } else {
//         return "r/" + subName
//     }
// };