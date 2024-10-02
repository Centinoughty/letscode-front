import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function FileEditor() {
  const router = useRouter();
  const token = useSelector((state: any) => state.auth.token);
  const { fileId } = router.query;
  const [fileName, setFileName] = useState<string>("");
  const [fileContent, setFileContent] = useState<string>("");

  useEffect(() => {
    if (!fileId) return;

    async function fetchFileContent() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/files/${fileId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setFileName(response.data.fileName);
        setFileContent(response.data.fileContent);
      } catch (error: any) {
        if (error.response.status === 403) {
          console.log("Not authorized");
        } else if (error.response.status === 404) {
          console.log("File not found");
        } else {
          console.log("Internal Server Error");
        }
      }
    }

    fetchFileContent();
  }, [fileId]);

  return (
    <>
      <p>{fileName}</p>
      <p>{fileContent}</p>
    </>
  );
}
