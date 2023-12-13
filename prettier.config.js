module.exports = {
  semi: true, // 문장 끝에 세미콜론
  singleQuote: false, // 홑따옴표(false는 쌍따옴표)
  jsxSingleQuote: false, // JSX 내에서 홑따옴표(false는 쌍따옴표)
  tabWidth: 2, // 탭 너비 사이즈
  useTabs: false, // 들여쓰기를 탭으로 사용 X(false로 하면 들여쓰기 크기를 tabwidth로 설정해줌 / true는 하나의 탭이 여러개의 공백과 동등하게 취급)
  printWidth: 80, // 80자가 넘으면 자동 줄바꿈
  trailingComma: "none", // 끝 콤마 미사용
  arrowParens: "always", // 화살표 함수의 매개변수가 하나일 때 괄호를 생략 안 함(생략은 avoid)
  bracketSpacing: true, // 객체 괄호 사이에 공백을 둠
  bracketSameLine: false, // 마지막 '>' 를 같은 줄에 위치시키지 않음
  singleAttributePerLine: true, // 태그 속성마다 엔터 사용
  insertPragma: false, // 파일 상단에 주석을 추가하여 이 파일이 포맷팅 완료 되었음을 표시
  quoteProps: "as-needed" // 인용부호를 필요할 때만 사용합니다.(공백, 하이픈 등 특수 문자가 포함된 KEY값에만 사용)
}