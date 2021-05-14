import React from 'react';

const Logo = ({ color }) => {
  return (
    <svg
      width='auto'
      height='auto'
      viewBox='0 0 252 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.85 14.05L21.8 24.05C21.8 25.5167 22.0167 26.6167 22.45 27.35C22.9167 28.05 23.8667 28.4 25.3 28.4H37.95C39.4833 28.4333 40.25 29.6 40.25 31.9C40.25 33.6667 40.0333 34.95 39.6 35.75C39.1667 36.55 38.2833 36.9667 36.95 37C32.25 37.1333 27.6 37.2 23 37.2C18.4 37.2 12.5333 37.1667 5.4 37.1C4.2 37.1 3.21667 36.8167 2.45 36.25C1.71667 35.65 1.3 34.8333 1.2 33.8C0.933333 30.9 0.8 26.3333 0.8 20.1C0.8 13.8333 0.866667 9.61667 1 7.45C1.16667 5.25 1.48333 3.8 1.95 3.1C2.41667 2.36666 3.33333 2 4.7 2H18.1C19.5 2 20.4167 2.36666 20.85 3.1C21.3167 3.83333 21.6 5.01667 21.7 6.65C21.8 8.28333 21.85 10.75 21.85 14.05ZM47.6199 37C46.6866 37 45.8866 36.7 45.2199 36.1C44.5866 35.4667 44.1699 34.45 43.9699 33.05C43.8033 31.6167 43.7199 27.3667 43.7199 20.3C43.7199 13.2 43.8366 8.56666 44.0699 6.4C44.3366 3.6 45.5199 2.16667 47.6199 2.1C50.0199 2.03333 59.9699 2 77.4699 2C79.4366 2 80.4199 3.25 80.4199 5.75C80.4199 7.71667 79.5533 8.7 77.8199 8.7H66.8199C66.1199 8.7 65.5533 8.93333 65.1199 9.4C64.7199 9.86666 64.5199 10.4667 64.5199 11.2V14.8C64.5199 15.8 64.9699 16.3 65.8699 16.3H74.9699C75.5033 16.3 75.9033 16.35 76.1699 16.45C76.4699 16.55 76.7366 16.85 76.9699 17.35C77.2033 17.8167 77.3199 18.6 77.3199 19.7C77.3199 20.8 77.1199 21.5333 76.7199 21.9C76.3533 22.2667 75.7366 22.45 74.8699 22.45H66.7199C65.8866 22.45 65.3033 22.6667 64.9699 23.1C64.6699 23.5 64.5199 24.1333 64.5199 25V27.45C64.5199 28.8833 65.2033 29.6 66.5699 29.6H79.0199C79.6199 29.6 80.1533 29.7833 80.6199 30.15C81.0866 30.4833 81.3199 31.25 81.3199 32.45C81.3199 33.6167 81.0366 34.6667 80.4699 35.6C79.9033 36.5333 79.2366 37 78.4699 37H47.6199ZM101.607 38C98.7408 38 96.0574 37.6833 93.5574 37.05C91.0908 36.4167 89.3408 35.7833 88.3074 35.15C87.3074 34.5167 86.6408 34.0667 86.3074 33.8C85.4408 33.1 85.0074 32.1333 85.0074 30.9C85.0074 29.9333 85.1241 29.0167 85.3574 28.15C85.7908 26.5167 86.5741 25.7 87.7074 25.7C88.0741 25.7333 89.2408 26.1167 91.2074 26.85C93.2074 27.5833 94.7741 27.95 95.9074 27.95C97.6074 27.95 98.4574 27.2833 98.4574 25.95C98.4574 25.15 98.0408 24.4167 97.2074 23.75C96.3741 23.05 95.3574 22.3833 94.1574 21.75C92.9908 21.1167 91.8074 20.4 90.6074 19.6C89.4074 18.7667 88.3908 17.6333 87.5574 16.2C86.7241 14.7333 86.3074 13.0333 86.3074 11.1C86.3074 7.9 87.8741 5.4 91.0074 3.6C94.1408 1.76666 98.1908 0.849998 103.157 0.849998C108.124 0.849998 112.057 1.36666 114.957 2.4C117.891 3.4 119.357 4.8 119.357 6.6C119.357 7.9 119.057 9.05 118.457 10.05C117.857 11.0167 117.224 11.5 116.557 11.5C116.324 11.5 115.541 11.25 114.207 10.75C112.907 10.2167 111.724 9.95 110.657 9.95C108.557 9.95 107.507 10.7667 107.507 12.4C107.507 13.2 108.007 13.9333 109.007 14.6C110.007 15.2667 111.207 15.9167 112.607 16.55C114.041 17.15 115.474 17.8333 116.907 18.6C118.341 19.3667 119.557 20.4167 120.557 21.75C121.557 23.0833 122.057 24.7 122.057 26.6C122.057 28.5 121.441 30.2333 120.207 31.8C119.007 33.3667 117.407 34.5833 115.407 35.45C111.441 37.15 106.841 38 101.607 38ZM154.987 33.95C154.954 34.6833 154.637 35.3667 154.037 36C153.437 36.6 152.637 36.9333 151.637 37C149.737 37.1333 147.454 37.2 144.787 37.2C142.12 37.2 139.67 37.1333 137.437 37C136.437 36.9333 135.637 36.6 135.037 36C134.437 35.3667 134.12 34.6833 134.087 33.95C133.987 28.8833 133.937 24.5667 133.937 21C133.937 17.4 133.954 14.7667 133.987 13.1C133.987 11.8333 133.42 11.2 132.287 11.2H127.787C127.087 11.2 126.52 11.0333 126.087 10.7C125.654 10.3667 125.404 9.78333 125.337 8.95C125.304 8.11667 125.287 7.25 125.287 6.35C125.287 5.45 125.304 4.68333 125.337 4.05C125.404 3.38333 125.67 2.88333 126.137 2.55C126.637 2.18333 127.17 2 127.737 2C132.07 1.93333 137.937 1.9 145.337 1.9C152.737 1.9 158.037 1.93333 161.237 2C161.804 2.03333 162.32 2.21666 162.787 2.55C163.287 2.88333 163.554 3.38333 163.587 4.05C163.654 4.68333 163.687 5.43333 163.687 6.3C163.687 7.16667 163.67 8 163.637 8.8C163.537 10.3 162.72 11.05 161.187 11.05H156.687C155.554 11.05 154.987 11.6333 154.987 12.8C155.087 17 155.137 20.8 155.137 24.2C155.137 27.6 155.087 30.85 154.987 33.95ZM172.132 37C171.198 37 170.398 36.7 169.732 36.1C169.098 35.4667 168.682 34.45 168.482 33.05C168.315 31.6167 168.232 27.3667 168.232 20.3C168.232 13.2 168.348 8.56666 168.582 6.4C168.848 3.6 170.032 2.16667 172.132 2.1C174.532 2.03333 184.482 2 201.982 2C203.948 2 204.932 3.25 204.932 5.75C204.932 7.71667 204.065 8.7 202.332 8.7H191.332C190.632 8.7 190.065 8.93333 189.632 9.4C189.232 9.86666 189.032 10.4667 189.032 11.2V14.8C189.032 15.8 189.482 16.3 190.382 16.3H199.482C200.015 16.3 200.415 16.35 200.682 16.45C200.982 16.55 201.248 16.85 201.482 17.35C201.715 17.8167 201.832 18.6 201.832 19.7C201.832 20.8 201.632 21.5333 201.232 21.9C200.865 22.2667 200.248 22.45 199.382 22.45H191.232C190.398 22.45 189.815 22.6667 189.482 23.1C189.182 23.5 189.032 24.1333 189.032 25V27.45C189.032 28.8833 189.715 29.6 191.082 29.6H203.532C204.132 29.6 204.665 29.7833 205.132 30.15C205.598 30.4833 205.832 31.25 205.832 32.45C205.832 33.6167 205.548 34.6667 204.982 35.6C204.415 36.5333 203.748 37 202.982 37H172.132ZM231.219 12.45L231.319 21.7C231.319 22.3333 231.669 22.65 232.369 22.65C234.436 22.65 236.052 22.0833 237.219 20.95C238.419 19.7833 239.019 18.4167 239.019 16.85C239.019 15.2833 238.452 13.9333 237.319 12.8C236.219 11.6667 234.586 11.1 232.419 11.1C231.619 11.1 231.219 11.55 231.219 12.45ZM244.319 27.4C244.952 28.0667 247.202 30.5833 251.069 34.95C251.302 35.25 251.419 35.5167 251.419 35.75C251.419 36.6167 251.036 37.05 250.269 37.05C248.502 37.0833 246.719 37.1 244.919 37.1C243.152 37.1 241.386 37.0833 239.619 37.05C238.652 37.05 237.769 36.6667 236.969 35.9L232.669 29.4C232.502 29.2 232.302 29.0667 232.069 29C231.536 28.8 231.269 29.0167 231.269 29.65V34.75C231.269 36.1833 230.319 36.95 228.419 37.05C226.552 37.15 224.502 37.2 222.269 37.2C220.036 37.2 217.336 37.1167 214.169 36.95C213.202 36.8833 212.419 36.55 211.819 35.95C211.252 35.35 210.919 34.6667 210.819 33.9C210.552 30.9667 210.419 26.3667 210.419 20.1C210.419 13.8 210.519 9.21667 210.719 6.35C210.919 3.48333 212.369 2.03333 215.069 2C217.602 1.96666 221.052 1.95 225.419 1.95C229.786 1.95 233.402 1.98333 236.269 2.05C240.402 2.11666 243.786 3.65 246.419 6.65C249.052 9.65 250.369 13.0333 250.369 16.8C250.369 19 249.852 21.0333 248.819 22.9C247.819 24.7667 246.319 26.2667 244.319 27.4Z'
        fill={color}
      />
    </svg>
  );
};

export default Logo;
