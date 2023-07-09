import { useRouteError } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return <h1>{error}</h1>;
}
