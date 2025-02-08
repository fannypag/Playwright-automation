import loginPage from "../locator/loginPage";
import { expect } from "@playwright/test";

export default class loginActions {
    constructor(page) {
        this.page = page;
        this.loginPage = new loginPage();
        this.inputUsername = page.locator(this.loginPage.inputUsername);
        this.inputPassword = page.locator(this.loginPage.inputPassword);
        this.clickButtonLogin = page.locator(this.loginPage.clickButtonLogin);
        this.productsPage = page.locator(this.loginPage.productsPage);
        this.clickAddToCart1 = page.locator(this.loginPage.clickAddToCart1);
        this.clickAddToCart2 = page.locator(this.loginPage.clickAddToCart2);
        this.clickIconCart = page.locator(this.loginPage.clickIconCart);
        this.yourCartPage = page.locator(this.loginPage.yourCartPage);
        this.clickCheckout = page.locator(this.loginPage.clickCheckout);
        this.inputFirstName = page.locator(this.loginPage.inputFirstName);
        this.inputLastName = page.locator(this.loginPage.inputLastName);
        this.inputZipCode = page.locator(this.loginPage.inputZipCode);
        this.clickContinue = page.locator(this.loginPage.clickContinue);
        this.checkoutOverviewPage = page.locator(this.loginPage.checkoutOverviewPage);
        this.clickFinish = page.locator(this.loginPage.clickFinish);
        this.completeTitle = page.locator(this.loginPage.completeTitle);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async InputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickButtonLogin.click();
        await expect(this.productsPage).toHaveText('Products');
    }

    async addToCart() {
        await this.clickAddToCart1.click();
        await this.clickAddToCart2.click();
        await this.clickIconCart.click();
        await expect(this.yourCartPage).toHaveText('Your Cart');
    }

    async checkout() {
        await this.clickCheckout.click();

        await this.inputFirstName.fill('Fanny');
        await expect(this.inputFirstName).toHaveValue('Fanny');
        await this.inputLastName.fill('Putria Agustina');
        await expect(this.inputLastName).toHaveValue('Putria Agustina');
        await this.inputZipCode.fill('12345');
        await expect(this.inputZipCode).toHaveValue('12345');
        
        await this.clickContinue.click();
        await expect(this.checkoutOverviewPage).toHaveText('Checkout: Overview');
        await this.page.waitForSelector(this.loginPage.clickFinish);
        await this.clickFinish.click();
        await expect(this.completeTitle).toHaveText('Checkout: Complete!');
    }
}