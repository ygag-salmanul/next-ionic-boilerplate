import { InputAdornment, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './MobileInput.module.scss';
import { FLAGS_AND_COUNTRY_CODE } from '../../../__mockData__/index.data';

const PhoneNumberInput = ({
  phoneNumber,
  setPhoneNumber,
  countryCode,
  setCountryCode,
  disable
}: any) => {
  console.log(phoneNumber)
  console.log(countryCode)
    const handleCountryCodeChange = (event: SelectChangeEvent) => {
      setCountryCode(event.target.value as string);
  };
  useEffect(() => {
    setCountryCode(FLAGS_AND_COUNTRY_CODE[0].code);
  }, [setCountryCode]);
  const handlePhoneNumberChange = (e: any) => {
    let currentValue = e.target.value;
    currentValue = currentValue.replace(/[^\d\s\-()]/g, '');
    if (currentValue && currentValue.length > 12) {
      currentValue = currentValue.slice(0, 12);
    }
    setPhoneNumber(currentValue);
    console.log(phoneNumber,'///')
  };
  return (
    <div className={`${styles.phonenumberinput} phonenumberinput`}>
      <TextField
      disabled={disable}
        value={phoneNumber}
        onInput={handlePhoneNumberChange}
        fullWidth
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Select
              disabled={disable}
                variant="standard"
                value={countryCode}
                disableUnderline
                onChange={handleCountryCodeChange}>
                {FLAGS_AND_COUNTRY_CODE.map((country, index) => (
                  <MenuItem key={index} value={country.code}>
                    <div
                      className={`${styles['phonenumberinput-select__options']} phonenumberInput-countrycode `}>
                      <img
                        src={country.flag}
                        alt=""
                        className={
                          styles['phonenumberinput-select__options-image']
                        }
                      />
                      <p
                        className={
                          styles['phonenumberinput-select__options-text']
                        }>
                        {country.code}
                      </p>
                    </div>
                  </MenuItem>
                ))}
              </Select>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
