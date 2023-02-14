import React from "react";

export default function TodoCard({ item }) {
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(
      () => setTimer(parseInt((Date.now() - item.time) / 1000)),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 p-4 rounded shadow-sm">
      <p className="mb-2">
        <span className="font-semibold">Title:</span> {item.title}
      </p>
      <p>
        <span className="font-semibold">Time Passed:</span> {timer}
      </p>
    </div>
  );
}
