import { deleteUser } from "@/app/actions/delete-user";

export default function DeleteUserButton() {
  return (
    <form action={deleteUser}>
      <button
        type="submit"
        className="text-red-700 w-full text-left cursor-pointer"
      >
        Delete Account
      </button>
    </form>
  );
}