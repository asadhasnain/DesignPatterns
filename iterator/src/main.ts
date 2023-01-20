import { BrowserHistory } from "./BrowserHistory";

(() => { 
    console.log("\n***** Iterator Behavioral Design Pattern: Sequentially access the elements of a collection. *****\n");

    const browserHistory: BrowserHistory = new BrowserHistory();
    browserHistory.push("chatgpt");
    browserHistory.push("google");
    browserHistory.push("bing");

    // browserHistory.Urls.forEach(url => {
    //     console.log(`${url}`)
    // });

    // browserHistory.Urls.push("mail");

    const urlIterator = browserHistory.createIterator();
    while(urlIterator.hasNext())
    {
        console.log(urlIterator.current());
        urlIterator.next();
    }
})();