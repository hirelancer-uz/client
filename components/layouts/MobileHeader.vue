<template>
  <div class="mobile-header px-4 hidden bg-white w-full py-[14px] z-50">
    <div class="flex justify-between items-center topper">
      <nuxt-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="19"
          viewBox="0 0 94 19"
          fill="none"
        >
          <path
            d="M16.2854 18.0236H5.27264C3.81812 18.0236 2.57138 17.4992 1.53244 16.4505C0.510814 15.384 0 14.1043 0 12.6112V0H4.90901V12.1579C4.90901 12.389 4.98693 12.5845 5.14277 12.7445C5.29861 12.9045 5.48042 12.9845 5.68821 12.9845H15.8699C16.095 12.9845 16.2854 12.9045 16.4413 12.7445C16.5971 12.5845 16.675 12.389 16.675 12.1579V0H21.5581V12.6112C21.5581 14.1043 21.0386 15.384 19.9997 16.4505C18.978 17.4992 17.74 18.0236 16.2854 18.0236Z"
            fill="#5C46E6"
          />
          <path
            d="M40.4327 18.0236H24.1473V0H40.4327C41.8873 0 43.1253 0.533243 44.147 1.59973C45.1859 2.64844 45.7054 3.91933 45.7054 5.41241V12.6112C45.7054 14.1043 45.1859 15.384 44.147 16.4505C43.1253 17.4992 41.8873 18.0236 40.4327 18.0236ZM29.0563 12.9845H40.0172C40.2423 12.9845 40.4327 12.9045 40.5886 12.7445C40.7444 12.5845 40.8223 12.3979 40.8223 12.1846V5.83901C40.8223 5.62571 40.7444 5.43907 40.5886 5.2791C40.4327 5.11913 40.2423 5.03914 40.0172 5.03914H29.0563V12.9845Z"
            fill="#5C46E6"
          />
          <path
            d="M64.5801 18.0769H53.5673C52.1127 18.0769 50.866 17.5526 49.8271 16.5039C48.8054 15.4374 48.2946 14.1665 48.2946 12.6912V5.41241C48.2946 3.91933 48.8054 2.64844 49.8271 1.59973C50.866 0.533243 52.1127 0 53.5673 0H64.5801C66.0346 0 67.2726 0.533243 68.2943 1.59973C69.3332 2.64844 69.8527 3.91933 69.8527 5.41241V12.6912C69.8527 14.1665 69.3332 15.4374 68.2943 16.5039C67.2726 17.5526 66.0346 18.0769 64.5801 18.0769Z"
            fill="#5C46E6"
          />
          <path
            d="M88.7274 18.0769H77.7146C76.26 18.0769 75.0133 17.5526 73.9744 16.5039C72.9527 15.4374 72.4419 14.1665 72.4419 12.6912V5.41241C72.4419 3.91933 72.9527 2.64844 73.9744 1.59973C75.0133 0.533243 76.26 0 77.7146 0H88.7274C90.1819 0 91.42 0.533243 92.4416 1.59973C93.4805 2.64844 94 5.41241 94 5.41241V12.6912C94 14.1665 93.4805 15.4374 92.4416 16.5039C91.42 17.5526 90.1819 18.0769 88.7274 18.0769Z"
            fill="#5C46E6"
          />
          <ellipse
            cx="53.3539"
            cy="5.27462"
            rx="2.70558"
            ry="2.7773"
            fill="white"
          />
          <ellipse
            cx="78.2453"
            cy="5.27462"
            rx="2.70558"
            ry="2.7773"
            fill="white"
          />
        </svg>
      </nuxt-link>
      <button
        @click="menuHandle = !menuHandle"
        class="h-[40px] w-[40px] flex justify-center items-center border-[1px] border-[#E0E0ED] border-solid rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.729187 1.33337C0.729187 0.953678 1.03699 0.645874 1.41669 0.645874H10.5834C10.9631 0.645874 11.2709 0.953678 11.2709 1.33337C11.2709 1.71307 10.9631 2.02087 10.5834 2.02087H1.41669C1.03699 2.02087 0.729187 1.71307 0.729187 1.33337ZM0.729187 5.00004C0.729187 4.62034 1.03699 4.31254 1.41669 4.31254H10.5834C10.9631 4.31254 11.2709 4.62034 11.2709 5.00004C11.2709 5.37974 10.9631 5.68754 10.5834 5.68754H1.41669C1.03699 5.68754 0.729187 5.37974 0.729187 5.00004ZM1.41669 7.97921C1.03699 7.97921 0.729187 8.28701 0.729187 8.66671C0.729187 9.0464 1.03699 9.35421 1.41669 9.35421H10.5834C10.9631 9.35421 11.2709 9.0464 11.2709 8.66671C11.2709 8.28701 10.9631 7.97921 10.5834 7.97921H1.41669Z"
            fill="#5C46E6"
          />
        </svg>
      </button>
    </div>

    <div class="menu" :class="{ show: menuHandle == true }">
      <div class="top">
        <div class="links">
          <NuxtLink to="/orders"
            >Buyurtmalar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 16L18 12M18 12L14 8M18 12L6 12"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
          <NuxtLink to="/freelancers"
            >Frilanserlar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 16L18 12M18 12L14 8M18 12L6 12"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
        </div>
        <div class="messenger">
          <NuxtLink to="/notifications">
            <span class="logo"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18.2395 8.97519L17.4943 9.05977L18.2395 8.97519ZM18.6867 12.9153L19.4319 12.8307V12.8307L18.6867 12.9153ZM5.31328 12.9153L4.56806 12.8307L4.56806 12.8307L5.31328 12.9153ZM5.76046 8.97519L6.50568 9.05977L5.76046 8.97519ZM4.44779 14.8721L3.87668 14.386H3.87668L4.44779 14.8721ZM19.5522 14.8721L18.9811 15.3583L19.5522 14.8721ZM14.2699 4.37366H13.5199C13.5199 4.69424 13.7237 4.97938 14.027 5.08322L14.2699 4.37366ZM9.73005 4.37366L9.973 5.08322C10.2763 4.97938 10.4801 4.69424 10.4801 4.37366H9.73005ZM15.7023 20.2632C15.8477 19.8753 15.6511 19.4431 15.2632 19.2977C14.8753 19.1523 14.4431 19.3489 14.2977 19.7368L15.7023 20.2632ZM9.7023 19.7368C9.55694 19.3489 9.12467 19.1523 8.7368 19.2977C8.34893 19.4431 8.15234 19.8753 8.2977 20.2632L9.7023 19.7368ZM17.7772 17.25H6.22281V18.75H17.7772V17.25ZM17.4943 9.05977L17.9415 12.9998L19.4319 12.8307L18.9848 8.89061L17.4943 9.05977ZM6.05849 12.9998L6.50568 9.05977L5.01525 8.89061L4.56806 12.8307L6.05849 12.9998ZM5.01889 15.3583C5.59621 14.6801 5.96028 13.8652 6.05849 12.9998L4.56806 12.8307C4.50519 13.3846 4.27067 13.9231 3.87668 14.386L5.01889 15.3583ZM17.9415 12.9998C18.0397 13.8652 18.4038 14.6801 18.9811 15.3583L20.1233 14.386C19.7293 13.9231 19.4948 13.3846 19.4319 12.8307L17.9415 12.9998ZM6.22281 17.25C5.56777 17.25 5.10443 16.926 4.89056 16.5492C4.68409 16.1854 4.68714 15.748 5.01889 15.3583L3.87668 14.386C3.11141 15.285 3.08777 16.4116 3.58598 17.2895C4.07679 18.1544 5.04947 18.75 6.22281 18.75V17.25ZM17.7772 18.75C18.9505 18.75 19.9232 18.1544 20.414 17.2895C20.9122 16.4116 20.8886 15.285 20.1233 14.386L18.9811 15.3583C19.3129 15.748 19.3159 16.1854 19.1094 16.5492C18.8956 16.926 18.4322 17.25 17.7772 17.25V18.75ZM15.0199 4.37366V4.26995H13.5199V4.37366H15.0199ZM18.9848 8.89061C18.7055 6.43026 16.8806 4.47476 14.5129 3.6641L14.027 5.08322C15.9441 5.73962 17.2913 7.27101 17.4943 9.05977L18.9848 8.89061ZM10.4801 4.37366V4.26995H8.98005V4.37366H10.4801ZM6.50568 9.05977C6.7087 7.27101 8.05587 5.73962 9.973 5.08322L9.48711 3.6641C7.11944 4.47476 5.29449 6.43026 5.01525 8.89061L6.50568 9.05977ZM12 2.75C12.8394 2.75 13.5199 3.4305 13.5199 4.26995H15.0199C15.0199 2.60208 13.6679 1.25 12 1.25V2.75ZM12 1.25C10.3321 1.25 8.98005 2.60208 8.98005 4.26995H10.4801C10.4801 3.4305 11.1606 2.75 12 2.75V1.25ZM14.2977 19.7368C13.975 20.5979 13.0846 21.25 12 21.25V22.75C13.6855 22.75 15.1516 21.7325 15.7023 20.2632L14.2977 19.7368ZM12 21.25C10.9154 21.25 10.025 20.5979 9.7023 19.7368L8.2977 20.2632C8.84835 21.7325 10.3145 22.75 12 22.75V21.25Z"
                  fill="#5C46E6"
                />
              </svg>
              Bildirishnoma
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 16L18 12M18 12L14 8M18 12L6 12"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
          <NuxtLink to="/">
            <span class="logo"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21Z"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Yozishmalar
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 16L18 12M18 12L14 8M18 12L6 12"
                stroke="#020105"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
        </div>
        <div class="langs">
          <button class="active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
            >
              <g clip-path="url(#clip0_3544_64885)">
                <rect y="0.5" width="32" height="23" rx="3" fill="#1A47B8" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.40415 0.5H0V4.33333L28.5774 23.5H32V19.6667L3.40415 0.5Z"
                  fill="white"
                />
                <path
                  d="M1.13539 0.5L32 21.2543V23.5H30.8912L0 2.72419V0.5H1.13539Z"
                  fill="#F93939"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.9524 0.5H32.0001V4.33333C32.0001 4.33333 12.2055 17.103 3.04768 23.5H6.10352e-05V19.6667L28.9524 0.5Z"
                  fill="white"
                />
                <path
                  d="M32 0.5H30.9665L0 21.2722V23.5H1.13539L32 2.74099V0.5Z"
                  fill="#F93939"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6375 0.5H20.3892V7.59445H32V16.4009H20.3892V23.5H11.6375V16.4009H0V7.59445H11.6375V0.5Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.4737 0.5H18.5263V9.34615H32V14.6538H18.5263V23.5H13.4737V14.6538H0V9.34615H13.4737V0.5Z"
                  fill="#F93939"
                />
              </g>
              <rect
                x="0.5"
                y="1"
                width="31"
                height="22"
                rx="2.5"
                stroke="#E7EDFB"
              />
              <defs>
                <clipPath id="clip0_3544_64885">
                  <rect y="0.5" width="32" height="23" rx="3" fill="white" />
                </clipPath>
              </defs>
            </svg>
            English
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
            >
              <g clip-path="url(#clip0_3544_64888)">
                <rect y="0.5" width="32" height="23" rx="3" fill="#1A47B8" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 15.8334H32V23.5H0V15.8334Z"
                  fill="#F93939"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0.5H32V8.16667H0V0.5Z"
                  fill="white"
                />
              </g>
              <rect
                x="0.5"
                y="1"
                width="31"
                height="22"
                rx="2.5"
                stroke="#E7EDFB"
              />
              <defs>
                <clipPath id="clip0_3544_64888">
                  <rect y="0.5" width="32" height="23" rx="3" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Русский
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
            >
              <g clip-path="url(#clip0_3544_64891)">
                <rect y="0.5" width="32" height="23" rx="3" fill="#F93939" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 17.3667H32V23.5H0V17.3667Z"
                  fill="#00B731"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0.5H32V6.63333H0V0.5Z"
                  fill="#03BCDB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 8.16666H32V15.8333H0V8.16666ZM7.61905 6.50299C7.38133 6.58733 7.12381 6.63333 6.85714 6.63333C5.59543 6.63333 4.57143 5.60293 4.57143 4.33333C4.57143 3.06373 5.59543 2.03333 6.85714 2.03333C7.12381 2.03333 7.38133 2.07933 7.61905 2.16366C6.73067 2.47953 6.09524 3.33206 6.09524 4.33333C6.09524 5.33459 6.73067 6.18866 7.61905 6.50299Z"
                  fill="white"
                />
                <path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.14288 3.56666H10.6667V5.09999H9.14288V3.56666ZM10.6667 2.03333H12.1905V3.56666H10.6667V2.03333ZM12.1905 3.56666H13.7143V5.09999H12.1905V3.56666ZM13.7143 2.03333H15.2381V3.56666H13.7143V2.03333ZM15.2381 3.56666H16.7619V5.09999H15.2381V3.56666ZM13.7143 5.09999H15.2381V6.63333H13.7143V5.09999ZM10.6667 5.09999H12.1905V6.63333H10.6667V5.09999Z"
                  fill="#1A47B8"
                />
              </g>
              <rect
                x="0.5"
                y="1"
                width="31"
                height="22"
                rx="2.5"
                stroke="#E7EDFB"
              />
              <defs>
                <clipPath id="clip0_3544_64891">
                  <rect y="0.5" width="32" height="23" rx="3" fill="white" />
                </clipPath>
              </defs>
            </svg>
            O'zbekcha
          </button>
        </div>
      </div>
      <div class="bottom">
        <div class="buttons">
          <NuxtLink to="/" class="login">Kirish</NuxtLink>
          <NuxtLink to="/registration" class="registration"
            >Ro'yxatdan o'tish</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuHandle: false,
      titleList: [
        {
          title: "Buyurtmalar",
          pathName: "orders",
          shodow: true,
        },
        {
          title: "Freelanserlar",
          pathName: "freelancers",
          shodow: true,
        },
        {
          title: "Портфолио",
          pathName: "profile-user-portfolio",
          shodow: true,
        },
        {
          title: "Профиль",
          pathName: "profile-user-info",
          shodow: true,
        },
      ],
    };
  },

  watch: {
    $route() {
      this.menuHandle = false;
    },
  },
};
</script>
<style lang="css" scoped>
.topper {
  padding-bottom: 14px;
  position: relative;
  z-index: 9;
}
.menu {
  z-index: 8;
  position: fixed;
  top: 0;
  padding: 68px 0 24px 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid #ebebeb;
  transition: 0.4s;
  transform: translateX(-100%);
}
.menu.show {
  transform: translateX(0);
}
.links a {
  color: var(--Black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ebebeb;
}
.messenger {
  margin: 16px;
  border-radius: 16px;
  background: var(--BG-grey, #f8f9ff);
  padding-inline: 16px;
}
.messenger a {
  color: var(--Black, #020105);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 16px;
  border-bottom: 1px solid #ebebeb;
}
.messenger span {
  display: flex;
  align-items: center;
  gap: 16px;
}
.messenger a:last-child {
  border-bottom: 0;
}
.langs {
  border-radius: 16px;
  background: var(--BG-grey, #f8f9ff);
  margin: 16px;
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.langs button {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.langs button.active {
  background: white;
  border-radius: 8px;
  color: var(--Main-color, #5c46e5);
}
.buttons {
  margin: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 8px;
}
.login {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--Border-darik, #e0e0ed);
  background: var(--White, #fff);
  padding: 16px 20px;
  color: var(--Main-color, #5c46e5);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  text-align: center;
}
.registration {
  border-radius: 12px;
  background: var(--Main-color, #5c46e5);
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  padding: 16px 20px;
  text-align: center;
}
</style>
