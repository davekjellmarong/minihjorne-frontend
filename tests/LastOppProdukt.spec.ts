import { test, expect } from "@playwright/test";

test("User registration and profile update flow", async ({ page }) => {
  // Navigate to the homepage
  await page.goto("/");
  await page.goto("/auth");
  // Click on the "Registrer" button to go to the auth page
  await page.click('button:has-text("Registrer")');

  // Fill in the registration form
  await page.fill('input[name="username"]', "newuser");
  await page.fill('input[name="email"]', "newuser@example.com");
  await page.fill('input[name="password"]', "password123");

  // Submit the registration form
  await page.click('button[type="submit"]');

  // Verify that the user is redirected to the "min-side/leie" page
  await expect(page).toHaveURL("/min-side/selge/leie");

  // Select "free leie" (assuming there's a button or link for this)
  await page.click('button:has-text("Free Leie")');

  // Verify that the user is redirected to the "salgsprofil" page
  await page.goto("/min-side/selge/salgsprofil");

  // Edit the header and description
  await page.fill('input[name="header"]', "New Header");
  await page.fill('textarea[name="description"]', "New Description");

  // Submit the profile update form
  await page.click('button[type="submit"]');

  // Verify that the profile update was successful
  await expect(page.locator("text=Salgsprofil lagret")).toBeVisible();

  // Go to "last opp produkter" page
  await page.goto("/min-side/selge/last-opp");

  // Verify that the user is on the "last opp produkter" page
  await expect(page).toHaveURL("/min-side/selge/last-opp");

  // Select "fortsett med x lagrede bilder"
  await page.click('button:has-text("Fortsett med")');

  // Select 1 photo
  await page.click("li:has(img)");

  await page.click('button:has-text("Fortsett")');

  // Go through the carousel and fill in values on each slide
  await page.fill('input[name="color1"]', "Red");
  await page.click('button:has-text("Next")');
  await page.fill('input[name="brand"]', "BrandName");
  await page.click('button:has-text("Next")');
  await page.fill('input[name="price"]', "100");
  await page.click('button:has-text("Next")');
  await page.fill('input[name="category"]', "CategoryName");
  await page.click('button:has-text("Next")');
  await page.fill('input[name="state"]', "New");
  await page.click('button:has-text("Next")');

  // Save the product
  await page.click('button:has-text("Save")');

  // Verify that the product is saved successfully
  await expect(page.locator("text=Produktet er lagret")).toBeVisible();

  // Go back to "my products" page
  await page.goto("/min-side/selge/produkter");

  // Verify that the user is on the "my products" page
  await expect(page).toHaveURL("/min-side/selge/produkter");
});
