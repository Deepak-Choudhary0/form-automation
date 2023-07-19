import puppeteer from "puppeteer";

// Function to perform the swap
async function performSwap() {

  // Launch a headless browser instance and create a new page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Set the viewport size
    await page.setViewport({ width: 0, height: 0, deviceScaleFactor: 1 });

    // Navigate to the swap.defillama.com website
    await page.goto("https://swap.defillama.com", {
      waitUntil: "networkidle0", // Wait until the page is fully loaded
    });


    console.log("Successfully loaded the Swap defillama website.");

    // Find the custom input field for "chain" and type the desired value "arbitrum"
    const chainFieldSelector = "#react-select-2-input";
    await page.waitForSelector(chainFieldSelector);
    await page.type(chainFieldSelector, "arbitrum");
    await page.keyboard.press("Enter");


    console.log("Successfully changed the chain from Etheruem to Arbitrum.");


    // Find the input field for "You Sell" and enter the value "12"
    const inputSelector = ".chakra-input.css-lv0ed5";
    await page.waitForSelector(inputSelector);
    await page.focus(inputSelector);
    await page.keyboard.down("End");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Backspace");
    await page.type(inputSelector, "12");


    console.log("Entered 12 in Selling amount.");

    // Fill the "You Sell" field with "WBTC" (Wrapped BTC)
    const TokenSelector = ".chakra-button.css-qjhap";
    const optionSelector = ".sc-b49748d5-3.cjxQGj";

    const elementHandle = await page.$$(TokenSelector);

    // Check if the element exists before attempting to click it
    if (elementHandle) {

      // To Sell -> WBTC
      // Click on the first element in the TokenSelector to activate it
      await elementHandle[0].click();
      await page.type(TokenSelector, "WBTC");

      await delay(300);

      // Get the updated list of options that appear after the search in the "You Sell" field
      const optionElementsSell = await page.$$(optionSelector);

      for (const optionElement of optionElementsSell) {
        const elementTextSell = await page.evaluate(
          (el) => el.textContent?.trim(),
          optionElement
        );

        if (elementTextSell == "Wrapped BTC (WBTC)") {
          console.log("Selected WBTC to Sell");
          await optionElement.click();
        }
      }

      await delay(300);

      // To Buy -> USDC
      // Click on the second element in the TokenSelector to activate it
      await elementHandle[1].click();
      await page.type(TokenSelector, "USDC");

      // Get the updated list of options that appear after the search in the "You Buy" field
      const optionElementsBuy = await page.$$(optionSelector);

      for (const optionElement of optionElementsBuy) {
        const elementTextBuy = await page.evaluate(
          (el) => el.textContent?.trim(),
          optionElement
        );

        if (elementTextBuy == "USD Coin (USDC)") {
          console.log("Selected USDC to Swap");
          await optionElement.click();
        }
      }

      // Find the route selectors
      const route = ".sc-d413ea6e-0.ppUJr.RouteWrapper";
      const routeSelected = ".sc-d413ea6e-0.kxiweL.RouteWrapper.is-selected";
      const parentRoute = ".sc-bb167634-2.cObIGF";

      // Wait for the parentRoute element to appear
      await page.waitForSelector(parentRoute);

      console.log("Waiting for routes to fully fetch");

      await delay(7000); // Introduce a delay to allow time for the options to settle down

      // Click on the second element in the route selector to select the second route
      var routes = await page.$$(route);
      await routes[1].click();


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
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Uncomment the following line if you want to close the browser automatically after a successful swap.
    // await browser.close();
  }
}

// Helper function to introduce a delay
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

performSwap();