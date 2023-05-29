class HomeScreen {
    get #enterStoreAdress (){
        return $('id:button_login_store')
    }

    get #enterSkip(){
        return $('id:button_skip')
    }

    async goToLogin (){
        await this.#enterStoreAdress.click()
    }

    async goToSkip (){
        await this.#enterSkip.click()
    }
}

module.exports = new HomeScreen()