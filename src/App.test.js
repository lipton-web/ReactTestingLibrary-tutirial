import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // 테스트명
  render(<App />); // 특정 컴포넌트 받아서 버츄얼 돔 생성
  const linkElement = screen.getByText(/learn react/i); // screen으로 요소에 접근
  expect(linkElement).toBeInTheDocument();
});

test("로고 이미지가 잘 나온다.", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo"); // 이미지 alt 텍스트 가져오기
  expect(logoEl).toBeInTheDocument();
});
