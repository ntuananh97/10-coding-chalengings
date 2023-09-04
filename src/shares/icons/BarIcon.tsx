function BarIcon({className = ""}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={20}
      viewBox="0 0 23 20"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33345 2.80739H21.6665C22.4034 2.80739 23 2.17995 23 1.40386C23 0.629707 22.4034 0 21.6665 0H1.33345C0.596627 0 0 0.629707 0 1.40386C0 2.18028 0.596627 2.80739 1.33345 2.80739ZM21.6665 8.59614H1.33345C0.596627 8.59614 0 9.22618 0 10C0 10.7767 0.596627 11.4039 1.33345 11.4039H21.6665C22.4034 11.4039 23 10.7764 23 10C23 9.22618 22.4034 8.59614 21.6665 8.59614ZM1.33345 17.1923H21.6665C22.4034 17.1923 23 17.8223 23 18.5961C23 19.3719 22.4034 20 21.6665 20H1.33345C0.596627 20 0 19.3729 0 18.5961C0 17.8223 0.596627 17.1923 1.33345 17.1923Z"
        fill="#3B4C7C"
      />
    </svg>
  );
}

export default BarIcon;