"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = require("puppeteer");
// Function to perform the swap
function performSwap() {
    return __awaiter(this, void 0, void 0, function* () {
        // Launch a headless browser instance and create a new page
        const browser = yield puppeteer_1.default.launch({ headless: false });
        const page = yield browser.newPage();
        try {
            // Set the viewport size
            yield page.setViewport({ width: 0, height: 0, deviceScaleFactor: 1 });
            // Navigate to the swap.defillama.com website
            yield page.goto("https://swap.defillama.com", {
                waitUntil: "networkidle0", // Wait until the page is fully loaded
            });
            console.log("Successfully loaded the Swap defillama website.");
            // Find the custom input field for "chain" and type the desired value "arbitrum"
            const chainFieldSelector = "#react-select-2-input";
            yield page.waitForSelector(chainFieldSelector);
            yield page.type(chainFieldSelector, "arbitrum");
            yield page.keyboard.press("Enter");
            console.log("Successfully changed the chain from Etheruem to Arbitrum.");
            // Find the input field for "You Sell" and enter the value "12"
            const inputSelector = ".chakra-input.css-lv0ed5";
            yield page.waitForSelector(inputSelector);
            yield page.focus(inputSelector);
            yield page.keyboard.down("End");
            yield page.keyboard.press("Backspace");
            yield page.keyboard.press("Backspace");
            yield page.type(inputSelector, "12");
            console.log("Entered 12 in Selling amount.");
            // Fill the "You Sell" field with "WBTC" (Wrapped BTC)
            const TokenSelector = ".chakra-button.css-qjhap";
            const optionSelector = ".sc-b49748d5-3.cjxQGj";
            const elementHandle = yield page.$$(TokenSelector);
            // Check if the element exists before attempting to click it
            if (elementHandle) {
                // To Sell -> WBTC
                // Click on the first element in the TokenSelector to activate it
                yield elementHandle[0].click();
                yield page.type(TokenSelector, "WBTC");
                yield delay(300);
                // Get the updated list of options that appear after the search in the "You Sell" field
                const optionElementsSell = yield page.$$(optionSelector);
                for (const optionElement of optionElementsSell) {
                    const elementTextSell = yield page.evaluate((el) => { var _a; return (_a = el.textContent) === null || _a === void 0 ? void 0 : _a.trim(); }, optionElement);
                    if (elementTextSell == "Wrapped BTC (WBTC)") {
                        console.log("Selected WBTC to Sell");
                        yield optionElement.click();
                    }
                }
                yield delay(300);
                // To Buy -> USDC
                // Click on the second element in the TokenSelector to activate it
                yield elementHandle[1].click();
                yield page.type(TokenSelector, "USDC");
                // Get the updated list of options that appear after the search in the "You Buy" field
                const optionElementsBuy = yield page.$$(optionSelector);
                for (const optionElement of optionElementsBuy) {
                    const elementTextBuy = yield page.evaluate((el) => { var _a; return (_a = el.textContent) === null || _a === void 0 ? void 0 : _a.trim(); }, optionElement);
                    if (elementTextBuy == "USD Coin (USDC)") {
                        console.log("Selected USDC to Swap");
                        yield optionElement.click();
                    }
                }
                // Find the route selectors
                const route = ".sc-d413ea6e-0.ppUJr.RouteWrapper";
                const routeSelected = ".sc-d413ea6e-0.kxiweL.RouteWrapper.is-selected";
                const parentRoute = ".sc-bb167634-2.cObIGF";
                // Wait for the parentRoute element to appear
                yield page.waitForSelector(parentRoute);
                console.log("Waiting for routes to fully fetch");
                yield delay(7000); // Introduce a delay to allow time for the options to settle down
                // Click on the second element in the route selector to select the second route
                var routes = yield page.$$(route);
                yield routes[1].click();
                console.log("Selected route 2 for swaping.");
                console.log("Successfully completed the task.");
                // const getCurrentOptions = async (selectors: any) => {
                //   return await page.evaluate((selectors) => {
                //     let options = [];
                //     for (const selector of selectors) {
                //       const elements = document.querySelectorAll(selector);
                //       options.push(...Array.from(elements).map((element) => element.textContent));
                //     }
                //     return options;
                //   }, selectors);
                // };
                // // Use the getCurrentOptions function with both route and routeSelected selectors
                // let previousOptions = await getCurrentOptions([route, routeSelected]);
                // console.log(previousOptions);
                // // Leave the browser window open
                // await new Promise(() => {});
            }
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
        finally {
            // Uncomment the following line if you want to close the browser automatically after a successful swap.
            // await browser.close();
        }
    });
}
// Helper function to introduce a delay
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
performSwap();
