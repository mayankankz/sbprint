import React from "react";
import "./menu.css";
const ContextMenu = ({
  x,
  y,
  onDelete,
  onBringForward,
  onSendBackward,
  onDuplicate,
  onSettings
}) => (
  <div
    className="wrapper"
    style={{ top: y, left: x, position: "absolute", zIndex: 1000 }}
  >
    <div className="content">
      <ul className="menu">
        <li className="item" onClick={onDelete}>
          <i className="uil uil-trash-alt"></i>
          <span>Delete</span>
        </li>
        <li className="item" onClick={onDuplicate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="black"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="M8 7c0-.943 0-1.414.293-1.707C8.586 5 9.057 5 10 5h1.764c.601 0 .902 0 1.144.15c.241.149.376.418.645.956L14.5 8H18c.943 0 1.414 0 1.707.293C20 8.586 20 9.057 20 10v3c0 .943 0 1.414-.293 1.707C19.414 15 18.943 15 18 15h-8c-.943 0-1.414 0-1.707-.293C8 14.414 8 13.943 8 13z"></path>
              <path d="M17 15v2.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C16.24 19 15.96 19 15.4 19H5.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4 18.24 4 17.96 4 17.4V9.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C4.76 8 5.04 8 5.6 8H8"></path>
            </g>
          </svg>
          <span>Dublicate</span>
        </li>
        <li className="item share">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m19.474 12.838 1.697.835a1 1 0 0 1 0 1.795L13.32 19.33a3 3 0 0 1-2.649 0L2.82 15.468a1 1 0 0 1 0-1.795l1.697-.835 1.698.836-1.821.896 6.94 3.415a1.5 1.5 0 0 0 1.324 0l6.94-3.415-1.822-.896 1.7-.836ZM13.32 4.673l7.852 3.864a1 1 0 0 1 0 1.794l-7.852 3.864a3 3 0 0 1-2.649 0L2.82 10.33a1 1 0 0 1 0-1.794l7.851-3.864a3 3 0 0 1 2.65 0Zm-1.986 8.176a1.5 1.5 0 0 0 1.324 0l6.94-3.415-6.94-3.415a1.5 1.5 0 0 0-1.324 0l-6.94 3.415 6.94 3.415Z"
              ></path>
            </svg>
            <span>Layer</span>
          </div>
          <i className="uil uil-angle-right"></i>
          <ul className="share-menu">
            <li className="item" onClick={onBringForward}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.75 5.82v8.43a.75.75 0 1 1-1.5 0V5.81L8.99 8.07A.75.75 0 1 1 7.93 7l2.83-2.83a1.75 1.75 0 0 1 2.47 0L16.06 7A.75.75 0 0 1 15 8.07l-2.25-2.25zM15 10.48l6.18 3.04a1 1 0 0 1 0 1.79l-7.86 3.86a3 3 0 0 1-2.64 0l-7.86-3.86a1 1 0 0 1 0-1.8L9 10.49v1.67L4.4 14.4l6.94 3.42c.42.2.9.2 1.32 0l6.94-3.42-4.6-2.26v-1.67z"
                ></path>
              </svg>
              <span>Bring to front </span>
            </li>
            <li className="item" onClick={onSendBackward}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.48 10.82 1.7.83a1 1 0 0 1 0 1.8L15 16.49V14.8l4.6-2.26-1.82-.9 1.7-.83zm-14.96 0-1.7.83a1 1 0 0 0 0 1.8L9 16.49V14.8l-4.6-2.26 1.82-.9-1.7-.83zm8.23 9.5L15 18.07a.75.75 0 0 1 1.06 1.06l-2.83 2.83c-.68.68-1.79.68-2.47 0l-2.83-2.83a.75.75 0 0 1 1.06-1.06l2.26 2.26V6.9a.75.75 0 1 1 1.5 0v13.43zM15 11.35V9.68l4.6-2.27L12.66 4c-.42-.2-.9-.2-1.32 0L4.4 7.4 9 9.68v1.67L2.82 8.3a1 1 0 0 1 0-1.8l7.86-3.86a3 3 0 0 1 2.64 0l7.86 3.87a1 1 0 0 1 0 1.79L15 11.35z"
                ></path>
              </svg>
              <span>Send to back</span>
            </li>
          </ul>
        </li>
      </ul>
      <div className="setting">
        <li className="item" onClick={onSettings}>
          <i className="uil uil-setting"></i>
          <span>Settings</span>
        </li>
      </div>
    </div>
  </div>
);

export default ContextMenu;
