import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '@/store';
import { decrement, increment } from '@/store/counterSlice';

const Counter: FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <Stack
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        variant="contained"
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <Typography variant="h4" component="h4">
        <span>{count}</span>
      </Typography>
      <Button
        variant="outlined"
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </Stack>
  );
};

export default Counter;
