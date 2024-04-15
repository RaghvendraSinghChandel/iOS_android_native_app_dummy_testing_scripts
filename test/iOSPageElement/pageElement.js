class listScreen {
    get addList() {
        return $("~Add");
    }

    get createNameOfList() {
        return $("//*[@type='XCUIElementTypeOther']");
    }

    get createList() {
        return $("~Create");
    }

    get listElement() {
        return $("//*[@value='Lists']");
    }

    get createItem() {
        return $("//*[@value='Create item']");
    }

    get createNameOfToDoItem() {
        return $("//*[@value='Title']");
    }

    get dueDateField() {
        return $("//*[@value='Due']");
    }

    get pickDueDate() {
        return $("~Date Picker");
    }

    get selectTodayDate() {
        const date = new Date();
        const dayOfMonth = date.getDate().toString();
        return $("~"+ dayOfMonth);
    }
    get returnBackFromDatePicker() {
        return $(`-ios class chain:${"**/XCUIElementTypeWindow[3]"}`);
    }




    async addlistItemAndVerifyItemAdded(nameOfList) {
        await this.addList.click();
        await this.createNameOfList.setValue(nameOfList);
        await this.createList.click();
        await this.listElement.click();
        await expect($("~"+nameOfList)).toBeExisting();
    };

    async createToDoListWithListItem(nameOfList, nameOfListItem) {
        const date = new Date();
        const dayOfMonth = date.getDate().toString();
        await this.addlistItemAndVerifyItemAdded(nameOfList);
        await $("~"+nameOfList).click();
        await this.createItem.click();
        await this.createNameOfToDoItem.setValue(nameOfListItem);
        await this.dueDateField.setValue(dayOfMonth);
        await expect(this.pickDueDate).toBeExisting();
        // await this.pickDueDate.click();
        // await this.selectTodayDate.click();
        await this.returnBackFromDatePicker.click();
        await this.createList.click()
        await expect($("~"+nameOfListItem)).toBeExisting()
    };

};
export default new listScreen