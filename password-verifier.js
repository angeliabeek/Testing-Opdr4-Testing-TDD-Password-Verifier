

const isNotNull = str => {
    return str != null;
};

const hasRightLength = str => {
    return str.length <= 8;
};

const hasUpperCaseCharacter = str => {
    const regExp = /[A-Z]/;
    return regExp.test(str);
    // or str.toLowerCase() !== str;
};

const hasLowerCaseCharacter = str => {
    const regExp = /[a-z]/;
    return regExp.test(str);
    // or str.toUpperCase() !== str;
};

const hasDigit = str => {
    const regExp = /\d/;
    return regExp.test(str);
};

const minimumConditionsReached = conditions => {
    const trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password),
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword,
};
