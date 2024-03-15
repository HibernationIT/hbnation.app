interface IProps {
  className?: string;
}

export default function ArrowSvg({ className }: IProps) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.585786 7.54582C1.36683 6.81806 2.63317 6.81806 3.41421 7.54582L16 19.2729L28.5858 7.54582C29.3668 6.81806 30.6332 6.81806 31.4142 7.54582C32.1953 8.27358 32.1953 9.45351 31.4142 10.1813L18.8284 21.9084C17.2663 23.3639 14.7337 23.3639 13.1716 21.9084L0.585786 10.1813C-0.195262 9.45351 -0.195262 8.27358 0.585786 7.54582Z"
      />
    </svg>
  );
}
