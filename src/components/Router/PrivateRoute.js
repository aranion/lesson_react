import {useSelector} from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute( props ) {  
  const isAuthed = useSelector(state => state.profile.isAuthed);
  return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}