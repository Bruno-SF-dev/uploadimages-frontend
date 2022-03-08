import { GlobalStyles } from "./styles/global";
import * as Styled from "./styles";

import { Upload } from "./components/upload";

function App() {
  return (
    <>
      <GlobalStyles />
      <Styled.Container>
        <Styled.Content>
          <Upload />
        </Styled.Content>
      </Styled.Container>
    </>
  );
}

export default App;
