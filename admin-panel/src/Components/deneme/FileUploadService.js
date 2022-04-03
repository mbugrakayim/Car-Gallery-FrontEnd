import http from "./http-common";
class FileUploadService {
  upload( carId,file, onUploadProgress) {
    let formData = new FormData();
    formData.append("file", file );
    
    return http.post("/upload", carId ,formData, {
      headers: {
        "Content-Type":"multipart/form-data",
      },
      onUploadProgress,
    });
  }
  getFiles() {
    return http.get("/files");
  }
}
export default new FileUploadService();