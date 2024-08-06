import { test, expect } from "@playwright/test";

test.describe("Authentication Flow", () => {
  test("should redirect to login if not authenticated", async ({ page }) => {
    // Navigate to a protected page
    await page.goto("/min-side"); // Adjust the path

    // Verify redirection to login page
    await expect(page).toHaveURL("/auth?redirect=/min-side/");
  });

  test("should show user data if authenticated", async ({ page }) => {
    // Simulate authentication by setting a cookie
    await page.context().addCookies([
      {
        name: "Token",
        value:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNzIyNzczNzM0LCJleHAiOjE3MjUzNjU3MzR9.a9puZ4i1X9SvCIgIcPMBrMuDHFH0E-g9Vphg76iA8BY", // Replace with a valid token
        domain: "localhost",
        path: "/",
      },
    ]);

    // Navigate to a protected page
    await page.goto("/min-side"); // Adjust the path
    await expect(page).toHaveURL("/min-side");

    expect(await page.locator("text=anders@anders.anders")).toBeVisible();
    expect(await page.locator("text=produkter")).toBeVisible();
    expect(await page.locator("text=Salgsprofil")).toBeVisible();
    expect(await page.locator("text=Leie")).toBeVisible();
  });
});
