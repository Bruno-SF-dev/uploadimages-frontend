import Dropzone from "react-dropzone";

import * as Styled from "./styles";

const Upload = () => {
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <Styled.UploadMessage>Arraste arquivos aqui...</Styled.UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <Styled.UploadMessage type="error">
          Arquivo não suportado
        </Styled.UploadMessage>
      );
    }

    return (
      <Styled.UploadMessage type="success">
        Solte os arquivos aqui
      </Styled.UploadMessage>
    );
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={() => {}}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <Styled.DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
          className="dropzone"
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </Styled.DropContainer>
      )}
    </Dropzone>
  );
};

export { Upload };
