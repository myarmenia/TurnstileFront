import React from 'react';

export const TurnstileIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width={props.width || 48} height={props.height || 48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0H8.4375V8.4375H0V0ZM0 11.25V48H8.4375V11.25H0ZM2.8125 14.0625H5.625V16.875H2.8125V14.0625ZM2.8125 19.6875H5.625V22.5H2.8125V19.6875ZM31.0312 11.25C27.9296 11.25 25.4062 13.7734 25.4062 16.875V42.375H36.75V11.25H31.0312ZM16.9688 11.25H11.25V42.375H22.5938V16.875C22.5938 13.7734 20.0704 11.25 16.9688 11.25ZM39.5625 0H48V8.4375H39.5625V0ZM39.5625 11.25V48H48V11.25H39.5625ZM42.375 14.0625H45.1875V16.875H42.375V14.0625ZM42.375 19.6875H45.1875V22.5H42.375V19.6875Z" fill={props.color || '#5939F5'} />
</svg>

);
