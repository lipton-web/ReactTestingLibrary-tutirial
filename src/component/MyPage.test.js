import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다", () => {
  render(<MyPage />);
  const txtEl = screen.getByText(/로그인을 해주세요./); // "로그인을 해주세요." 이렇게 해도 됨. 일부만 적으면 찾지 못함
  const btnEl = screen.getByRole("button"); // html 기본 롤을 찾음(h1~h6: heading, button:button, a: link, checkbox:checkbox, radio:radio, select: combobox 등)
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

test("유저가 있으면 환영문구를 보여준다", () => {
  render(<MyPage user={{ name: "KIM" }} />);
  const txtEl = screen.getByText(/KIM님 환영합니다/);
  expect(txtEl).toBeInTheDocument();
});

test("유저가 name이 없으면 로그인 문구와 버튼을 보여준다", () => {
  render(<MyPage user="Park" />);
  const txtEl = screen.getByText(/로그인을 해주세요/); // 텍스트 가져오기
  const btnEl = screen.getByRole("button"); // html 요소 가져오기
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

test("제목이 있다", () => {
  render(<MyPage />);
  const titleEl = screen.getByRole("heading", {
    level: 2, // h2 찾기
  });
  expect(titleEl).toBeInTheDocument();
});

test("input 요소가 있다", () => {
  render(<MyPage />);
  const inputEl = screen.getByRole("textbox", {
    name: "자기소개", // label의 htmlFor와 id 가 다르면 찾지 못함
  });
  // 또는
  // screen.getByLabelText("자기소개", {
  // 	selector: "textarea"
  // })
  expect(inputEl).toBeInTheDocument();
});

test("input 요소에 value 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByDisplayValue("Tom");
  expect(inputEl).toBeInTheDocument();
});

test("my div가 있다.", () => {
  render(<MyPage />);
  const inputEl = screen.getByTestId("my-div"); // 의미없는 테스트 데이터 가져오기
  expect(inputEl).toBeInTheDocument();
});
