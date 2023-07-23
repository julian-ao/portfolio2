import { FunctionalComponent } from "preact";

export interface IconProps {
  className?: string;
}

export const Linkedin: FunctionalComponent<IconProps> = ({ className }) => {
  return (
    <svg className={className} width="36" height="41" viewBox="0 0 36 41" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_20_19472)">
        <path d="M8.04303 35.5002H0.789798V12.133H8.04303V35.5002ZM4.41251 8.94551C2.09316 8.94551 0.211914 7.02363 0.211914 4.70332C0.211914 3.58879 0.654475 2.51991 1.44224 1.73181C2.23 0.943722 3.29844 0.500977 4.41251 0.500977C5.52657 0.500977 6.59501 0.943722 7.38277 1.73181C8.17054 2.51991 8.6131 3.58879 8.6131 4.70332C8.6131 7.02363 6.73107 8.94551 4.41251 8.94551ZM35.1895 35.5002H27.9519V24.1252C27.9519 21.4143 27.8973 17.9377 24.1808 17.9377C20.4097 17.9377 19.8319 20.883 19.8319 23.9299V35.5002H12.5864V12.133H19.5429V15.3205H19.6444C20.6128 13.4846 22.9782 11.5471 26.5072 11.5471C33.8479 11.5471 35.1973 16.383 35.1973 22.6643V35.5002H35.1895Z" />
      </g>
      <defs>
        <clipPath id="clip0_20_19472">
          <rect width="34.9854" height="40" fill="white" transform="translate(0.211914 0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}