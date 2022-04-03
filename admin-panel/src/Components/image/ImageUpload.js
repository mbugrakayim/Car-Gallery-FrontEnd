import React, { useEffect, useState } from "react";
import FileUploadService from "../deneme/FileUploadService";

function ImageUpload() {
  const [currentFile, setCurrentFile] = useState(undefined);
  const [previewImage, setPreviewImage] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [imageInfo, setImageInfo] = useState([]);
  const selectFile = (e) => {
    setCurrentFile(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    setProgress(0);
    setMessage("");
  };
  const upload = () => {
    setProgress(0);
    FileUploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((res) => {
        setMessage(res.data.message);
        return FileUploadService.getFiles();
      })
      .then((files) => {
        setImageInfo(files.data);
      })
      .catch((err) => {
        setProgress(0);
        setMessage("Resim Yüklenemedi!");
        setCurrentFile(undefined);
      });
  };
  useEffect(() => {
    FileUploadService.getFiles().then((res) => {
      setImageInfo(res.data);
    });
  });
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" accept="image/*" onChange={selectFile} />
          </label>
        </div>
        <div className="col-4">
          <button
            className="btn btn-success btn-sm"
            disabled={!currentFile}
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>
      {currentFile && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >{progress}%</div>
        </div>
      )}
       {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}
        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div>
        )}
         <div className="card mt-3">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {imageInfo &&
              imageInfo.map((img, index) => (
                <li className="list-group-item" key={index}>
                  <a href={img.url}>{img.name}</a>
                </li>
              ))}
          </ul>
        </div>
    </div>
  );
}

export default ImageUpload;
