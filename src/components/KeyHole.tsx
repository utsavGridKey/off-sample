export default function KeyholeShape() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 248 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 "
    >
      <defs>
        <mask id="hole-mask">
          <rect width="100%" height="100%" fill="white" />
          <g transform="translate(124 250) scale(0.15) translate(-124 -250)">
            <path
              fill="black"
              d="M124 0.5C192.207 0.5 247.5 55.8245 247.5 124.068C247.5 173.408 218.6 215.992 176.812 235.802L176.48 235.959L176.531 236.323L209.32 470.06L209.324 470.083L209.329 470.106C211.284 478.271 209.661 485.613 205.508 490.908C201.354 496.203 194.631 499.5 186.286 499.5H61.7139C53.4849 499.5 46.761 496.2 42.5781 490.9C38.3956 485.601 36.7191 478.259 38.6709 470.106L38.6758 470.083L38.6797 470.06L71.4688 236.323L71.5195 235.959L71.1875 235.802C29.3996 215.992 0.5 173.409 0.5 124.069L0.509766 122.473C1.36508 54.9639 56.3262 0.500213 124 0.5Z"
            />
          </g>
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="white" mask="url(#hole-mask)" />
    </svg>
  );
}
