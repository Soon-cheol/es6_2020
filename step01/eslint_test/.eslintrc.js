module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended", // 미리 설정된 규칙 세트을 사용한다
    // "extends": "airbnb",
  ],
  rules: {
    "no-unexpected-multiline": "error",
    "no-extra-semi": "error",
  },
};
