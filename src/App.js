import { DataSourceWithRenderProps } from "./components/data-source-with-render-props";
import { UserInfo } from "./components/user-info";
import axios from "axios";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function App() {
  return (
    <>
      <DataSourceWithRenderProps
        getData={() => fetchData("/users/1")}
        render={(resource) => {
          <UserInfo user={resource} />;
        }}
      >
        <UserInfo />
      </DataSourceWithRenderProps>
    </>
  );
}

export default App;
