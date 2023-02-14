import React from "react";

export default function Modal({ children, isOpened }) {
  return isOpened ? (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-200 to-gray-500 bg-noise bg-cover">
      <div className="flex items-center h-full justify-center">
        <div className="bg-white rounded p-5">{children}</div>
      </div>
    </div>
  ) : null;
}
