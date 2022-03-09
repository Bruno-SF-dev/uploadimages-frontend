import { useState, useEffect } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";
import { api } from "./services/api";

import { GlobalStyles } from "./styles/global";
import * as Styled from "./styles";

import { Upload } from "./components/upload";
import { FileList } from "./components/FileList";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await api.get("posts");

      const filesFormated = response.data.map((file) => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url,
      }));

      setUploadedFiles(filesFormated);
    };

    getPosts();
  }, []);

  // limpar o cache do browser
  useEffect(() => {
    return () => {
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [uploadedFiles]);

  const handleUploads = (files) => {
    const filesReceived = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    setUploadedFiles((prevState) => [...prevState, ...filesReceived]);
    filesReceived.forEach(processUpload);
  };

  const processUpload = async (fileReceived) => {
    try {
      // crio um objeto igual ao que o html cria pra enviar forms
      const data = new FormData();

      // crio um campo de name="file" e o adiciono ao objeto data
      data.append("file", fileReceived.file, fileReceived.name);

      const response = await api.post("posts", data, {
        // retorna o progresso da requisição
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round(e.loaded * 100) / e.total);

          updateFile(fileReceived.id, {
            progress,
          });
        },
      });

      updateFile(fileReceived.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url,
      });
    } catch (err) {
      updateFile(fileReceived.id, {
        error: true,
      });
    }
  };

  const updateFile = (id, data) => {
    setUploadedFiles((prevState) =>
      prevState.map((uploadedFile) => {
        if (id === uploadedFile.id) {
          return { ...uploadedFile, ...data };
        }

        return uploadedFile;
      }),
    );
  };

  const handleDelete = async (id) => {
    await api.delete(`posts/${id}`);

    setUploadedFiles((prevState) => prevState.filter((file) => file.id !== id));
  };

  return (
    <>
      <GlobalStyles />
      <Styled.Container>
        <Styled.Content>
          <Upload onUpload={handleUploads} />
          {uploadedFiles.length > 0 && (
            <FileList files={uploadedFiles} onDelete={handleDelete} />
          )}
        </Styled.Content>
      </Styled.Container>
    </>
  );
}

export default App;
