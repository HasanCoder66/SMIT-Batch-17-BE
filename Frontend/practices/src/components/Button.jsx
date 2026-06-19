import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({text, signupHandler}) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={signupHandler} variant="contained">{text}</Button>
    </Stack>
  );
}
