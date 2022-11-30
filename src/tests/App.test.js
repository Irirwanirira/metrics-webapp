import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import App from "../App";
import mockFetch from "../mock/mockFetch";


describe('App function', () => {
    it('It has to has to render all the function ', () => {
      const home = render(
        <>
          <Provider store={store}>
            <App />
          </Provider>
        </>,
      );
      expect(home).toMatchSnapshot();
    })

    it("it renders the API ", (() => {
        jest.spyOn(window, "fetch").mockImplementation(mockFetch);
    }))
});
  
