it("SHOULD PASS should match an object containing an identical Map", () => {
  expect({ aMap: new Map([[1, 1]]) }).toEqual(
    expect.objectContaining({
      aMap: new Map([[1, 1]]),
    })
  );
});

it("SHOULD FAIL should report an error on this one but it does not", () => {
  expect({ aMap: new Map([[1, 1]]) }).toEqual(
    expect.objectContaining({
      aMap: new Map([[2, 2]]),
    })
  );
});

it("SHOULD PASS should not match an object containing a Map with different entries", () => {
  expect({ aMap: new Map([[1, 1]]) }).toEqual(
    expect.not.objectContaining({
      aMap: new Map([[2, 2]]),
    })
  );
});

it("SHOULD PASS should not equal an object containing a Map with different entries", () => {
  expect({ aMap: new Map([[1, 1]]) }).not.toEqual(
    expect.objectContaining({
      aMap: new Map([[2, 2]]),
    })
  );
});

it("SHOULD FAIL should not match an object containing a Map with different entries", () => {
  expect({ aMap: new Map([[1, 1]]) }).toEqual(
    expect.not.objectContaining({
      aMap: new Map([[1, 1]]),
    })
  );
});

it("SHOULD FAIL should not equal an object containing a Map with different entries", () => {
  expect({ aMap: new Map([[1, 1]]) }).not.toEqual(
    expect.objectContaining({
      aMap: new Map([[1, 1]]),
    })
  );
});
