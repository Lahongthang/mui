import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const [dateDepart, setDateDepart] = React.useState(null)
  const [dateReturn, setDateReturn] = React.useState(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={2}>
            <DatePicker
                label="Depart"
                value={dateDepart}
                onChange={(newValue) => {
                  setDateDepart(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
                label="Return"
                value={dateReturn}
                onChange={(newValue) => {
                  setDateReturn(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
      </Stack>
    </LocalizationProvider>
  );
}
