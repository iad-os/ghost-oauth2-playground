import { useUserInfo } from '@iad-os/react-ghost-auth';
import { Box, Stack, Typography } from '@mui/material';

const UserInfo = () => {
  const userInfo = useUserInfo<any>();

  return (
    <Stack>
      <Typography variant="h4">User info </Typography>
      <Box>
        <pre>{JSON.stringify(userInfo, null, 4)}</pre>
      </Box>
    </Stack>
  );
};

export default UserInfo;
