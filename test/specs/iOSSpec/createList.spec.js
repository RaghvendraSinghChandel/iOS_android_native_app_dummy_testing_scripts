import listScreen from "../../iOSPageElement/pageElement"
describe("create list and perform action",()=> {

    /**
     * Create list and verify list is created or not
     */
    it ("create list and verify list is created", async()=> {
        await listScreen.addlistItemAndVerifyItemAdded("Created list for testing")
    })

    it ("create to do list and with list item", async()=> {
        await listScreen.createToDoListWithListItem("Things To Do Today","Buy Grocerry")
    })

})