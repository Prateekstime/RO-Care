import React from 'react';

const NotificationOverlay = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-3xl p-4 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <span className="text-gray-600 font-semibold">Notifications</span>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {/* Notification List */}
        <div className="max-h-100 overflow-y-hidden space-y-3">
          <div className="break-words whitespace-normal">
            <p className="font-semibold text-xs text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
            <p className="text-sm text-gray-400 mt-1">09:30 AM</p>
          </div>

          <div className="break-words whitespace-normal">
            <p className="text-gray-700 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
            <p className="text-sm text-gray-400 mt-1">1 day ago</p>
          </div>

          <div className="break-words whitespace-normal">
            <p className="text-gray-700 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
            <p className="text-sm text-gray-400 mt-1">2 day ago</p>
          </div>

          <div className="break-words whitespace-normal">
            <p className="text-gray-700 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever.
            </p>
            <p className="text-sm text-gray-400 mt-1">2 day ago</p>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="mt-2 text-right">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-2 text-md rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NotificationOverlay;
