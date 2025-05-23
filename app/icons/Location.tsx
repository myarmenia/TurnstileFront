import React from 'react';

export const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={props.width || 16}
    height={props.height || 22}
    viewBox="0 0 16 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 0C3.58878 0 0 3.57423 0 7.96753C0 13.4198 7.15922 21.4239 7.46403 21.762C7.75033 22.0796 8.25019 22.079 8.53597 21.762C8.84078 21.4239 16 13.4198 16 7.96753C15.9999 3.57423 12.4112 0 8 0ZM8 11.9762C5.7806 11.9762 3.97504 10.1779 3.97504 7.96753C3.97504 5.75713 5.78065 3.95889 8 3.95889C10.2194 3.95889 12.0249 5.75717 12.0249 7.96758C12.0249 10.178 10.2194 11.9762 8 11.9762Z"
      fill={props.color || '#fff'}
    />
  </svg>
);
