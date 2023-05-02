// material-ui
import { Box, SxProps } from '@mui/material';
import { LinearProgress } from '@mui/material';

const mainSx: SxProps = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%',
};

const Loader: React.FC = () => {
  return (
    <Box sx={mainSx}>
      <LinearProgress color="primary" />
    </Box>
  );
};

export default Loader;
