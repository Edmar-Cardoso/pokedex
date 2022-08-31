import Context from "./context/Context";
import MainRoutes from "./routes/mainRoutes";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Context>
        <Global />
        <MainRoutes />
      </Context>
    </>
  );
}

export default App;
