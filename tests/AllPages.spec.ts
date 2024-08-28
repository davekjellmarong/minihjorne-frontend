import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to all public pages", async ({ page }) => {
    const publicPages = [
      "/home",
      "/about",
      "/contact",
      "/products",
      "/auth",
      "/hanndelkurv",
      // Add more public pages here
    ];

    for (const pagePath of publicPages) {
      // Navigate to the public page
      await page.goto(`https://your-app.com${pagePath}`);

      // Add your assertions here for the public page
      // Example: expect(await page.title()).toBe('Page Title');
    }
  });

  test("should navigate to all private pages", async ({ page }) => {
    const privatePages = [
      "/min-side/selge/salgsprofil",
      "/min-side/selge/last-opp",
      "/min-side/selge/produkter",
      // Add more private pages here
    ];

    for (const pagePath of privatePages) {
      // Navigate to the private page
      await page.goto(`https://your-app.com${pagePath}`);

      // Add your assertions here for the private page
      // Example: expect(await page.title()).toBe('Private Page Title');
    }
  });
});
