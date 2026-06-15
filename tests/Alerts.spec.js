const { test, expect } = require('@playwright/test');

// Alert with OK button
test.skip("Alert with Ok button", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Dialog handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    const simpleAlert = page.getByText('Simple Alert', { exact: true });
    await simpleAlert.click();

    
});


// Alert with OK and Cancel button
test("Alert with Ok and cancel button", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Dialog handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toContain('Press a button!');

        await dialog.accept();      // Click OK
        // await dialog.dismiss();  // Click Cancel
    });

    const confirmationDialog = page.getByText('Confirmation Alert', { exact: true });
    await confirmationDialog.click();
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(2000);
});

// Prompt dialog box with inputbox
test("Prompt dialog box", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Dialog handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Krishna');     
        // await dialog.dismiss();  // Click Cancel

    });

    const PromptDialog = page.getByRole('button', { name: 'Prompt Alert' })
    await PromptDialog .click();
    await expect(page.locator('#demo')).toHaveText('Hello Krishna! How are you today?');
});
