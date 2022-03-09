import * as Styled from "./styles";

import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

const FileList = () => {
  return (
    <Styled.Container>
      <li>
        <Styled.FileInfo>
          <Styled.Preview src="https://uploadimages.s3.amazonaws.com/909fa27645e6e682b285b7b1ee25ce4d-img-test.jpg" />
          <div>
            <strong>profile.png</strong>
            <span>
              64kb <button onClick={() => {}}>Excluir</button>
            </span>
          </div>
        </Styled.FileInfo>

        <Styled.FileState>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: "#7159c1" },
            }}
            strokeWidth={10}
            value={60}
          />
          <a
            href="https://uploadimages.s3.amazonaws.com/909fa27645e6e682b285b7b1ee25ce4d-img-test.jpg"
            target="_blank"
          >
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />
        </Styled.FileState>
      </li>
    </Styled.Container>
  );
};

export { FileList };
