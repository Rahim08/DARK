import type { SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-left"
  | "arrow-up-right"
  | "play"
  | "close"
  | "menu"
  | "cube"
  | "users"
  | "camera"
  | "diamond"
  | "globe"
  | "pin"
  | "phone"
  | "mail"
  | "instagram"
  | "youtube"
  | "tiktok"
  | "linkedin"
  | "chevron-right";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="M3 12h17m0 0-6-6m6 6-6 6" />,
  "arrow-left": <path d="M21 12H4m0 0 6-6m-6 6 6 6" />,
  "arrow-up-right": <path d="M6 18 18 6m0 0H9m9 0v9" />,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  menu: <path d="M4 8h16M4 16h16" />,
  cube: (
    <>
      <path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9L12 3Z" />
      <path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.6-3.2 2.7-5 5.5-5s4.9 1.8 5.5 5" />
      <path d="M15.5 5.4a3.2 3.2 0 0 1 0 5.5M17.5 14.4c1.7.8 2.8 2.3 3.2 4.6" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2.5h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.4" />
    </>
  ),
  diamond: (
    <>
      <path d="M12 3 3 9l9 12L21 9l-9-6Z" />
      <path d="M3 9h18M12 3 8.5 9 12 21l3.5-12L12 3Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5s1.3-6.2 3.9-8.5Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.2 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15.8 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  phone: (
    <path d="M5.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12.5" rx="3.5" />
      <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" />
    </>
  ),
  tiktok: (
    <>
      <path d="M14.5 3c.4 2.4 1.9 4 4.5 4.3v3.2c-1.6 0-3-.5-4.5-1.5v6.2a5.7 5.7 0 1 1-5.7-5.7c.3 0 .7 0 1 .1v3.3a2.5 2.5 0 1 0 1.7 2.4V3h3Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 11v5.5M8 7.8v.2M12 16.5v-3a2 2 0 0 1 4 0v3" />
    </>
  ),
  "chevron-right": <path d="m9 5 7 7-7 7" />,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
