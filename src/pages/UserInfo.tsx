import { useUserInfo } from '@iad-os/react-ghost-auth';
import MonacoEditor from '../components/MonacoEditor';

const UserInfo = () => {
  const userInfo = useUserInfo<any>();

  return (
    <>
      <span>
        <h2>User info </h2>
      </span>
      <MonacoEditor
        height="40vh"
        language="json"
        value={JSON.stringify(userInfo, null, 2)}
      />
    </>
  );
};

export default UserInfo;
