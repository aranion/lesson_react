import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useSelector } from "react-redux";


import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk'

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// const middlewares = [];
// const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const CHANGE_AGE = "PROFILE::CHANGE_AGE";
const changeProfile = () => ({ type: CHANGE_NAME });
const changeProfileAge = () => ({ type: CHANGE_AGE });

describe("  test for container component", () => {
  let store = {};
  // Initialize mockstore with empty state
  const initialState = {
    profile: {},
    name: 'Иван',
    age: 10
  };
  beforeAll(() => {
    store = mockStore(initialState);
    // console.log(store);
    // Dispatch the action
    // store.dispatch(changeProfile());
    // console.log(store);
  });
  afterAll(() => store = {});

  it('should dispatch an action when typing in the name field', () => {
    render(
      <Provider store={store} >
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider >
    );

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const testText = 'Test';
    // console.log(actions);
    // const expectedPayload = { type: 'CHANGE_NAME' };
    // expect(actions).toEqual([expectedPayload]);
    userEvent.type(screen.getByRole('textbox'), testText);
    // console.log(actions.reduce((sum, i) => sum += 1, 0));
    expect(actions.reduce((sum, i) => (i.type === CHANGE_NAME) ? sum += 1 : 0, 0)).toBe(testText.length);
    // expect(actions).toHaveBeenCalledTimes(4);
  });

  it('should dispatch an action when typing in the age field', () => {
    render(
      <Provider store={store} >
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider >
    );

    const testText = '30';
    const actions = store.getActions();
    userEvent.type(screen.getByPlaceholderText('Введите возраст'), testText);
    expect(actions.reduce((sum, i) => (i.type === CHANGE_AGE) ? sum += 1 : 0, 0)).toBe(testText.length);
  });
  it('should dispatch click button save', () => {
    render(
      <Provider store={store} >
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider >
    );

    const actions = store.getActions();
    userEvent.click(screen.getByText('Save'));
  });
});


// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
// }));
// // const onChange = jest.fn();
// // const handleAgeSubmit = jest.fn();

// // const handleCheckBocSubmit = jest.fn();
// // const handleClickForm = jest.fn();

// describe("  test for container component", () => {
//   const store = {
//     getState: jest.fn(() => { }),
//     dispatch: jest.fn(),
//     subscribe: jest.fn(),
//     state: {
//       profile: {},
//       name: 'Иван',
//       age: 10
//     },
//   };
//   beforeEach(() => {
//     useSelector.mockImplementation(callback => {
//       return callback({
//         profile: {},
//         name: 'Иван',
//         age: 10
//       });
//     });

//   });

//   const handleNameSubmit = jest.fn();

//   it('test', () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Profile />
//         </BrowserRouter>
//       </Provider>
//     );
//     userEvent.type(screen.getByRole('textbox'), 'Test');
//     expect(handleNameSubmit).toHaveBeenCalledTimes(4);

//     // userEvent.type(screen.getByPlaceholderText('Введите имя'), 'Test');
//     // console.debug(screen.getByPlaceholderText('Введите имя'));
//     // console.debug(screen.getByLabelText('Name'));

//     // console.debug(component.find('#inputName'));
//     // expect(screen.queryByDisplayValue(/Test/)).toBeInTheDocument();

//     // expect(screen.findByTestId('button')).toBe('Иван');

//     // const elem = wrapper.find('h1');
//     // expect(elem.length).toBe(1);
//   });
// });