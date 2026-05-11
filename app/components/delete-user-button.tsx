import { deleteUser } from "@/app/actions/delete-user";

export default function DeleteUserButton() {
  return (
    <form action={deleteUser}>
      <button
        type="submit"
        className="bg-red-700 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition-all"
      >
        Delete Account
      </button>
    </form>
  );
}