import { write } from "@/store/reducers/notificationReducer";
import store from "@/store/store";
import Input from "@/util/Input";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface CreateFileProps {
  onClose: () => void;
}

export default function CreateFile({ onClose }: CreateFileProps) {
  const [fullFileName, setFullFileName] = useState<string>("");
  const token = useSelector((state: any) => state.auth.token);
  const dispatch = useDispatch<typeof store.dispatch>();

  function parseFileName(fullFileName: string) {
    const lastIndex = fullFileName.lastIndexOf(".");
    if (lastIndex === -1) {
      return { fileName: fullFileName, fileExtension: "" };
    }

    const fileName = fullFileName.slice(0, lastIndex);
    const fileExtension = fullFileName.slice(lastIndex + 1);
    return { fileName, fileExtension };
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const { fileName, fileExtension } = parseFileName(fullFileName);
      if (fileName === "" || fileExtension === "") {
        dispatch(write("Enter a valid filename with extension"));
        return;
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/files`,
        { fileName, fileExtension, fileContent: "" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 201) {
        dispatch(write("File created"));
        setFullFileName("");
        onClose();
      }
    } catch (error: any) {
      if (error.response?.status !== 409) {
        onClose();
      } else {
        setFullFileName("");
      }

      dispatch(write(error.response?.data?.message));
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mx-auto"
      >
        <h2 className="text-2xl font-medium text-center mb-4">
          Create a new file
        </h2>
        <div className="mb-4">
          <Input
            placeholder="Filename"
            type="text"
            value={fullFileName}
            setValue={setFullFileName}
          />
        </div>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-md duration-300 hover:bg-red-600 hover:shadow-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md duration-300 hover:bg-blue-600 hover:shadow-sm"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
