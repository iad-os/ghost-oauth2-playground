// material-ui
import { Box, LinearProgress, styled } from '@mui/material';

const LoaderBox = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
});

const Loader = () => {
  return (
    <LoaderBox>
      <LinearProgress color="primary" />
    </LoaderBox>
  );
};

export default Loader;
