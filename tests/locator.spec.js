// @ts-check
import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Testcase Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(1000); // Delay 1 detik


    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');
    await page.waitForTimeout(1000); // Delay 1 detik

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');
    await page.waitForTimeout(1000); // Delay 1 detik

    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click();
    await page.waitForTimeout(1000); // Delay 1 detik

    const buttonAddToCart = page.locator('#add-to-cart-sauce-labs-backpack')
    await buttonAddToCart.click();
    await page.waitForTimeout(1000); // Delay 1 detik

    const buttonAddToCart2 = page.locator('#add-to-cart-sauce-labs-bike-light')
    await buttonAddToCart2.click();
    await page.waitForTimeout(1000); // Delay 1 detik

    const iconCart = page.locator('#shopping_cart_container > a')
    await iconCart.click();
    const cartTitle = page.locator('#header_container > div.header_secondary_container > span');
    await expect(cartTitle).toHaveText('Your Cart');

    const buttonCheckout = page.locator('#checkout');
    await buttonCheckout.click();
    await page.waitForTimeout(1000); // Delay 1 detik
    const checkoutTitle = page.locator('#header_container > div.header_secondary_container > span');
    await expect(checkoutTitle).toHaveText('Checkout: Your Information');

    const inputFirstname = page.locator('#first-name');
    await inputFirstname.fill('Fanny');
    await expect(inputFirstname).toHaveValue('Fanny');
    await page.waitForTimeout(1000); // Delay 1 detik

    const inputLastname = page.locator('#last-name');
    await inputLastname.fill('Putria Agustina');
    await expect(inputLastname).toHaveValue('Putria Agustina');
    await page.waitForTimeout(1000); // Delay 1 detik

    const inputZip = page.locator('#postal-code');
    await inputZip.fill('12345');
    await expect(inputZip).toHaveValue('12345');
    await page.waitForTimeout(1000); // Delay 1 detik

    const buttonContinue = page.locator('#continue');
    await buttonContinue.click();
    await page.waitForTimeout(1000); // Delay 1 detik
    const overviewCOTitle = page.locator('#header_container > div.header_secondary_container > span');
    await expect(overviewCOTitle).toHaveText('Checkout: Overview');

    const buttonFinish = page.locator('#finish');
    await buttonFinish.click();
    await page.waitForTimeout(1000); // Delay 1 detik
    const completeTitle = page.locator('#header_container > div.header_secondary_container > span');
    await expect(completeTitle).toHaveText('Checkout: Complete!');

});