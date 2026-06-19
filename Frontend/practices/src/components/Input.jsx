import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({field ,label, onChangeHandler, type}) {

 
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

      {/* field="email" */}
      <TextField onChange={(e) => {

        onChangeHandler(e,field,)
      }} id="outlined-basic" label={label} variant="outlined" type={type} />
    </Box>
  );
}
