import { queryOptions } from "@tanstack/react-query";
import { postAuthRequest } from "@/utils/utils";
import { getAuthData } from "./Utils";
import { ImageBackend } from "@/utils/types";

export const ImageMethods = {
  uploadImages: async (
    formData: FormData,
    token: any,
  ): Promise<ImageBackend[]> => {
    return postAuthRequest(formData, "/upload", token);
  },
  getById: async (id: string, token: any): Promise<any> => {
    return getAuthData(`/upload/files/${id}`, token);
  },
  updateFileInfo: async (fileId: string | number, token: any): Promise<any> => {
    const form = new FormData();
    form.append(
      "fileInfo",
      JSON.stringify({
        caption: true,
      }),
    );
    return postAuthRequest(form, `/upload?id=${fileId}`, token);
  },
  updateMultipleFileInfo: async (
    fileIds: string[] | number[],
    token: any,
  ): Promise<any> => {
    const promises = fileIds.map((fileId) => {
      const form = new FormData();
      form.append(
        "fileInfo",
        JSON.stringify({
          caption: true,
        }),
      );
      return postAuthRequest(form, `/upload?id=${fileId}`, token);
    });
    return Promise.all(promises);
  },
};

export const ImageQueries = {
  upload: (formData: FormData, token: string) =>
    queryOptions({
      queryKey: ["upload", formData],
      queryFn: () => ImageMethods.uploadImages(formData, token),
    }),
  detail: (id: string, token: string) =>
    queryOptions({
      queryKey: ["image", id],
      queryFn: () => ImageMethods.getById(id, token),
    }),
};
