import { SVGProps } from "react";

const locketClosed = [
  <path
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    d="M13.275 19H9.151c-1.854-.032-3.33-1.599-3.3-3.5V12c-.017-1.574.997-2.963 2.474-3.39v-.46C8.275 6.463 9.568 5.053 11.213 5c1.645.053 2.937 1.463 2.888 3.15v.46c1.477.427 2.491 1.816 2.475 3.39v3.5c.03 1.901-1.447 3.468-3.3 3.5Z"
    clipRule="evenodd"
  />,
  <path
    fill="#000"
    d="M10.463 15.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.75a.75.75 0 0 0-1.5 0h1.5Zm1.94-4.416a.75.75 0 0 0 .395-1.448l-.394 1.448Zm-.627-.834v.75-.75Zm-4.125 0v.75-.75Zm-1.022-.614a.75.75 0 1 0 .394 1.448l-.394-1.448Zm3.834 7.614v-1.75h-1.5v1.75h1.5Zm2.335-7.614a3.878 3.878 0 0 0-1.023-.136l.002 1.5c.211 0 .422.028.627.084l.394-1.448Zm-1.022-.136H9.151v1.5h4.125v-1.5Zm-4.124 0c-.346 0-.69.046-1.023.136l.394 1.448c.205-.056.416-.084.627-.084l.002-1.5Z"
  />,
];

const locketOpen = [
  <path
    fill="#000"
    d="M9.346 15.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-1.75a.75.75 0 0 0-1.5 0h1.5Zm1.31-5.14a.75.75 0 0 0 1.5 0h-1.5Zm.75-.46h.75a.8.8 0 0 0-.001-.031l-.75.031ZM15.716 5l.036-.75a.75.75 0 0 0-.07 0l.035.75Zm2.81 3.15-.749-.031v.031h.75Zm-.75.46a.75.75 0 0 0 1.5 0h-1.5Zm-4.87 0 .22-.717a.662.662 0 0 0-.018-.005l-.202.722Zm-.804-.11v.75h.001V8.5Zm-4.014 0v.75-.75Zm-.803.11-.202-.722a.77.77 0 0 0-.02.005l.222.717ZM4.877 12h.75v-.014l-.75.014Zm0 3.5.75.022V15.5h-.75ZM8.088 19l-.023.75h.023V19Zm4.015 0v.75h.024l-.024-.75Zm3.212-3.5h-.75a.8.8 0 0 0 0 .022l.75-.022Zm0-3.5-.75-.014V12h.75Zm-4.47 3.5v-1.75h-1.5v1.75h1.5Zm2.81-6.89v-.46h-1.5v.46h1.5Zm0-.491c-.053-1.27.904-2.313 2.097-2.37l-.07-1.498c-2.053.097-3.61 1.87-3.526 3.93l1.499-.062Zm2.026-2.37c1.193.057 2.149 1.1 2.096 2.37l1.499.062c.085-2.059-1.472-3.832-3.524-3.93l-.071 1.498Zm2.095 2.401v.46h1.5v-.46h-1.5Zm-4.668-.262A3.717 3.717 0 0 0 12.1 7.75l.002 1.5c.203 0 .405.027.6.082l.405-1.444Zm-1.006-.138H8.088v1.5h4.014v-1.5Zm-4.013 0c-.34 0-.679.046-1.006.138l.404 1.444c.196-.055.398-.082.6-.082l.002-1.5Zm-1.025.143c-1.783.55-2.973 2.242-2.937 4.121l1.5-.028c-.024-1.233.755-2.313 1.879-2.66l-.442-1.433ZM4.127 12v3.5h1.5V12h-1.5Zm0 3.478c-.066 2.271 1.678 4.2 3.938 4.272l.047-1.5c-1.398-.044-2.529-1.248-2.486-2.728l-1.5-.044Zm3.961 4.272h4.015v-1.5H8.088v1.5Zm4.039 0c2.26-.072 4.004-2 3.937-4.272l-1.499.044c.043 1.48-1.088 2.684-2.485 2.728l.047 1.5Zm3.938-4.25V12h-1.5v3.5h1.5Zm0-3.486c.035-1.88-1.155-3.571-2.939-4.12l-.441 1.433c1.123.346 1.903 1.426 1.88 2.659l1.5.028Z"
  />,
];

const iconMap = {
  locketClosed,
  locketOpen,
};

export default iconMap;