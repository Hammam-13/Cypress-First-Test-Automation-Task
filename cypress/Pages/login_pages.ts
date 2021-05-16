export class LoginPage{

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginpage_loginButton = '[type="submit"]'


    navigate(url: string){
        cy.visit(url)
       } 

    enterUsername(username: string){
        cy.get(this.loginPage_username).type(username)
}
    enterPassword(password: string){
        cy.get(this.loginPage_password).type(password)
    }
    clickLogin(){
        cy.get(this.loginpage_loginButton).click()
    }



}