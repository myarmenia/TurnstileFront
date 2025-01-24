import React from 'react';

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={props.width || 15}
    height={props.height || 16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.6067 11.7424L12.509 9.50953C11.7598 8.71208 10.4862 9.03109 10.1865 10.0677C9.96175 10.7855 9.21257 11.1842 8.53831 11.0247C7.03996 10.626 5.01718 8.5526 4.64259 6.87796C4.41783 6.16023 4.86734 5.36278 5.5416 5.12358C6.51553 4.80461 6.81521 3.44895 6.06603 2.6515L3.96833 0.418659C3.36898 -0.139553 2.46997 -0.139553 1.94555 0.418659L0.522108 1.9338C-0.901331 3.52869 0.671944 7.75515 4.19308 11.5031C7.71422 15.2511 11.6849 17.0055 13.1832 15.4106L14.6067 13.8955C15.1311 13.2575 15.1311 12.3006 14.6067 11.7424Z"
      fill={props.color || '#fff'}
    />
  </svg>
);



export const PhoneAndMessageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={props.width || 34} height={props.height || 32} viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M12.2481 5.2184H32.4917L20.468 13.5973L12.2894 7.89786C12.6008 7.05029 12.6034 6.09225 12.2481 5.2184ZM6.95367 10.0815L9.90438 8.25522C10.7801 7.71324 11.0707 6.5569 10.5581 5.65431L7.89415 0.96407C7.62088 0.482839 7.20722 0.173265 6.67406 0.0509116C6.14082 -0.0715136 5.63657 0.0273098 5.18631 0.342459L0.328141 3.74257C-1.98435 12.0252 8.40752 29.9568 16.3775 32L21.7033 29.4233C22.1969 29.1845 22.5333 28.7899 22.6956 28.2593C22.8579 27.7287 22.801 27.2098 22.5276 26.7286L19.8637 22.0384C19.3511 21.1358 18.2206 20.8135 17.321 21.3134L14.2898 22.9978C11.2921 20.2877 7.76375 14.0756 6.95367 10.0815ZM33.962 6.29598L20.9488 15.3644C20.6443 15.5757 20.2531 15.5592 19.9701 15.3525L11.3309 9.33221C11.1646 9.48465 10.9846 9.62096 10.7933 9.73938L8.92701 10.8944C9.90752 14.1111 12.3337 18.3827 14.5839 20.8542L16.5011 19.7887C18.2141 18.8369 20.3678 19.4509 21.3439 21.1696L22.996 24.0783H32.6186C33.3784 24.0783 34 23.4464 34 22.674V6.62264C34.0001 6.51261 33.9873 6.40296 33.962 6.29598Z" fill={props.color || "#A0A0A0"} />
</svg>

);
