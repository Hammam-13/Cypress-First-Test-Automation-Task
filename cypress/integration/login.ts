import {LoginPage} from "../Pages/login_pages"

const loginPage = new LoginPage()   

it('loginPage [happy scenario ]', function(){

    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
})

it('wrongPassword', function(){
    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('hammam')
    loginPage.clickLogin()
} )