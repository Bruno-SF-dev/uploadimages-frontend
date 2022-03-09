import { GlobalStyles } from "./styles/global";
import * as Styled from "./styles";

import { Upload } from "./components/upload";
import { FileList } from "./components/FileList";

function App() {
  return (
    <>
      <GlobalStyles />
      <Styled.Container>
        <Styled.Content>
          <Upload />
          <FileList />
        </Styled.Content>
      </Styled.Container>
    </>
  );
}

export default App;
