import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("잠시 후 제목이 나타납니다", async () => {
    render(<UserList users={users} />);
    // screen.debug()는 렌더링된 돔트리를 간락하게 보여 줌
    screen.debug();
    // findByRole은 비동기(기본 1초 동안)
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        timeout: 2000, // 2초로 시간 늘림
      }
    );
    screen.debug();
    expect(titleEl).toBeInTheDocument();
  });

  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("li는 3개가 나옵니까?.", () => {
    render(<UserList users={[]} />);
    // queryByRole은 일치하는게 없으면 null이나 빈 배열을 반환 함
    const liElement = screen.queryAllByRole("listitem"); // getByRole, getAllByRole은 일치하는게 없으면 에러를 발생.
    expect(liElement).toHaveLength(0);
    // expect(liElement).not.toBeInTheDocument(); // queryByRole로 하면 통과
  });
});
