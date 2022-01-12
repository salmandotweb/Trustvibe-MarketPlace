import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./UploadNFT.css";

function UploadNFT() {
  const [files, setFiles] = useState([]);
  console.log(files);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*,video/*,audio/*",
    maxSize: 50000000,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const images = files.map((file) => (
    <>
      {file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/gif" ||
      file.type === "image/svg+xml" ? (
        <div key={file.name}>
          <div className="nft_images_videos_container">
            <img src={file.preview} className="nft_image" alt="Preview" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  ));

  const videos = files.map((file) => (
    <>
      {file.type === "video/mp4" ||
      file.type === "audio/wav" ||
      file.type === "audio/mp3" ? (
        <div key={file.name}>
          <div className="nft_images_videos_container">
            <video src={file.preview} className="nft_video" autoPlay controls />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  ));

  return (
    <div className="upload_nft">
      {files < 1 ? (
        <>
          <div className="upload_nft_icon">
            <img src="images/upload-icon.svg" alt="Upload NFT" />
          </div>
          <p className="upload_nft_description">
            Please drop your file in this box or press the upload button
          </p>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <label for="file" class="upload_btn">
              Upload file
            </label>
          </div>
          <div className="upload_nft_footer">
            <p>Allowed media types: PNG, JPG, GIF, MP4 or MP3</p>
            <p>Max. file size 50 MB</p>
          </div>
        </>
      ) : (
        <>
          <div>
            {images}
            {videos}
          </div>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <label for="file" class="upload_change_btn">
              Change file
            </label>
          </div>
        </>
      )}
    </div>
  );
}

export default UploadNFT;
