import pageElement from "../../androidPageElement/pageElement"

describe("one basic e2e test",()=> {
    afterEach(async()=> {
        await browser.closeApp()
    })
    beforeEach(async ()=> {
        await browser.launchApp()
    })
    it("run first e2e test", async()=> {
        await pageElement.performEndToEndTesting()
        
    })

    it("read asset", async()=> {
        await pageElement.readAssetText()
    })
})