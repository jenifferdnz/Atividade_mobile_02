const homeScreen = require ("../screens/home.screen");
const loginScreen = require ("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const timeout = 100000

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
describe('Acess admin Painel', () => {
    it('should login with valid credencials', async () => {
        await homeScreen.goToSkip()
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddrees(urlLoja)
        driver.setTimeout(() => {
            
        }, timeout);
        await loginScreen.continue()
        //driver.touchAction([
            //{action: 'press', x:500 , y: 1000},
            //{action: 'moveTo', x:500 , y: 500}
        //])
        driver.setTimeout(() => {
            
        }, timeout);
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        
        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - SHOP')

        
    });
    
});