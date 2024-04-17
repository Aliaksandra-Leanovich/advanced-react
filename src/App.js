import { DataSource } from "./components/data-source";
import { UserInfo } from "./components/user-info";
import axios from "axios";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSource getData={() => fetchData("/users/1")} resourceName={"user"}>
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
