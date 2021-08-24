import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import Profile from "./Profile";
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';



describe('tests Profile components', ()=> {
  const store = {
    getState: jest.fn( ()=> {}),
    dispatch: jest.fn(),
    state: {
      profile: {}
    },
  };
  jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
      .mockReturnValueOnce(mockConfigState)
      .mockReturnValueOnce(mockSearchState)
  }));
  
  // const state = {
  //   name:'',
  //   age: 0,
  //   checked: false
  // }

  // jest.mock('react-redux', () => ({
  //   useSelector:() => ({}),
  //   useDispatch: () => (() => ({})),
  //   connect: jest.fn
  // }));

  // const rootReducer = combineReducers({
  //   profile: {
  //     name:'',
  //     age:29,
  //     checked: false,
  //   },
  // });
  
  


  it('tets2', () => {
    
    const component = render( 
      <Provider store={store}>
        <BrowserRouter> 
          <Profile /> 
        </BrowserRouter>
      </Provider>
    )
    
    const wrapper = screen.getByText('Name').parentElement;
    expect(wrapper).toBeInTheDocument();

    // const placeholder = component.getByText('Name').parentElement;
    // expect(placeholder).toHaveClass('post-empty');
    // .toHaveBeenCalled()S
    // expect(component).toMatchSnapshot();
  })
});