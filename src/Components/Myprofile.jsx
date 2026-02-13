import React, { useContext, useState } from "react";
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa";
import { AuthContext } from "./AuthContext/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function MyProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(user?.displayName || "");
  const [newPhoto, setNewPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async () => {

    // ✅ Validation
    if (!newName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }
    if (!newPhoto.trim()) {
      toast.error("Photo URL cannot be empty");
      return;
    }
    if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(newPhoto)) {
      toast.error("Enter a valid image URL (jpg, png, gif, webp)");
      return;
    }

    try {
      await updateUserProfile({
        displayName: newName,
        photoURL: newPhoto,
      });
      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md text-center border border-green-100">

        {/* Profile Image */}
        <div className="relative inline-block mb-5">
          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-600 object-cover mx-auto"
          />
          <button
            onClick={() => setEditMode(!editMode)}
            className="absolute bottom-1 right-1 bg-green-600 text-white p-2 rounded-full shadow-md hover:bg-green-700 transition"
          >
            <FaEdit size={14} />
          </button>
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-gray-800 flex justify-center items-center gap-2 mb-1">
          <FaUser className="text-green-600" />
          {user?.displayName || "No Name"}
        </h2>

        <p className="text-gray-600 flex justify-center items-center gap-2 mb-4">
          <FaEnvelope className="text-green-600" />
          {user?.email}
        </p>

        {/* Edit Profile Form */}
        {editMode && (
          <div className="bg-green-50 p-4 rounded-xl shadow-inner mb-4 space-y-3">
            {/* Name Input */}
            <input
              type="text"
              defaultValue={user?.displayName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="New Name"
              className="w-full border border-green-300 text-gray-800 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Photo URL Input */}
            <input
              type="text"
              defaultValue={user?.photoURL}
              onChange={(e) => setNewPhoto(e.target.value)}
              placeholder="New Photo URL"
              className="w-full border border-green-300 text-gray-800 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              onClick={handleUpdate}
              className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition"
            >
              Update Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
