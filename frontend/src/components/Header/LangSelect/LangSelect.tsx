import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { languages } from '../../../constants';
import { useStyles } from '../useStyles';

type LangSelectProps = {
  lang: string;
  handleLangChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

const LangSelect = ({ lang, handleLangChange }: LangSelectProps) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} focused={false}>
      <InputLabel className={classes.selectLabel} shrink id="select-placeholder">
        Language
      </InputLabel>
      <Select
        labelId="select-lang-label"
        id="select-lang-label"
        value={lang}
        onChange={handleLangChange}
        displayEmpty
        className={classes.selectEmpty}>
        {languages.map((item) => (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LangSelect;
