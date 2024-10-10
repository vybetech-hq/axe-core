describe('page-has-header tests', () => {
  const { checkSetup, getCheckEvaluate } = axe.testUtils;
  const checkContext = axe.testUtils.MockCheckContext();
  const checkEvaluate = getCheckEvaluate('page-has-header');

  afterEach(() => {
    checkContext.reset();
  });

  // TODO: Replace this with real tests for this check
  it('returns false when img has no alt', () => {
    const params = checkSetup('<img id="target" />');
    assert.isFalse(checkEvaluate.apply(checkContext, params));
    assert.deepEqual(checkContext._data, { messageKey: 'missing-alt' });
  });
});
