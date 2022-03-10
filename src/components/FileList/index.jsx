import * as Styled from "./styles";

import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";

const FileList = ({ files, onDelete }) => {
  return (
    <Styled.Container>
      {files.map((file) => (
        <li key={file.id}>
          <Styled.FileInfo>
            <Styled.Preview src={file.preview} />
            <div>
              <strong>{file.name}</strong>
              <span>
                {file.readableSize}
                {file.uploaded && (
                  <button onClick={() => onDelete(file.id)}>Excluir</button>
                )}
              </span>
            </div>
          </Styled.FileInfo>

          <Styled.FileState>
            {!file.uploaded && !file.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: "#7159c1" },
                }}
                strokeWidth={10}
                value={file.progress}
              />
            )}
            {file.url && (
              <a href={file.url} target="_blank">
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}
            {file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {file.error && <MdError size={24} color="#e57878" />}
          </Styled.FileState>
        </li>
      ))}
    </Styled.Container>
  );
};

export { FileList };
