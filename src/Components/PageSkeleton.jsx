import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Container } from 'reactstrap';

export default function PageSkeleton() {
  return (
    <Container>
    <Stack spacing={1} sx={{ width: '100%', height: '100vh' }}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '2rem', width: '100%' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width="100%" height="30vh" />
      <Skeleton variant="rounded" width="100%" height="30vh" />
    </Stack>
    </Container>
  );
}
