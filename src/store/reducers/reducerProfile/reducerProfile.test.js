import { changeIsAuthed, changeProfile, changeProfileAge, changeProfileCheckBox } from '../../actions/profileAction';
import profileReducer from './selector';

describe('Profile reducern tests', ()=> {
  let action = {};
  let state = {};
  let newState = null;

  beforeEach(() => { 
    state = {
      name:'',
      age: 0,
      checkBox: false,
      isAuthed: false,
    };
    
    newState = (action) => profileReducer(state, action);
  });

  it('add "Name" in state', () => {
    action = changeProfile('Name');
    expect(newState(action).name).toBe('Name');
  });

  it('add "Age" in state', () => {
    action = changeProfileAge('10');
    expect(newState(action).age).toBe(10);
  });

  it('add "checkBox" in state', () => {
    action = changeProfileCheckBox(true);
    expect(newState(action).checkBox).toBe(true);
  });

  it('add "isAuthed" in state', () => {
    action = changeIsAuthed(true);
    expect(newState(action).isAuthed).toBe(true);
  });

  it('return default state', () => {
    action = {};
    expect(newState(action)).toBe(state);
  });
});