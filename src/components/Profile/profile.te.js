// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import { combineReducers, createStore } from "redux";
// import Profile from "./Profile";
// import { render, screen } from '@testing-library/react';

// describe.skip('tests Profile components', ()=> {
//   // const store = {
//   //   // getState: jest.fn( ()=> {}),
//   //   // dispatch: jest.fn(),
//   //   state: {
//   //     profile: {}
//   //   },
//   // };

//   jest.mock('react-redux', () => ({
//     useSelector: jest.fn( jest.fn()),
//     useDispatch: () => jest.fn(),
//     connect: jest.fn
//   }));

//   const rootReducer = combineReducers({
//     profile: {
//       name:'',
//       age:29,
//       checked: false,
//     },
//   });

//   it('tets2', () => {
//     const component = render( 
//       <Provider store={createStore(rootReducer)}>
//         <BrowserRouter> 
//           <Profile /> 
//         </BrowserRouter>
//       </Provider>
//     )
    
//     const wrapper = screen.getByText('Name').parentElement;
//     expect(wrapper).toBeInTheDocument();

//     // const placeholder = component.getByText('Name').parentElement;
//     // expect(placeholder).toHaveClass('post-empty');
    
//     // expect(component).toMatchSnapshot();
//   })
// });