import classNames from 'classnames';
import type { FC, SVGProps } from 'react';

export const LogoLight: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="130"
    height="46"
    viewBox="0 0 130 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1604_15)">
      <circle cx="22.5" cy="23.5" r="22.5" fill="#1F2937" />
      <g filter="url(#filter0_i_1604_15)">
        <path
          d="M13 14H19C20.0609 14 21.0783 14.4214 21.8284 15.1716C22.5786 15.9217 23 16.9391 23 18V32C23 31.2044 22.6839 30.4413 22.1213 29.8787C21.5587 29.3161 20.7956 29 20 29H13V14Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 14H27C25.9391 14 24.9217 14.4214 24.1716 15.1716C23.4214 15.9217 23 16.9391 23 18V32C23 31.2044 23.3161 30.4413 23.8787 29.8787C24.4413 29.3161 25.2044 29 26 29H33V14Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M64.1548 10.6378C64.098 10.0649 63.8542 9.61979 63.4233 9.30256C62.9924 8.98532 62.4077 8.8267 61.669 8.8267C61.1671 8.8267 60.7434 8.89773 60.3977 9.03977C60.0521 9.17708 59.7869 9.36884 59.6023 9.61506C59.4223 9.86127 59.3324 10.1406 59.3324 10.4531C59.3229 10.7135 59.3774 10.9408 59.4957 11.1349C59.6188 11.3291 59.7869 11.4972 60 11.6392C60.2131 11.7765 60.4593 11.8973 60.7386 12.0014C61.018 12.1009 61.3163 12.1861 61.6335 12.2571L62.9403 12.5696C63.5748 12.7116 64.1572 12.901 64.6875 13.1378C65.2178 13.3745 65.6771 13.6657 66.0653 14.0114C66.4536 14.357 66.7543 14.7642 66.9673 15.233C67.1851 15.7017 67.2964 16.2391 67.3011 16.8452C67.2964 17.7353 67.0691 18.5071 66.6193 19.1605C66.1742 19.8092 65.5303 20.3134 64.6875 20.6733C63.8494 21.0284 62.8385 21.206 61.6548 21.206C60.4806 21.206 59.4579 21.026 58.5866 20.6662C57.7202 20.3063 57.0431 19.7737 56.5554 19.0682C56.0724 18.358 55.8191 17.4796 55.7955 16.4332H58.7713C58.8045 16.9209 58.9441 17.3281 59.1903 17.6548C59.4413 17.9768 59.7751 18.2206 60.1918 18.3864C60.6132 18.5473 61.089 18.6278 61.6193 18.6278C62.1402 18.6278 62.5923 18.5521 62.9759 18.4006C63.3641 18.2491 63.6648 18.0384 63.8778 17.7685C64.0909 17.4986 64.1974 17.1884 64.1974 16.8381C64.1974 16.5114 64.1004 16.2367 63.9062 16.0142C63.7169 15.7917 63.4375 15.6023 63.0682 15.446C62.7036 15.2898 62.2562 15.1477 61.7259 15.0199L60.142 14.6222C58.9157 14.3239 57.9474 13.8575 57.2372 13.223C56.527 12.5885 56.1742 11.7339 56.179 10.6591C56.1742 9.77841 56.4086 9.009 56.8821 8.35085C57.3603 7.69271 58.0161 7.17898 58.8494 6.80966C59.6828 6.44034 60.6297 6.25568 61.6903 6.25568C62.7699 6.25568 63.7121 6.44034 64.517 6.80966C65.3267 7.17898 65.9564 7.69271 66.4062 8.35085C66.8561 9.009 67.0881 9.77131 67.1023 10.6378H64.1548ZM74.2418 21.2131C73.1244 21.2131 72.1632 20.9763 71.3583 20.5028C70.5581 20.0246 69.9426 19.3617 69.5117 18.5142C69.0856 17.6667 68.8725 16.6913 68.8725 15.5881C68.8725 14.4706 69.0879 13.4905 69.5188 12.6477C69.9544 11.8002 70.5723 11.1397 71.3725 10.6662C72.1727 10.188 73.1244 9.94886 74.2276 9.94886C75.1793 9.94886 76.0127 10.1217 76.7276 10.4673C77.4426 10.813 78.0084 11.2983 78.4251 11.9233C78.8417 12.5483 79.0714 13.2822 79.114 14.125H76.2589C76.1784 13.5805 75.9653 13.1425 75.6197 12.8111C75.2788 12.4749 74.8313 12.3068 74.2773 12.3068C73.8086 12.3068 73.399 12.4347 73.0487 12.6903C72.703 12.9413 72.4331 13.3082 72.239 13.7912C72.0449 14.2741 71.9478 14.8589 71.9478 15.5455C71.9478 16.2415 72.0425 16.8333 72.2319 17.321C72.426 17.8087 72.6983 18.1804 73.0487 18.4361C73.399 18.6918 73.8086 18.8196 74.2773 18.8196C74.623 18.8196 74.9331 18.7486 75.2077 18.6065C75.4871 18.4645 75.7167 18.2585 75.8967 17.9886C76.0813 17.714 76.2021 17.3849 76.2589 17.0014H79.114C79.0666 17.8348 78.8394 18.5687 78.4322 19.2031C78.0297 19.8329 77.4734 20.3253 76.7631 20.6804C76.0529 21.0355 75.2125 21.2131 74.2418 21.2131ZM84.0767 14.6932V21H81.0511V6.45455H83.9915V12.0156H84.1193C84.3655 11.3717 84.7633 10.8674 85.3125 10.5028C85.8617 10.1335 86.5507 9.94886 87.3793 9.94886C88.1368 9.94886 88.7973 10.1146 89.3608 10.446C89.929 10.7727 90.3693 11.2438 90.6818 11.8594C90.9991 12.4702 91.1553 13.2017 91.1506 14.054V21H88.125V14.5938C88.1297 13.9214 87.9593 13.3982 87.6136 13.0241C87.2727 12.6501 86.7945 12.4631 86.179 12.4631C85.767 12.4631 85.4025 12.5507 85.0852 12.7259C84.7727 12.901 84.5265 13.1567 84.3466 13.4929C84.1714 13.8243 84.0814 14.2244 84.0767 14.6932ZM98.4606 21.2131C97.3574 21.2131 96.4033 20.9787 95.5984 20.5099C94.7982 20.0365 94.1803 19.3783 93.7447 18.5355C93.3091 17.688 93.0913 16.7055 93.0913 15.5881C93.0913 14.4612 93.3091 13.4763 93.7447 12.6335C94.1803 11.786 94.7982 11.1278 95.5984 10.6591C96.4033 10.1856 97.3574 9.94886 98.4606 9.94886C99.5638 9.94886 100.516 10.1856 101.316 10.6591C102.121 11.1278 102.741 11.786 103.176 12.6335C103.612 13.4763 103.83 14.4612 103.83 15.5881C103.83 16.7055 103.612 17.688 103.176 18.5355C102.741 19.3783 102.121 20.0365 101.316 20.5099C100.516 20.9787 99.5638 21.2131 98.4606 21.2131ZM98.4748 18.8693C98.9767 18.8693 99.3957 18.7273 99.7319 18.4432C100.068 18.1544 100.321 17.7614 100.492 17.2642C100.667 16.767 100.755 16.2012 100.755 15.5668C100.755 14.9323 100.667 14.3665 100.492 13.8693C100.321 13.3722 100.068 12.9792 99.7319 12.6903C99.3957 12.4015 98.9767 12.2571 98.4748 12.2571C97.9682 12.2571 97.542 12.4015 97.1964 12.6903C96.8555 12.9792 96.5974 13.3722 96.4222 13.8693C96.2518 14.3665 96.1665 14.9323 96.1665 15.5668C96.1665 16.2012 96.2518 16.767 96.4222 17.2642C96.5974 17.7614 96.8555 18.1544 97.1964 18.4432C97.542 18.7273 97.9682 18.8693 98.4748 18.8693ZM108.823 6.45455V21H105.797V6.45455H108.823ZM114.357 21.206C113.661 21.206 113.041 21.0852 112.496 20.8438C111.952 20.5975 111.521 20.2353 111.204 19.7571C110.891 19.2741 110.735 18.6728 110.735 17.9531C110.735 17.3471 110.846 16.8381 111.069 16.4261C111.291 16.0142 111.594 15.6828 111.978 15.4318C112.362 15.1809 112.797 14.9915 113.285 14.8636C113.777 14.7358 114.293 14.6458 114.833 14.5938C115.468 14.5275 115.979 14.4659 116.367 14.4091C116.755 14.3475 117.037 14.2576 117.212 14.1392C117.388 14.0208 117.475 13.8456 117.475 13.6136V13.571C117.475 13.1212 117.333 12.7732 117.049 12.527C116.77 12.2808 116.372 12.1577 115.856 12.1577C115.311 12.1577 114.878 12.2784 114.556 12.5199C114.234 12.7566 114.021 13.0549 113.917 13.4148L111.119 13.1875C111.261 12.5246 111.54 11.9517 111.957 11.4688C112.373 10.9811 112.911 10.607 113.569 10.3466C114.232 10.0814 114.999 9.94886 115.87 9.94886C116.476 9.94886 117.056 10.0199 117.61 10.1619C118.169 10.304 118.664 10.5241 119.094 10.8224C119.53 11.1207 119.873 11.5043 120.124 11.973C120.375 12.437 120.501 12.9934 120.501 13.642V21H117.631V19.4872H117.546C117.371 19.8281 117.137 20.1288 116.843 20.3892C116.549 20.6449 116.197 20.8461 115.785 20.9929C115.373 21.1349 114.897 21.206 114.357 21.206ZM115.224 19.1179C115.669 19.1179 116.062 19.0303 116.403 18.8551C116.744 18.6752 117.011 18.4337 117.205 18.1307C117.399 17.8277 117.496 17.4844 117.496 17.1009V15.9432C117.402 16.0047 117.272 16.0616 117.106 16.1136C116.945 16.161 116.763 16.206 116.559 16.2486C116.355 16.2865 116.152 16.322 115.948 16.3551C115.745 16.3835 115.56 16.4096 115.394 16.4332C115.039 16.4853 114.729 16.5682 114.464 16.6818C114.199 16.7955 113.993 16.9493 113.846 17.1435C113.699 17.3329 113.626 17.5696 113.626 17.8537C113.626 18.2656 113.775 18.5805 114.073 18.7983C114.376 19.0114 114.76 19.1179 115.224 19.1179ZM122.848 21V10.0909H125.781V11.9943H125.895C126.094 11.3172 126.428 10.8059 126.896 10.4602C127.365 10.1098 127.905 9.93466 128.516 9.93466C128.667 9.93466 128.83 9.94413 129.006 9.96307C129.181 9.98201 129.335 10.008 129.467 10.0412V12.7259C129.325 12.6832 129.129 12.6454 128.878 12.6122C128.627 12.5791 128.397 12.5625 128.189 12.5625C127.744 12.5625 127.346 12.6596 126.996 12.8537C126.65 13.0431 126.375 13.3082 126.172 13.6491C125.973 13.9901 125.874 14.383 125.874 14.8281V21H122.848Z"
        fill="black"
      />
      <path
        d="M63.5781 29.348C63.5099 28.7429 63.2287 28.2741 62.7344 27.9418C62.2401 27.6051 61.6179 27.4368 60.8679 27.4368C60.331 27.4368 59.8665 27.522 59.4744 27.6925C59.0824 27.8587 58.7777 28.0888 58.5604 28.3828C58.3473 28.6726 58.2408 29.0028 58.2408 29.3736C58.2408 29.6847 58.3132 29.9531 58.4581 30.179C58.6072 30.4048 58.8011 30.5945 59.0398 30.7479C59.2827 30.897 59.5426 31.0227 59.8196 31.125C60.0966 31.223 60.3629 31.304 60.6186 31.3679L61.897 31.7003C62.3146 31.8026 62.7429 31.9411 63.1818 32.1158C63.6207 32.2905 64.0277 32.5206 64.4027 32.8061C64.7777 33.0916 65.0803 33.4453 65.3104 33.8672C65.5447 34.2891 65.6619 34.794 65.6619 35.3821C65.6619 36.1236 65.4702 36.782 65.0866 37.3572C64.7074 37.9325 64.1555 38.3864 63.4311 38.7188C62.7109 39.0511 61.8395 39.2173 60.8168 39.2173C59.8366 39.2173 58.9886 39.0618 58.2727 38.7507C57.5568 38.4396 56.9964 37.9986 56.5916 37.4276C56.1868 36.8523 55.9631 36.1705 55.9205 35.3821H57.902C57.9403 35.8551 58.0938 36.2493 58.3622 36.5646C58.6349 36.8757 58.9822 37.108 59.4041 37.2614C59.8303 37.4105 60.2969 37.4851 60.804 37.4851C61.3622 37.4851 61.8587 37.3977 62.2933 37.223C62.7322 37.044 63.0774 36.7969 63.3288 36.4815C63.5803 36.1619 63.706 35.7891 63.706 35.3629C63.706 34.9751 63.5952 34.6577 63.3736 34.4105C63.1563 34.1634 62.8601 33.9588 62.4851 33.7969C62.1143 33.6349 61.6946 33.4922 61.2259 33.3686L59.679 32.9467C58.6307 32.6612 57.7997 32.2415 57.1861 31.6875C56.5767 31.1335 56.272 30.4006 56.272 29.4886C56.272 28.7344 56.4766 28.076 56.8857 27.5135C57.2947 26.951 57.8487 26.5142 58.5476 26.2031C59.2464 25.8878 60.0348 25.7301 60.9126 25.7301C61.799 25.7301 62.581 25.8857 63.2585 26.1967C63.9403 26.5078 64.4773 26.9361 64.8693 27.4815C65.2614 28.0227 65.4659 28.6449 65.483 29.348H63.5781ZM74.0882 34.9283V29.1818H76.0059V39H74.1266V37.2997H74.0243C73.7985 37.8239 73.4363 38.2607 72.9377 38.6101C72.4434 38.9553 71.8276 39.1278 71.0904 39.1278C70.4597 39.1278 69.9015 38.9893 69.4157 38.7124C68.9341 38.4311 68.5549 38.0156 68.2779 37.4659C68.0051 36.9162 67.8688 36.2365 67.8688 35.4268V29.1818H69.78V35.1967C69.78 35.8658 69.9654 36.3984 70.3361 36.7947C70.7069 37.1911 71.1884 37.3892 71.7807 37.3892C72.1387 37.3892 72.4945 37.2997 72.8482 37.1207C73.2061 36.9418 73.5023 36.6712 73.7367 36.3089C73.9753 35.9467 74.0925 35.4865 74.0882 34.9283ZM78.5739 39V29.1818H80.4851V39H78.5739ZM79.5391 27.6669C79.2067 27.6669 78.9212 27.5561 78.6825 27.3345C78.4482 27.1087 78.331 26.8402 78.331 26.5291C78.331 26.2138 78.4482 25.9453 78.6825 25.7237C78.9212 25.4979 79.2067 25.3849 79.5391 25.3849C79.8714 25.3849 80.1548 25.4979 80.3892 25.7237C80.6278 25.9453 80.7472 26.2138 80.7472 26.5291C80.7472 26.8402 80.6278 27.1087 80.3892 27.3345C80.1548 27.5561 79.8714 27.6669 79.5391 27.6669ZM87.6394 29.1818V30.7159H82.2765V29.1818H87.6394ZM83.7147 26.8295H85.6259V36.1172C85.6259 36.4879 85.6813 36.767 85.7921 36.9545C85.9029 37.1378 86.0456 37.2635 86.2203 37.3317C86.3993 37.3956 86.5932 37.4276 86.802 37.4276C86.9554 37.4276 87.0897 37.4169 87.2047 37.3956C87.3198 37.3743 87.4093 37.3572 87.4732 37.3445L87.8184 38.9233C87.7076 38.9659 87.5499 39.0085 87.3453 39.0511C87.1408 39.098 86.8851 39.1236 86.5783 39.1278C86.0755 39.1364 85.6067 39.0469 85.1721 38.8594C84.7374 38.6719 84.3858 38.3821 84.1174 37.9901C83.8489 37.598 83.7147 37.1058 83.7147 36.5135V26.8295ZM93.8796 39.1982C92.9123 39.1982 92.0792 38.9915 91.3803 38.5781C90.6857 38.1605 90.1488 37.5746 89.7695 36.8203C89.3945 36.0618 89.207 35.1733 89.207 34.1548C89.207 33.1491 89.3945 32.2628 89.7695 31.4957C90.1488 30.7287 90.6772 30.13 91.3548 29.6996C92.0366 29.2692 92.8335 29.054 93.7454 29.054C94.2994 29.054 94.8363 29.1456 95.3562 29.3288C95.8761 29.5121 96.3427 29.7997 96.756 30.1918C97.1694 30.5838 97.4954 31.093 97.734 31.7195C97.9727 32.3416 98.092 33.098 98.092 33.9886V34.6662H90.2873V33.2344H96.2191C96.2191 32.7315 96.1168 32.2862 95.9123 31.8984C95.7077 31.5064 95.4201 31.1974 95.0494 30.9716C94.6829 30.7457 94.2525 30.6328 93.7582 30.6328C93.2212 30.6328 92.7525 30.7649 92.3519 31.0291C91.9556 31.2891 91.6488 31.63 91.4315 32.0518C91.2184 32.4695 91.1119 32.9233 91.1119 33.4134V34.532C91.1119 35.1882 91.2269 35.7464 91.457 36.2067C91.6914 36.6669 92.0174 37.0185 92.435 37.2614C92.8526 37.5 93.3406 37.6193 93.8988 37.6193C94.261 37.6193 94.5913 37.5682 94.8896 37.4659C95.1879 37.3594 95.4457 37.2017 95.663 36.9929C95.8803 36.7841 96.0465 36.5263 96.1616 36.2195L97.9705 36.5455C97.8256 37.0781 97.5657 37.5447 97.1907 37.9453C96.82 38.3416 96.3533 38.6506 95.7908 38.8722C95.2326 39.0895 94.5955 39.1982 93.8796 39.1982Z"
        fill="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_1604_15"
        x="11"
        y="11"
        width="24.05"
        height="24.05"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.05" dy="0.05" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1604_15"
        />
      </filter>
      <clipPath id="clip0_1604_15">
        <rect width="130" height="46" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LogoDark: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="130"
    height="46"
    viewBox="0 0 130 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1609_2)">
      <circle cx="22.5" cy="23.5" r="22.5" fill="#E5E7EB" />
      <g filter="url(#filter0_i_1609_2)">
        <path
          d="M13 14H19C20.0609 14 21.0783 14.4214 21.8284 15.1716C22.5786 15.9217 23 16.9391 23 18V32C23 31.2044 22.6839 30.4413 22.1213 29.8787C21.5587 29.3161 20.7956 29 20 29H13V14Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 14H27C25.9391 14 24.9217 14.4214 24.1716 15.1716C23.4214 15.9217 23 16.9391 23 18V32C23 31.2044 23.3161 30.4413 23.8787 29.8787C24.4413 29.3161 25.2044 29 26 29H33V14Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M64.1548 10.6378C64.098 10.0649 63.8542 9.61979 63.4233 9.30256C62.9924 8.98532 62.4077 8.8267 61.669 8.8267C61.1671 8.8267 60.7434 8.89773 60.3977 9.03977C60.0521 9.17708 59.7869 9.36884 59.6023 9.61506C59.4223 9.86127 59.3324 10.1406 59.3324 10.4531C59.3229 10.7135 59.3774 10.9408 59.4957 11.1349C59.6188 11.3291 59.7869 11.4972 60 11.6392C60.2131 11.7765 60.4593 11.8973 60.7386 12.0014C61.018 12.1009 61.3163 12.1861 61.6335 12.2571L62.9403 12.5696C63.5748 12.7116 64.1572 12.901 64.6875 13.1378C65.2178 13.3745 65.6771 13.6657 66.0653 14.0114C66.4536 14.357 66.7543 14.7642 66.9673 15.233C67.1851 15.7017 67.2964 16.2391 67.3011 16.8452C67.2964 17.7353 67.0691 18.5071 66.6193 19.1605C66.1742 19.8092 65.5303 20.3134 64.6875 20.6733C63.8494 21.0284 62.8385 21.206 61.6548 21.206C60.4806 21.206 59.4579 21.026 58.5866 20.6662C57.7202 20.3063 57.0431 19.7737 56.5554 19.0682C56.0724 18.358 55.8191 17.4796 55.7955 16.4332H58.7713C58.8045 16.9209 58.9441 17.3281 59.1903 17.6548C59.4413 17.9768 59.7751 18.2206 60.1918 18.3864C60.6132 18.5473 61.089 18.6278 61.6193 18.6278C62.1402 18.6278 62.5923 18.5521 62.9759 18.4006C63.3641 18.2491 63.6648 18.0384 63.8778 17.7685C64.0909 17.4986 64.1974 17.1884 64.1974 16.8381C64.1974 16.5114 64.1004 16.2367 63.9062 16.0142C63.7169 15.7917 63.4375 15.6023 63.0682 15.446C62.7036 15.2898 62.2562 15.1477 61.7259 15.0199L60.142 14.6222C58.9157 14.3239 57.9474 13.8575 57.2372 13.223C56.527 12.5885 56.1742 11.7339 56.179 10.6591C56.1742 9.77841 56.4086 9.009 56.8821 8.35085C57.3603 7.69271 58.0161 7.17898 58.8494 6.80966C59.6828 6.44034 60.6297 6.25568 61.6903 6.25568C62.7699 6.25568 63.7121 6.44034 64.517 6.80966C65.3267 7.17898 65.9564 7.69271 66.4062 8.35085C66.8561 9.009 67.0881 9.77131 67.1023 10.6378H64.1548ZM74.2418 21.2131C73.1244 21.2131 72.1632 20.9763 71.3583 20.5028C70.5581 20.0246 69.9426 19.3617 69.5117 18.5142C69.0856 17.6667 68.8725 16.6913 68.8725 15.5881C68.8725 14.4706 69.0879 13.4905 69.5188 12.6477C69.9544 11.8002 70.5723 11.1397 71.3725 10.6662C72.1727 10.188 73.1244 9.94886 74.2276 9.94886C75.1793 9.94886 76.0127 10.1217 76.7276 10.4673C77.4426 10.813 78.0084 11.2983 78.4251 11.9233C78.8417 12.5483 79.0714 13.2822 79.114 14.125H76.2589C76.1784 13.5805 75.9653 13.1425 75.6197 12.8111C75.2788 12.4749 74.8313 12.3068 74.2773 12.3068C73.8086 12.3068 73.399 12.4347 73.0487 12.6903C72.703 12.9413 72.4331 13.3082 72.239 13.7912C72.0449 14.2741 71.9478 14.8589 71.9478 15.5455C71.9478 16.2415 72.0425 16.8333 72.2319 17.321C72.426 17.8087 72.6983 18.1804 73.0487 18.4361C73.399 18.6918 73.8086 18.8196 74.2773 18.8196C74.623 18.8196 74.9331 18.7486 75.2077 18.6065C75.4871 18.4645 75.7167 18.2585 75.8967 17.9886C76.0813 17.714 76.2021 17.3849 76.2589 17.0014H79.114C79.0666 17.8348 78.8394 18.5687 78.4322 19.2031C78.0297 19.8329 77.4734 20.3253 76.7631 20.6804C76.0529 21.0355 75.2125 21.2131 74.2418 21.2131ZM84.0767 14.6932V21H81.0511V6.45455H83.9915V12.0156H84.1193C84.3655 11.3717 84.7633 10.8674 85.3125 10.5028C85.8617 10.1335 86.5507 9.94886 87.3793 9.94886C88.1368 9.94886 88.7973 10.1146 89.3608 10.446C89.929 10.7727 90.3693 11.2438 90.6818 11.8594C90.9991 12.4702 91.1553 13.2017 91.1506 14.054V21H88.125V14.5938C88.1297 13.9214 87.9593 13.3982 87.6136 13.0241C87.2727 12.6501 86.7945 12.4631 86.179 12.4631C85.767 12.4631 85.4025 12.5507 85.0852 12.7259C84.7727 12.901 84.5265 13.1567 84.3466 13.4929C84.1714 13.8243 84.0814 14.2244 84.0767 14.6932ZM98.4606 21.2131C97.3574 21.2131 96.4033 20.9787 95.5984 20.5099C94.7982 20.0365 94.1803 19.3783 93.7447 18.5355C93.3091 17.688 93.0913 16.7055 93.0913 15.5881C93.0913 14.4612 93.3091 13.4763 93.7447 12.6335C94.1803 11.786 94.7982 11.1278 95.5984 10.6591C96.4033 10.1856 97.3574 9.94886 98.4606 9.94886C99.5638 9.94886 100.516 10.1856 101.316 10.6591C102.121 11.1278 102.741 11.786 103.176 12.6335C103.612 13.4763 103.83 14.4612 103.83 15.5881C103.83 16.7055 103.612 17.688 103.176 18.5355C102.741 19.3783 102.121 20.0365 101.316 20.5099C100.516 20.9787 99.5638 21.2131 98.4606 21.2131ZM98.4748 18.8693C98.9767 18.8693 99.3957 18.7273 99.7319 18.4432C100.068 18.1544 100.321 17.7614 100.492 17.2642C100.667 16.767 100.755 16.2012 100.755 15.5668C100.755 14.9323 100.667 14.3665 100.492 13.8693C100.321 13.3722 100.068 12.9792 99.7319 12.6903C99.3957 12.4015 98.9767 12.2571 98.4748 12.2571C97.9682 12.2571 97.542 12.4015 97.1964 12.6903C96.8555 12.9792 96.5974 13.3722 96.4222 13.8693C96.2518 14.3665 96.1665 14.9323 96.1665 15.5668C96.1665 16.2012 96.2518 16.767 96.4222 17.2642C96.5974 17.7614 96.8555 18.1544 97.1964 18.4432C97.542 18.7273 97.9682 18.8693 98.4748 18.8693ZM108.823 6.45455V21H105.797V6.45455H108.823ZM114.357 21.206C113.661 21.206 113.041 21.0852 112.496 20.8438C111.952 20.5975 111.521 20.2353 111.204 19.7571C110.891 19.2741 110.735 18.6728 110.735 17.9531C110.735 17.3471 110.846 16.8381 111.069 16.4261C111.291 16.0142 111.594 15.6828 111.978 15.4318C112.362 15.1809 112.797 14.9915 113.285 14.8636C113.777 14.7358 114.293 14.6458 114.833 14.5938C115.468 14.5275 115.979 14.4659 116.367 14.4091C116.755 14.3475 117.037 14.2576 117.212 14.1392C117.388 14.0208 117.475 13.8456 117.475 13.6136V13.571C117.475 13.1212 117.333 12.7732 117.049 12.527C116.77 12.2808 116.372 12.1577 115.856 12.1577C115.311 12.1577 114.878 12.2784 114.556 12.5199C114.234 12.7566 114.021 13.0549 113.917 13.4148L111.119 13.1875C111.261 12.5246 111.54 11.9517 111.957 11.4688C112.373 10.9811 112.911 10.607 113.569 10.3466C114.232 10.0814 114.999 9.94886 115.87 9.94886C116.476 9.94886 117.056 10.0199 117.61 10.1619C118.169 10.304 118.664 10.5241 119.094 10.8224C119.53 11.1207 119.873 11.5043 120.124 11.973C120.375 12.437 120.501 12.9934 120.501 13.642V21H117.631V19.4872H117.546C117.371 19.8281 117.137 20.1288 116.843 20.3892C116.549 20.6449 116.197 20.8461 115.785 20.9929C115.373 21.1349 114.897 21.206 114.357 21.206ZM115.224 19.1179C115.669 19.1179 116.062 19.0303 116.403 18.8551C116.744 18.6752 117.011 18.4337 117.205 18.1307C117.399 17.8277 117.496 17.4844 117.496 17.1009V15.9432C117.402 16.0047 117.272 16.0616 117.106 16.1136C116.945 16.161 116.763 16.206 116.559 16.2486C116.355 16.2865 116.152 16.322 115.948 16.3551C115.745 16.3835 115.56 16.4096 115.394 16.4332C115.039 16.4853 114.729 16.5682 114.464 16.6818C114.199 16.7955 113.993 16.9493 113.846 17.1435C113.699 17.3329 113.626 17.5696 113.626 17.8537C113.626 18.2656 113.775 18.5805 114.073 18.7983C114.376 19.0114 114.76 19.1179 115.224 19.1179ZM122.848 21V10.0909H125.781V11.9943H125.895C126.094 11.3172 126.428 10.8059 126.896 10.4602C127.365 10.1098 127.905 9.93466 128.516 9.93466C128.667 9.93466 128.83 9.94413 129.006 9.96307C129.181 9.98201 129.335 10.008 129.467 10.0412V12.7259C129.325 12.6832 129.129 12.6454 128.878 12.6122C128.627 12.5791 128.397 12.5625 128.189 12.5625C127.744 12.5625 127.346 12.6596 126.996 12.8537C126.65 13.0431 126.375 13.3082 126.172 13.6491C125.973 13.9901 125.874 14.383 125.874 14.8281V21H122.848Z"
        fill="white"
      />
      <path
        d="M63.5781 29.348C63.5099 28.7429 63.2287 28.2741 62.7344 27.9418C62.2401 27.6051 61.6179 27.4368 60.8679 27.4368C60.331 27.4368 59.8665 27.522 59.4744 27.6925C59.0824 27.8587 58.7777 28.0888 58.5604 28.3828C58.3473 28.6726 58.2408 29.0028 58.2408 29.3736C58.2408 29.6847 58.3132 29.9531 58.4581 30.179C58.6072 30.4048 58.8011 30.5945 59.0398 30.7479C59.2827 30.897 59.5426 31.0227 59.8196 31.125C60.0966 31.223 60.3629 31.304 60.6186 31.3679L61.897 31.7003C62.3146 31.8026 62.7429 31.9411 63.1818 32.1158C63.6207 32.2905 64.0277 32.5206 64.4027 32.8061C64.7777 33.0916 65.0803 33.4453 65.3104 33.8672C65.5447 34.2891 65.6619 34.794 65.6619 35.3821C65.6619 36.1236 65.4702 36.782 65.0866 37.3572C64.7074 37.9325 64.1555 38.3864 63.4311 38.7188C62.7109 39.0511 61.8395 39.2173 60.8168 39.2173C59.8366 39.2173 58.9886 39.0618 58.2727 38.7507C57.5568 38.4396 56.9964 37.9986 56.5916 37.4276C56.1868 36.8523 55.9631 36.1705 55.9205 35.3821H57.902C57.9403 35.8551 58.0938 36.2493 58.3622 36.5646C58.6349 36.8757 58.9822 37.108 59.4041 37.2614C59.8303 37.4105 60.2969 37.4851 60.804 37.4851C61.3622 37.4851 61.8587 37.3977 62.2933 37.223C62.7322 37.044 63.0774 36.7969 63.3288 36.4815C63.5803 36.1619 63.706 35.7891 63.706 35.3629C63.706 34.9751 63.5952 34.6577 63.3736 34.4105C63.1563 34.1634 62.8601 33.9588 62.4851 33.7969C62.1143 33.6349 61.6946 33.4922 61.2259 33.3686L59.679 32.9467C58.6307 32.6612 57.7997 32.2415 57.1861 31.6875C56.5767 31.1335 56.272 30.4006 56.272 29.4886C56.272 28.7344 56.4766 28.076 56.8857 27.5135C57.2947 26.951 57.8487 26.5142 58.5476 26.2031C59.2464 25.8878 60.0348 25.7301 60.9126 25.7301C61.799 25.7301 62.581 25.8857 63.2585 26.1967C63.9403 26.5078 64.4773 26.9361 64.8693 27.4815C65.2614 28.0227 65.4659 28.6449 65.483 29.348H63.5781ZM74.0882 34.9283V29.1818H76.0059V39H74.1266V37.2997H74.0243C73.7985 37.8239 73.4363 38.2607 72.9377 38.6101C72.4434 38.9553 71.8276 39.1278 71.0904 39.1278C70.4597 39.1278 69.9015 38.9893 69.4157 38.7124C68.9341 38.4311 68.5549 38.0156 68.2779 37.4659C68.0051 36.9162 67.8688 36.2365 67.8688 35.4268V29.1818H69.78V35.1967C69.78 35.8658 69.9654 36.3984 70.3361 36.7947C70.7069 37.1911 71.1884 37.3892 71.7807 37.3892C72.1387 37.3892 72.4945 37.2997 72.8482 37.1207C73.2061 36.9418 73.5023 36.6712 73.7367 36.3089C73.9753 35.9467 74.0925 35.4865 74.0882 34.9283ZM78.5739 39V29.1818H80.4851V39H78.5739ZM79.5391 27.6669C79.2067 27.6669 78.9212 27.5561 78.6825 27.3345C78.4482 27.1087 78.331 26.8402 78.331 26.5291C78.331 26.2138 78.4482 25.9453 78.6825 25.7237C78.9212 25.4979 79.2067 25.3849 79.5391 25.3849C79.8714 25.3849 80.1548 25.4979 80.3892 25.7237C80.6278 25.9453 80.7472 26.2138 80.7472 26.5291C80.7472 26.8402 80.6278 27.1087 80.3892 27.3345C80.1548 27.5561 79.8714 27.6669 79.5391 27.6669ZM87.6394 29.1818V30.7159H82.2765V29.1818H87.6394ZM83.7147 26.8295H85.6259V36.1172C85.6259 36.4879 85.6813 36.767 85.7921 36.9545C85.9029 37.1378 86.0456 37.2635 86.2203 37.3317C86.3993 37.3956 86.5932 37.4276 86.802 37.4276C86.9554 37.4276 87.0897 37.4169 87.2047 37.3956C87.3198 37.3743 87.4093 37.3572 87.4732 37.3445L87.8184 38.9233C87.7076 38.9659 87.5499 39.0085 87.3453 39.0511C87.1408 39.098 86.8851 39.1236 86.5783 39.1278C86.0755 39.1364 85.6067 39.0469 85.1721 38.8594C84.7374 38.6719 84.3858 38.3821 84.1174 37.9901C83.8489 37.598 83.7147 37.1058 83.7147 36.5135V26.8295ZM93.8796 39.1982C92.9123 39.1982 92.0792 38.9915 91.3803 38.5781C90.6857 38.1605 90.1488 37.5746 89.7695 36.8203C89.3945 36.0618 89.207 35.1733 89.207 34.1548C89.207 33.1491 89.3945 32.2628 89.7695 31.4957C90.1488 30.7287 90.6772 30.13 91.3548 29.6996C92.0366 29.2692 92.8335 29.054 93.7454 29.054C94.2994 29.054 94.8363 29.1456 95.3562 29.3288C95.8761 29.5121 96.3427 29.7997 96.756 30.1918C97.1694 30.5838 97.4954 31.093 97.734 31.7195C97.9727 32.3416 98.092 33.098 98.092 33.9886V34.6662H90.2873V33.2344H96.2191C96.2191 32.7315 96.1168 32.2862 95.9123 31.8984C95.7077 31.5064 95.4201 31.1974 95.0494 30.9716C94.6829 30.7457 94.2525 30.6328 93.7582 30.6328C93.2212 30.6328 92.7525 30.7649 92.3519 31.0291C91.9556 31.2891 91.6488 31.63 91.4315 32.0518C91.2184 32.4695 91.1119 32.9233 91.1119 33.4134V34.532C91.1119 35.1882 91.2269 35.7464 91.457 36.2067C91.6914 36.6669 92.0174 37.0185 92.435 37.2614C92.8526 37.5 93.3406 37.6193 93.8988 37.6193C94.261 37.6193 94.5913 37.5682 94.8896 37.4659C95.1879 37.3594 95.4457 37.2017 95.663 36.9929C95.8803 36.7841 96.0465 36.5263 96.1616 36.2195L97.9705 36.5455C97.8256 37.0781 97.5657 37.5447 97.1907 37.9453C96.82 38.3416 96.3533 38.6506 95.7908 38.8722C95.2326 39.0895 94.5955 39.1982 93.8796 39.1982Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_1609_2"
        x="11"
        y="11"
        width="24.05"
        height="24.05"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="0.05" dy="0.05" />
        <feGaussianBlur stdDeviation="0.25" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1609_2"
        />
      </filter>
      <clipPath id="clip0_1609_2">
        <rect width="130" height="46" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type LogoProps = {
  className?: string;
};

const Logo: FC<LogoProps> = ({ className }) => (
  <>
    <LogoLight className={classNames('block dark:hidden', className)} />
    <LogoDark className={classNames('hidden dark:block', className)} />
  </>
);

export default Logo;
