const
    {
        isNotNull,
        hasRightLength,
        hasUpperCaseCharacter,
        hasLowerCaseCharacter,
        hasDigit,
        minimumConditionsReached,
        verifyPassword
    } = require("./password-verifier.js");

const password = "Dog87";
const expected = true;

test("Password is not null", () => {
    const output = isNotNull(password);
    expect(output).toEqual(expected);
});

test("Password has right length", () => {
    const output = hasRightLength(password);
    expect(output).toEqual(expected);
});

test("Password has one or more uppercase characters", () => {
    const output = hasUpperCaseCharacter(password);
    expect(output).toEqual(expected);
});

test("Password has one or more lowercase characters", () => {
    const output = hasLowerCaseCharacter(password);
    expect(output).toEqual(expected);
});

test("Password has one or more digits", () => {
    const output = hasDigit(password);
    expect(output).toEqual(expected);
});

test("At least three conditions of the password are reached", () => {
    const conditions = [isNotNull, hasRightLength, hasUpperCaseCharacter, hasLowerCaseCharacter, hasDigit];
    const output = minimumConditionsReached(conditions);
    expect(output).toEqual(expected);
});

test("Verify password", () => {
    const output = verifyPassword(password);
    expect(output).toEqual(expected);
});



