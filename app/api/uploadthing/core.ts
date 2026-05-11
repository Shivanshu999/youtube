import { auth } from "@/auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    throw new UploadThingError("Unauthorized");
  }

  return session.user.email;
};

// FileRouter for your app
export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const userEmail = await handleAuth();

      if (!userEmail) {
        throw new UploadThingError("Unauthorized");
      }

      return { userEmail };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log(
        "Image upload complete for user:",
        metadata.userEmail,
      );

      console.log("Image URL:", file.ufsUrl);

      return {
        uploadedBy: metadata.userEmail,
        fileUrl: file.ufsUrl,
      };
    }),

  videoUploader: f({
    video: {
      maxFileSize: "256MB",
      maxFileCount: 1,
    },
  })
    .middleware(async () => {
      const userEmail = await handleAuth();

      if (!userEmail) {
        throw new UploadThingError("Unauthorized");
      }

      return { userEmail };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log(
        "Video upload complete for user:",
        metadata.userEmail,
      );

      console.log("Video URL:", file.ufsUrl);

      return {
        uploadedBy: metadata.userEmail,
        fileUrl: file.ufsUrl,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;