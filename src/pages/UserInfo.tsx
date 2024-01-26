import { useUserInfo } from '@iad-os/react-ghost-auth';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import Editor from '@monaco-editor/react';

const UserInfo = () => {
  const userInfo = useUserInfo<any>();

  const { palette } = useTheme();

  return (
    <Stack>
      <Typography variant="h4">User info </Typography>
      <Box>
        <Editor
          height={'80vh'}
          width={'100%'}
          language="json"
          value={JSON.stringify(userInfo, null, 4)}
          theme={palette.mode === 'dark' ? 'vs-dark' : 'light'}
          options={{ domReadOnly: true, readOnly: true }}
        />
      </Box>
    </Stack>
  );
};

export default UserInfo;
