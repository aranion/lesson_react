import { Checkbox, Input } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile, changeProfileAge, changeProfileCheckBox } from '../../store/actions/profileAction';

const Profile = () => {

  const dispatch = useDispatch();
  const { name, age, checked } = useSelector(state => state.profile);

  const handleNameSubmit = (newName) => {
    dispatch(changeProfile(newName.target.value))
  }
  const handleAgeSubmit = (newAge) => {
    dispatch(changeProfileAge(newAge.target.value))
  }
  const handleCheckBocSubmit = (check) => {
    dispatch(changeProfileCheckBox(check.target.checked))
  }

  return (
    <div>
      <h3> Profile page </h3>
      <Checkbox
        checked={checked}
        onChange={handleCheckBocSubmit}
        color="primary"
      />
      <Input label='Name' placeholder="Введите имя" value={name} onChange={handleNameSubmit} />
      <Input label='Age' placeholder="Введите возраст" type="number" value={age} onChange={handleAgeSubmit} />
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}

export default Profile;