import axios from "axios";
import { useEffect, useState } from "react";
import FileCard from "../Cards/FileCard";
import { useSelector } from "react-redux";

interface File {
  _id: string;
  fileName: string;
  fileExtension: string;
  permission: string;
  modifiedDate: Date;
}

export default function Dashboard() {
  const [fileIds, setFileIds] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const token = useSelector((state: any) => state.auth.token);

  useEffect(() => {
    async function fetchFileIds() {
      try {
        const [userFiles, collabFiles] = await Promise.all([
          axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/files`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API}/files/collaborations`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          ),
        ]);

        const combinedFiles = [...userFiles.data, ...collabFiles.data];

        setFileIds(combinedFiles);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFileIds();
  }, []);

  useEffect(() => {
    async function fetchFiles() {
      try {
        if (!fileIds || fileIds.length === 0) return;

        const fileMetaData = fileIds.map(async (fileId: string) => {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_API}/files/${fileId}/metadata`,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          return response.data;
        });

        const fileMetadata = await Promise.all(fileMetaData);
        fileMetadata.sort(
          (a: File, b: File) =>
            new Date(b.modifiedDate).getTime() -
            new Date(a.modifiedDate).getTime()
        );

        setFiles(fileMetadata);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFiles();
  }, [fileIds]);

  return (
    <>
      <main className="my-10 flex justify-center items-center">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] grid grid-cols-5">
          {files.map((file) => (
            <FileCard
              key={file._id}
              _id={file._id}
              fileName={file.fileName}
              fileExtension={file.fileExtension}
              permission={file.permission}
            />
          ))}
        </div>
      </main>
    </>
  );
}
