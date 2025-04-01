import { useUserInfo } from '@iad-os/react-ghost-auth';
import { Editor } from '@monaco-editor/react';
import { Stack, Typography, Box, useTheme } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/private/users')({
  component: RouteComponent,
});

function RouteComponent() {
  const userInfo = useUserInfo();

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
}
