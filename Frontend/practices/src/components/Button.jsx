import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({text, handler}) {

  console.log("mai render howaa.....");
  
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={handler} variant="contained">{text}</Button>
    </Stack>
  );
}
