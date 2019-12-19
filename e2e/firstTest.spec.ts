describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show hello screen after tap', async () => {
    await expect(element(by.text('Welcome to React'))).toBeVisible();
  });
});
