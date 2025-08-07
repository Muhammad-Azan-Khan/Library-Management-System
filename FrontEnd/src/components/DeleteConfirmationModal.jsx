import { Trash2 } from "lucide-react";

export default function DeleteConfirmationModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm  flex items-center justify-center z-40">
      <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex items-center gap-3 mb-4">
          <Trash2 className="text-red-500 w-6 h-6" />
          <h2 className="text-xl font-semibold">Confirm Deletion</h2>
        </div>
        <p className="text-gray-300 mb-6">
          Are you sure you want to delete this book? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
