import { useRouteError } from 'react-router-dom';
import { Container } from '@mui/material';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <b>Oops!</b>
      <p>Sorry, an unexpected error has occurred.</p>
      <i>{error.statusText || error.message}</i>
    </Container>
  );
}
