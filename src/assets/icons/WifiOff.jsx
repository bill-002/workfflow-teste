import { PropTypes } from "prop-types";

export function WifiOff({ color, ...rest}) {
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0586 4.9406C14.7255 4.64746 13.3646 4.4996 11.9996 4.4996C7.88815 4.4996 4.08415 5.8226 0.99415 8.0681C0.909917 8.13105 0.840332 8.21151 0.790188 8.30394C0.740044 8.39637 0.710534 8.49857 0.703691 8.6035C0.696847 8.70843 0.712833 8.8136 0.750547 8.91176C0.788261 9.00992 0.846807 9.09874 0.92215 9.1721C1.05355 9.30068 1.22614 9.37871 1.40946 9.39243C1.59279 9.40616 1.77508 9.35468 1.92415 9.2471C4.85696 7.13076 8.383 5.99426 11.9996 5.9996C12.9456 5.9996 13.8716 6.0736 14.7776 6.2216L16.0586 4.9406ZM11.9996 8.9996C9.14215 8.9996 6.47965 9.8396 4.25065 11.2886C4.16148 11.3488 4.08692 11.4282 4.03247 11.521C3.97802 11.6137 3.94504 11.7175 3.93598 11.8247C3.92691 11.9319 3.94199 12.0398 3.98009 12.1404C4.01819 12.241 4.07835 12.3318 4.15615 12.4061C4.28396 12.5308 4.45036 12.6084 4.62807 12.6261C4.80578 12.6439 4.98423 12.6006 5.13415 12.5036C6.7252 11.4841 8.52409 10.8332 10.3991 10.5986L11.9996 8.9996ZM15.8936 11.1056L17.0711 9.9281C18.0181 10.2901 18.9106 10.7436 19.7486 11.2886C19.8374 11.3491 19.9115 11.4287 19.9656 11.5214C20.0197 11.6142 20.0525 11.7179 20.0616 11.8249C20.0706 11.9319 20.0557 12.0396 20.0179 12.1401C19.9801 12.2407 19.9204 12.3315 19.8431 12.4061C19.7153 12.5308 19.5489 12.6084 19.3712 12.6261C19.1935 12.6439 19.0151 12.6006 18.8651 12.5036C17.9395 11.9116 16.9413 11.4417 15.8951 11.1056H15.8936ZM11.9996 14.9996L13.3991 13.6001C14.451 13.7519 15.471 14.0747 16.4186 14.5556C16.8461 14.7731 16.9076 15.3416 16.5686 15.6806L16.5461 15.7031C16.4267 15.8186 16.274 15.8937 16.1096 15.9179C15.9452 15.9421 15.7774 15.9142 15.6296 15.8381C14.4994 15.2855 13.2578 14.9987 11.9996 14.9996ZM19.3571 7.6421L20.4776 6.5216C21.3636 6.9726 22.2061 7.4876 23.0051 8.0666C23.0895 8.12965 23.1592 8.21028 23.2094 8.3029C23.2595 8.39553 23.289 8.49794 23.2957 8.60307C23.3024 8.70819 23.2862 8.81352 23.2482 8.91176C23.2102 9.01001 23.1513 9.09883 23.0756 9.1721C22.9443 9.30068 22.7717 9.37871 22.5883 9.39243C22.405 9.40616 22.2227 9.35468 22.0736 9.2471C21.2191 8.63023 20.3098 8.09299 19.3571 7.6421ZM13.5296 17.6696C13.8867 17.8796 13.8836 18.3656 13.5896 18.6596L12.5291 19.7186C12.3885 19.8592 12.1978 19.9382 11.9989 19.9382C11.8 19.9382 11.6093 19.8592 11.4686 19.7186L10.4081 18.6581C10.1156 18.3656 10.1126 17.8811 10.4681 17.6681C10.9318 17.3936 11.4608 17.249 11.9996 17.2496C12.5606 17.2496 13.0826 17.4026 13.5296 17.6696ZM20.0621 2.8121C20.2113 2.66291 20.4137 2.5791 20.6246 2.5791C20.8356 2.5791 21.038 2.66291 21.1871 2.8121C21.3363 2.96128 21.4201 3.16362 21.4201 3.3746C21.4201 3.58557 21.3363 3.78791 21.1871 3.9371L5.06215 20.0621C4.98828 20.136 4.90059 20.1946 4.80407 20.2345C4.70756 20.2745 4.60412 20.2951 4.49965 20.2951C4.39518 20.2951 4.29174 20.2745 4.19523 20.2345C4.09871 20.1946 4.01102 20.136 3.93715 20.0621C3.86328 19.9882 3.80469 19.9005 3.76471 19.804C3.72473 19.7075 3.70415 19.6041 3.70415 19.4996C3.70415 19.3951 3.72473 19.2917 3.76471 19.1952C3.80469 19.0987 3.86328 19.011 3.93715 18.9371L20.0621 2.8121Z"
        fill={color}
      />
    </svg>
  )
}

WifiOff.propTypes = {
  color: PropTypes.string
}