import TextField from '@mui/material/TextField'
import AutoComplete from '@mui/material/Autocomplete'

const ComboBox = () => {
    return (
        <AutoComplete
            sx={{width: 700, marginTop: 5}}
            options={top3Films}
            renderInput={params => <TextField {...params} label='Movie'/>}
        />
    )
}

export default ComboBox

const top3Films = [
    {label: 'The Dark Knight', year: 2008},
    {label: 'Pulp Fiction', year: 1994},
    {label: 'Fight Club', year: 1999},
]