import * as testData from "../../test/androidTestData/data.json"
class pageElement {
    get appTab() {
         return $("~App");
    };
    get contentTab() {
        return $("~Content");
    };
    get alertDialog() {
        return $("~Alert Dialogs");
    };
    get listDailog() {
        return $("~List dialog");
    };
    
    get headerTitle() {
        return $('android=resourceId("android:id/alertTitle")');
    };
    get commandOne() {
        return $('//*[text()="Command one"]');
    };
    get asset() {
        return $("~Assets");
    };
    get readAsset() {
        return $("~Read Asset");
    };

    get assetReadText() {
        return $('android=resourceId("io.appium.android.apis:id/text")');
    };


    async performEndToEndTesting() {
        await this.appTab.click();
        const alert= await $('~Alert Dialogs');
        alert.waitForDisplayed();
        await expect(alert).toHaveText("Alert Dialogs");
        alert.click();
        const list = await this.listDailog;
        list.waitForDisplayed();
        await expect(list).toHaveText("List dialog");
        await list.click();
        await this.headerTitle.waitForDisplayed();
        expect(this.headerTitle).toHaveText(testData.alertListText.header);
        expect(this.commandOne).toHaveText(testData.alertListText.command1);

        
    };

    async readAssetText() {
        await this.contentTab.click();
        const asset = await this.asset;
        asset.waitForDisplayed();
        await expect(asset).toHaveText("Assets")
        asset.click();
        const readAsset = await this.readAsset;
        readAsset.waitForDisplayed();
        await expect(readAsset).toHaveText("Read Asset");
        readAsset.click();
        await expect(this.assetReadText).toHaveTextContaining(testData.asssetReadText);

    };
};
export default new pageElement;