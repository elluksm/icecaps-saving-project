import { getNextFirstWorkdayOfMonth } from "./helperMethods";

describe("getNextFirstWorkdayOfMonth function", () => {
  test("shows correct next workday of month if it is now second half of May 2021 => used only as a quick testing example and should be improved", () => {
    expect(getNextFirstWorkdayOfMonth(new Date(2020, 5, 24))).toBe("01.06.2021");
  });
});
