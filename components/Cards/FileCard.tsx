import { useRouter } from "next/router";
import { FaEye, FaPencil } from "react-icons/fa6";

interface FileCardProps {
  _id: string;
  fileName: string;
  fileExtension: string;
  permission: string;
}

export default function FileCard(file: FileCardProps) {
  const router = useRouter();

  function handleFileClick() {
    router.push(`/files/${file._id}`);
  }

  return (
    <>
      <button
        onClick={handleFileClick}
        className="border rounded border-black p-3 w-[140px] h-[150px] m-2 flex flex-col justify-center items-center text-center duration-300 hover:scale-[0.99] hover:shadow-md"
      >
        <div className="mb-2 w-full h-full flex justify-center items-center">
          <p className="text-2xl text-gray-500">
            {file.permission === "w" ? (
              <FaPencil className="text-blue-500" />
            ) : (
              <FaEye className="text-green-500" />
            )}
          </p>
        </div>
        <h3 className="flex-grow font-bold text-lg text-gray-800">
          {file.fileName}.{file.fileExtension}
        </h3>
      </button>
    </>
  );
}
