import { render, screen } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Login test", () => {
  test("처음에는 Login 버튼이 있다.", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button"); // 버튼 가져오기
    expect(btnEl).toHaveTextContent("Login"); // Login이라고 적혀있는지 판별
  });
});

const user = userEvent.setup(); // 이벤트 감지
test("한번 클릭하면 Logout 버튼이 된다.", async () => {
  render(<Login />);
  const btnEl = screen.getByRole("button"); // 버튼 가져오기
  await user.click(btnEl);
  await user.click(btnEl);
  await user.click(btnEl);
  expect(btnEl).toHaveTextContent("Logout");
});

test("tab, space, enter 동작", async () => {
  render(<Login />);
  const btnEl = screen.getByRole("button"); // 버튼 가져오기
  await user.tab();
  await user.keyboard(" "); // spaceBar
  await user.keyboard("{Enter}"); // 엔터키
  await user.click(btnEl);
  expect(btnEl).toHaveTextContent("Logout");
});
