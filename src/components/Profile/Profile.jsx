import { Button, Checkbox, Input } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile, changeProfileAge, changeProfileAgeDB, changeProfileCheckBox, changeProfileNameDB, subscribeOmProfileChangings } from '../../store/actions/profileAction';
import './profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const { name, age, checked } = useSelector(state => state.profile);

  React.useEffect(() => {
    dispatch(subscribeOmProfileChangings());
  }, [dispatch]);

  const handleNameSubmit = (newName) => {
    dispatch(changeProfile(newName.target.value))
  }
  const handleAgeSubmit = (newAge) => {
    dispatch(changeProfileAge(newAge.target.value))
  }
  const handleCheckBocSubmit = (check) => {
    dispatch(changeProfileCheckBox(check.target.checked))
  }

  const handleClickForm = () => {
    dispatch(changeProfileNameDB(name));
    dispatch(changeProfileAgeDB(age));
  }

  return (
    <div>
      <h3> Profile page </h3>
      <div className='profile_column'>
        <div className='profile_row'>
          <p>Name: <b>{name || 'Anonym'}</b></p>
          <div className='profile_input'>
            <span>Сhange your name: </span>
            <Input
              label='Name'
              placeholder="Введите имя"
              value={name}
              onChange={handleNameSubmit}
              id='inputName'
            />
          </div>
        </div>
        <div className='profile_row'>
          <p>Age: <b>{age >= 0 && age <= 100 ? age : '0'}</b></p>
          <div className='profile_input'>
            <span>Сhange your age:</span>
            <Input
              label='Age'
              placeholder="Введите возраст"
              type="number"
              value={age}
              id="age"
              onChange={handleAgeSubmit}
            />
          </div>
        </div>
        <Button
          type="submit"
          variant='outlined'
          onClick={handleClickForm}
        >
          Save
        </Button>

        <Checkbox
          checked={checked}
          onChange={handleCheckBocSubmit}
          color="primary"
        />
      </div>
    </div>
  )
}

export default Profile;