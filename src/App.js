import { checkProps } from "./components/check-props";
import { includeUser } from "./components/include-user";
import { UserInfoForm } from "./components/user-form";
import { UserInfo } from "./components/user-info";

const UserInfoWithUser = includeUser(UserInfo, "2");

function App() {
  return (
    <>
      <UserInfoForm />
    </>
  );
}

export default App;
