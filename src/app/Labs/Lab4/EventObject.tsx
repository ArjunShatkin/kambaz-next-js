"use client";

import { useState } from "react";

export default function EventObject() {
  // State to store a cleaned version of the event
  const [event, setEvent] = useState<Record<string, unknown> | null>(null);

  // Handle click and capture relevant event properties
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const safeEvent: Record<string, unknown> = {
      type: e.type, // Event type (click)
      target: (e.target as HTMLElement).outerHTML, // Outer HTML of element clicked
      currentTarget: (e.currentTarget as HTMLElement).outerHTML, // Current target element
      timeStamp: e.timeStamp, // Timestamp of event
      button: e.button, // Which mouse button was pressed
      clientX: e.clientX, // X coordinate in viewport
      clientY: e.clientY, // Y coordinate in viewport
      pageX: e.pageX, // X coordinate relative to page
      pageY: e.pageY, // Y coordinate relative to page
      screenX: e.screenX, // X coordinate on screen
      screenY: e.screenY, // Y coordinate on screen
      altKey: e.altKey, // Modifier keys
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      metaKey: e.metaKey,
    };

    setEvent(safeEvent);
  };

  return (
    <div id="wd-event-object" className="p-4">
      <h2>Event Object</h2>

      {/* Button to capture event */}
      <button
        onClick={handleClick}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>

      {/* Display the event object as formatted JSON */}
      <pre>{JSON.stringify(event, null, 2)}</pre>

      <hr />
    </div>
  );
}

// Notes:
// - Captures mouse event properties safely without using `any`
// - Replaces target with outerHTML to avoid circular references
// - Stores event details in state for display
// - JSON includes timestamp, coordinates, button, type, and modifier keys

