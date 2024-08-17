import { test, expect } from "@playwright/test";

test.describe("Om Oss Navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the Om Oss page
    await page.goto("/om-oss/hva-er-minihjorne");
  });

  test("Navigate through Om Oss pages using Links component", async ({
    page,
  }) => {
    const links = [
      { name: "Hva er Minihjørne?", href: "/om-oss/hva-er-minihjorne" },
      { name: "Hvorfor bruke oss", href: "/om-oss/hvorfor-bruke-oss" },
      { name: "Selge klær", href: "/om-oss/hvordan-selge" },
      { name: "Kjøpe klær", href: "/om-oss/kjope" },
      { name: "Levere klær", href: "/om-oss/levering" },
      { name: "Sende klær", href: "/om-oss/sende" },
      { name: "Priser?", href: "/om-oss/priser" },
      { name: "Selger garanti", href: "/om-oss/selger-garanti" },
    ];

    for (const link of links) {
      // Click on the link
      await page.click(`text=${link.name}`);

      // Verify that the URL is correct
      await expect(page).toHaveURL(link.href);

      // Verify that the header text is correct
      const header = await page.textContent("h1");
      expect(header).toContain(link.name);
    }
  });

  test("Navigate back and forth between Om Oss pages", async ({ page }) => {
    // Navigate to "Hvorfor bruke oss" page
    await page.click("text=Hvorfor bruke oss");
    await expect(page).toHaveURL("/om-oss/hvorfor-bruke-oss");

    // Navigate to "Selge klær" page
    await page.click("text=Selge klær");
    await expect(page).toHaveURL("/om-oss/hvordan-selge");

    // Navigate back to "Hvorfor bruke oss" page
    await page.goBack();
    await expect(page).toHaveURL("/om-oss/hvorfor-bruke-oss");

    // Navigate back to "Hva er Minihjørne?" page
    await page.goBack();
    await expect(page).toHaveURL("/om-oss/hva-er-minihjorne");

    // Navigate forward to "Hvorfor bruke oss" page
    await page.goForward();
    await expect(page).toHaveURL("/om-oss/hvorfor-bruke-oss");

    // Navigate forward to "Selge klær" page
    await page.goForward();
    await expect(page).toHaveURL("/om-oss/hvordan-selge");
  });
});
