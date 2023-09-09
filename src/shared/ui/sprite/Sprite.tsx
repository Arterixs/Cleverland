import styles from './sprite.module.css';

export const Sprite = () => (
  <div className={styles.sprite}>
    <svg className={styles.svg}>
      <symbol viewBox='0 0 40 40' id='logo' fill='none'>
        <path
          d='M0 7C0 3.13401 3.13402 0 7.00002 0H33.0001C36.8661 0 40.0001 3.13401 40.0001 7V33C40.0001 36.866 36.8661 40 33.0001 40H7.00002C3.13402 40 0 36.866 0 33V7Z'
          fill='#6E76F1'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M32.5375 13.7087H28.5486C26.6072 11.1334 23.5031 9.46448 20.0088 9.46448C14.1326 9.46448 9.36219 14.1828 9.36219 19.9938C9.36219 25.8052 14.1326 30.5231 20.0088 30.5231C23.5031 30.5231 26.6072 28.8542 28.5486 26.2794H32.5375C30.2163 30.7921 25.475 33.8867 20.0088 33.8867C12.2556 33.8867 5.96143 27.6618 5.96143 19.9938C5.96143 12.3262 12.2556 6.10132 20.0088 6.10132C25.475 6.10132 30.2163 9.1959 32.5375 13.7087ZM23.3517 20.6142C23.0569 22.1749 21.6713 23.3574 20.0088 23.3574C18.1314 23.3574 16.6076 21.8503 16.6076 19.9938C16.6076 18.1377 18.1314 16.6306 20.0088 16.6306C21.6713 16.6306 23.0569 17.8131 23.3517 19.3738H40.0001V20.6142H23.3517Z'
          fill='white'
        />
      </symbol>
      <symbol viewBox='0 0 111 16' id='title' fill='none'>
        <path
          d='M7.72288 16C6.26366 16 4.94209 15.6806 3.75819 15.0417C2.58806 14.3889 1.66572 13.4931 0.991172 12.3542C0.330391 11.2153 0 9.9306 0 8.50004C0 7.06948 0.337274 5.78476 1.01182 4.64587C1.68637 3.50699 2.60871 2.6181 3.77884 1.97921C4.96274 1.32643 6.28431 1.00004 7.74353 1.00004C8.92743 1.00004 10.0081 1.20837 10.9855 1.62504C11.9629 2.04171 12.7889 2.64587 13.4634 3.43754L11.7289 5.08337C10.6826 3.94449 9.39549 3.37504 7.86743 3.37504C6.87626 3.37504 5.98833 3.59726 5.20365 4.04171C4.41898 4.47226 3.80638 5.07643 3.36586 5.85421C2.92533 6.63198 2.70507 7.51393 2.70507 8.50004C2.70507 9.48615 2.92533 10.3681 3.36586 11.1459C3.80638 11.9237 4.41898 12.5348 5.20365 12.9792C5.98833 13.4098 6.87626 13.625 7.86743 13.625C9.39549 13.625 10.6826 13.0487 11.7289 11.8959L13.4634 13.5625C12.7889 14.3542 11.956 14.9584 10.9648 15.375C9.98744 15.7917 8.90678 16 7.72288 16Z'
          fill='#363636'
        />
        <path d='M15.7878 0.333374H18.3689V15.7917H15.7878V0.333374Z' fill='#363636' />
        <path
          d='M32.1228 10.2917C32.1228 10.4723 32.109 10.7292 32.0815 11.0625H23.4294C23.5808 11.882 23.9731 12.5348 24.6064 13.0209C25.2534 13.4931 26.0518 13.7292 27.0017 13.7292C28.2131 13.7292 29.2112 13.3264 29.9959 12.5209L31.3794 14.125C30.8838 14.7223 30.2574 15.1737 29.5003 15.4792C28.7431 15.7848 27.8896 15.9375 26.9398 15.9375C25.7283 15.9375 24.6614 15.6945 23.7391 15.2084C22.8168 14.7223 22.1009 14.0487 21.5916 13.1875C21.096 12.3125 20.8482 11.3264 20.8482 10.2292C20.8482 9.14587 21.0891 8.17365 21.5709 7.31254C22.0665 6.43754 22.7479 5.75699 23.6152 5.27087C24.4825 4.78476 25.4599 4.54171 26.5474 4.54171C27.6212 4.54171 28.5779 4.78476 29.4177 5.27087C30.2712 5.7431 30.932 6.41671 31.4 7.29171C31.8818 8.15282 32.1228 9.15282 32.1228 10.2917ZM26.5474 6.62504C25.7214 6.62504 25.0194 6.87504 24.4412 7.37504C23.8768 7.86115 23.5326 8.51393 23.4087 9.33337H29.6655C29.5553 8.52782 29.2181 7.87504 28.6537 7.37504C28.0892 6.87504 27.3872 6.62504 26.5474 6.62504Z'
          fill='#363636'
        />
        <path
          d='M44.7252 4.66671L39.9965 15.7917H37.3327L32.604 4.66671H35.2884L38.7162 12.9167L42.2473 4.66671H44.7252Z'
          fill='#363636'
        />
        <path
          d='M56.402 10.2917C56.402 10.4723 56.3882 10.7292 56.3607 11.0625H47.7086C47.86 11.882 48.2523 12.5348 48.8856 13.0209C49.5326 13.4931 50.331 13.7292 51.2809 13.7292C52.4923 13.7292 53.4904 13.3264 54.2751 12.5209L55.6586 14.125C55.163 14.7223 54.5366 15.1737 53.7795 15.4792C53.0223 15.7848 52.1688 15.9375 51.219 15.9375C50.0075 15.9375 48.9406 15.6945 48.0183 15.2084C47.096 14.7223 46.3801 14.0487 45.8708 13.1875C45.3752 12.3125 45.1274 11.3264 45.1274 10.2292C45.1274 9.14587 45.3683 8.17365 45.8501 7.31254C46.3457 6.43754 47.0271 5.75699 47.8944 5.27087C48.7617 4.78476 49.7391 4.54171 50.8266 4.54171C51.9004 4.54171 52.8571 4.78476 53.6969 5.27087C54.5504 5.7431 55.2112 6.41671 55.6792 7.29171C56.161 8.15282 56.402 9.15282 56.402 10.2917ZM50.8266 6.62504C50.0006 6.62504 49.2986 6.87504 48.7204 7.37504C48.156 7.86115 47.8118 8.51393 47.6879 9.33337H53.9447C53.8345 8.52782 53.4973 7.87504 52.9329 7.37504C52.3684 6.87504 51.6664 6.62504 50.8266 6.62504Z'
          fill='#363636'
        />
        <path
          d='M61.3386 6.29171C62.082 5.12504 63.3898 4.54171 65.262 4.54171V7.02087C65.0418 6.97921 64.8421 6.95837 64.6632 6.95837C63.6582 6.95837 62.8736 7.25698 62.3092 7.85421C61.7447 8.43754 61.4625 9.28476 61.4625 10.3959V15.7917H58.8813V4.66671H61.3386V6.29171Z'
          fill='#363636'
        />
        <path d='M67.4517 0.333374H70.0328V15.7917H67.4517V0.333374Z' fill='#363636' />
        <path
          d='M77.6331 4.54171C79.2575 4.54171 80.4965 4.93754 81.35 5.72921C82.2173 6.50699 82.6509 7.68754 82.6509 9.27087V15.7917H80.2143V14.4375C79.8977 14.9237 79.4434 15.2987 78.8514 15.5625C78.2732 15.8125 77.5712 15.9375 76.7452 15.9375C75.9192 15.9375 75.1965 15.7987 74.577 15.5209C73.9575 15.2292 73.4757 14.8334 73.1315 14.3334C72.8012 13.8195 72.636 13.2431 72.636 12.6042C72.636 11.6042 73.0008 10.8056 73.7304 10.2084C74.4738 9.59726 75.637 9.29171 77.2201 9.29171H80.0697V9.12504C80.0697 8.34726 79.8357 7.75004 79.3677 7.33337C78.9134 6.91671 78.2319 6.70837 77.3234 6.70837C76.7039 6.70837 76.0913 6.8056 75.4856 7.00004C74.8936 7.19448 74.3912 7.46532 73.9782 7.81254L72.9663 5.91671C73.5445 5.47226 74.2397 5.13198 75.0519 4.89587C75.8642 4.65976 76.7245 4.54171 77.6331 4.54171ZM77.2821 14.0417C77.9291 14.0417 78.5004 13.8959 78.996 13.6042C79.5053 13.2987 79.8633 12.8681 80.0697 12.3125V11.0209H77.406C75.9192 11.0209 75.1758 11.5139 75.1758 12.5C75.1758 12.9723 75.3617 13.3473 75.7334 13.625C76.1051 13.9028 76.6213 14.0417 77.2821 14.0417Z'
          fill='#363636'
        />
        <path
          d='M92.2203 4.54171C93.6107 4.54171 94.7258 4.95143 95.5655 5.77087C96.4053 6.59032 96.8251 7.8056 96.8251 9.41671V15.7917H94.244V9.75004C94.244 8.77782 94.0168 8.04865 93.5625 7.56254C93.1082 7.06254 92.4612 6.81254 91.6215 6.81254C90.6716 6.81254 89.9213 7.10421 89.3707 7.68754C88.82 8.25699 88.5447 9.08337 88.5447 10.1667V15.7917H85.9635V4.66671H88.4208V6.10421C88.8476 5.59032 89.3845 5.20143 90.0315 4.93754C90.6785 4.67365 91.4081 4.54171 92.2203 4.54171Z'
          fill='#363636'
        />
        <path
          d='M111 0.333374V15.7917H108.522V14.3542C108.095 14.882 107.565 15.2778 106.932 15.5417C106.313 15.8056 105.624 15.9375 104.867 15.9375C103.807 15.9375 102.85 15.7014 101.997 15.2292C101.157 14.757 100.496 14.0903 100.015 13.2292C99.5327 12.3542 99.2918 11.3542 99.2918 10.2292C99.2918 9.10421 99.5327 8.11115 100.015 7.25004C100.496 6.38893 101.157 5.72226 101.997 5.25004C102.85 4.77782 103.807 4.54171 104.867 4.54171C105.597 4.54171 106.264 4.66671 106.87 4.91671C107.476 5.16671 107.992 5.54171 108.419 6.04171V0.333374H111ZM105.177 13.7084C105.796 13.7084 106.354 13.5695 106.849 13.2917C107.345 13 107.737 12.5903 108.026 12.0625C108.316 11.5348 108.46 10.9237 108.46 10.2292C108.46 9.53476 108.316 8.92365 108.026 8.39587C107.737 7.8681 107.345 7.46532 106.849 7.18754C106.354 6.89587 105.796 6.75004 105.177 6.75004C104.557 6.75004 104 6.89587 103.504 7.18754C103.009 7.46532 102.616 7.8681 102.327 8.39587C102.038 8.92365 101.894 9.53476 101.894 10.2292C101.894 10.9237 102.038 11.5348 102.327 12.0625C102.616 12.5903 103.009 13 103.504 13.2917C104 13.5695 104.557 13.7084 105.177 13.7084Z'
          fill='#363636'
        />
      </symbol>
      <symbol viewBox='0 0 10 18' id='facebook' fill='none'>
        <path
          d='M2.87625 18V9.94922H0V6.75H2.87625V4.2293C2.87625 1.49063 4.66125 0 7.2675 0C8.51625 0 9.58875 0.0878906 9.9 0.126562V2.98828H8.0925C6.675 2.98828 6.40125 3.62109 6.40125 4.5457V6.75H9.6L9.16125 9.94922H6.40125V18'
          fill='#363636'
        />
      </symbol>
      <symbol viewBox='0 0 18 18' id='instagram' fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4 8.92554C4 5.99967 6 3.92554 9 3.92554C12.0017 3.92554 14 5.90735 14 9C14 12.0003 12.0017 13.9255 9.00201 13.9255C6.00234 13.9255 4 12.0003 4 8.92554ZM6.00234 9C6.00234 10.6548 7.35159 12.0003 9.00201 12.0003C10.6524 12.0003 12.0017 10.6548 12.0017 9C12.0017 7.3452 10.6564 5.99967 9.00201 5.99967C7.34757 5.99967 6.00234 7.3452 6.00234 9ZM14.8047 5.27268C15.399 5.27268 15.8809 4.79471 15.8809 4.19625C15.8809 3.60181 15.399 3.11983 14.8047 3.11983C14.2104 3.11983 13.7285 3.60181 13.7285 4.19625C13.7285 4.7907 14.2064 5.27268 14.8047 5.27268ZM16.4831 1.51724C17.5392 2.56956 17.8685 3.84681 17.9368 5.28874C18.0211 6.77485 18.0211 11.2251 17.9368 12.7113C17.8645 14.1532 17.5352 15.4304 16.4831 16.4828C15.431 17.5391 14.154 17.8685 12.7124 17.9367C11.2267 18.0211 6.77334 18.0211 5.28756 17.9367C3.84596 17.8644 2.57301 17.5351 1.5169 16.4828C0.460792 15.4304 0.131511 14.1532 0.063246 12.7113C-0.021082 11.2251 -0.021082 6.77083 0.063246 5.28473C0.135527 3.8428 0.460792 2.56555 1.5169 1.51322C2.57301 0.460895 3.84997 0.131541 5.28756 0.0632601C6.77334 -0.0210867 11.2267 -0.0210867 12.7124 0.0632601C14.154 0.135557 15.431 0.464911 16.4831 1.51724Z'
          fill='#363636'
        />
      </symbol>
      <symbol viewBox='0 0 22 14' id='vk' fill='none'>
        <path
          d='M21.4986 0.895125C21.6497 0.3795 21.4986 0 20.7716 0H18.3661C17.7535 0 17.4717 0.325875 17.3206 0.688875C17.3206 0.688875 16.0954 3.70425 14.3637 5.6595C13.8042 6.22462 13.5469 6.40612 13.2406 6.40612C13.0895 6.40612 12.8567 6.22462 12.8567 5.709V0.895125C12.8567 0.276375 12.6852 0 12.1787 0H8.39687C8.01297 0 7.78426 0.28875 7.78426 0.556875C7.78426 1.14262 8.65009 1.27875 8.73993 2.92875V6.50925C8.73993 7.293 8.60108 7.43737 8.29477 7.43737C7.47795 7.43737 5.49309 4.40963 4.31687 0.944625C4.08 0.27225 3.84721 0 3.23051 0H0.824984C0.138859 0 1.55795e-08 0.325875 1.55795e-08 0.688875C1.55795e-08 1.33237 0.816816 4.52925 3.80228 8.75325C5.79123 11.6366 8.59291 13.2 11.1414 13.2C12.6729 13.2 12.8608 12.8535 12.8608 12.2554C12.8608 9.49988 12.7219 9.24 13.4897 9.24C13.845 9.24 14.4577 9.4215 15.8871 10.8116C17.5207 12.4616 17.7903 13.2 18.7051 13.2H21.1106C21.7967 13.2 22.1439 12.8535 21.9438 12.1687C21.4864 10.7291 18.3947 7.76737 18.2558 7.56937C17.9005 7.10737 18.0026 6.90112 18.2558 6.48862C18.2599 6.4845 21.1964 2.31 21.4986 0.895125Z'
          fill='#363636'
        />
      </symbol>
      <symbol viewBox='0 0 18 19' id='linkedin' fill='none'>
        <path
          d='M4.02901 19H0.297255V6.31495H4.02901V19ZM2.16112 4.5846C0.968087 4.5846 0 3.54129 0 2.2817C0 1.0221 0.968087 0 2.16112 0C3.35416 0 4.32225 1.0221 4.32225 2.2817C4.32225 3.54129 3.35416 4.5846 2.16112 4.5846ZM17.996 19H14.2723V12.825C14.2723 11.3533 14.2441 9.46607 12.3321 9.46607C10.3919 9.46607 10.0946 11.065 10.0946 12.719V19H6.36688V6.31495H9.94599V8.04531H9.99821C10.4963 7.04866 11.7135 5.99687 13.5291 5.99687C17.3051 5.99687 18 8.6221 18 12.0319V19H17.996Z'
          fill='#363636'
        />
      </symbol>
      <symbol viewBox='0 0 24 24' id='arrow-menu' fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
          fill='CurrentColor'
        />
      </symbol>
    </svg>
  </div>
);
