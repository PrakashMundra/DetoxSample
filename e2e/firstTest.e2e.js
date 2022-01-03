describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it("should show welcome by default", async () => {
    await expect(element(by.text("Welcome"))).toBeVisible();
    await expect(element(by.id("hello_button"))).toBeVisible();
    await expect(element(by.id("world_button"))).toBeVisible();
    await expect(element(by.id("goodbye_button"))).toBeVisible();

    //Getting text from <Text> and checking
    await expect(element(by.id("text"))).toHaveText("Welcome");
  });

  it("should show hello by clicking hello_button", async () => {
    await element(by.id("hello_button")).tap();
    await expect(element(by.text("Hello"))).toBeVisible();

    //Getting text from <Text> and checking
    await expect(element(by.id("text"))).toHaveText("Hello");
  });

  it("should show hello by clicking world_button", async () => {
    await element(by.id("world_button")).tap();
    await expect(element(by.text("World"))).toBeVisible();

    //Getting text from <Text> and checking
    await expect(element(by.id("text"))).toHaveText("World");
  });

  it("should show hello by clicking goodbye_button", async () => {
    await element(by.id("goodbye_button")).tap();
    await expect(element(by.text("Goodbye, World"))).toBeVisible();

    //Getting text from <Text> and checking
    await expect(element(by.id("text"))).toHaveText("Goodbye, World");
  });
});
