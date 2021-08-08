import ReactDOM from "react-dom";

const AppMock = () => <></>;
jest.mock("../App", () => AppMock);

jest.mock("react-dom");

test("should call ReactDOM once", () => {
  const mockReactDom = jest.fn();
  ReactDOM.render.mockImplementation(mockReactDom);

  require("../index");

  expect(mockReactDom).toHaveBeenCalledTimes(1);
});
