import { FunctionalComponent } from "preact";
import { IconProps } from "./linkedin";

export const User: FunctionalComponent<IconProps> = ({ className }) => {
  return (
    <svg className={className} width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_25_7365)">
        <path d="M10.9813 13C12.6455 13 14.2416 12.3415 15.4184 11.1694C16.5952 9.99732 17.2563 8.4076 17.2563 6.75C17.2563 5.0924 16.5952 3.50269 15.4184 2.33058C14.2416 1.15848 12.6455 0.5 10.9813 0.5C9.31707 0.5 7.72099 1.15848 6.54419 2.33058C5.36739 3.50269 4.70627 5.0924 4.70627 6.75C4.70627 8.4076 5.36739 9.99732 6.54419 11.1694C7.72099 12.3415 9.31707 13 10.9813 13ZM8.74092 15.3438C3.91209 15.3438 0 19.2402 0 24.0498C0 24.8506 0.652015 25.5 1.456 25.5H20.5066C21.3106 25.5 21.9626 24.8506 21.9626 24.0498C21.9626 19.2402 18.0505 15.3438 13.2217 15.3438H8.74092Z" />
      </g>
      <defs>
        <clipPath id="clip0_25_7365">
          <rect width="21.9626" height="25" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>

  )
}