<template>
  <div
    class="mobile-header px-4 hidden bg-white w-full pb-[14px] pt-[7px] z-50 border-[0] border-b-[2px] border-solid border-apple-grey"
  >
    <div class="flex flex-col w-full gap-3">
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
            <ellipse cx="53.3539" cy="5.27462" rx="2.70558" ry="2.7773" fill="white" />
            <ellipse cx="78.2453" cy="5.27462" rx="2.70558" ry="2.7773" fill="white" />
          </svg>
        </nuxt-link>
        <button
          @click="menuHandle = !menuHandle"
          class="h-[40px] w-[40px] flex justify-center items-center border-[1px] border-[#E0E0ED] border-solid rounded-[50%]"
        >
          <svg
            v-if="menuHandle"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M14.8891 7.11089L7.11093 14.8891M14.8891 14.889L7.11093 7.11084"
              stroke="#353437"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
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

      <div
        v-if="pageData?.title"
        class="flex items-center"
        :class="pageData?.center ? 'justify-center' : 'justify-between'"
      >
        <button
          @click="$router.go(-1)"
          :class="{ 'pointer-events-none': !pageData?.link }"
          class="flex text-black font-semibold text-base gap-4 items-center"
        >
          <span
            v-if="pageData?.link"
            class="w-9 h-9 flex justify-center items-center rounded-full bg-bg-grey"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6665 5.83337L8.33317 10L11.6665 14.1667"
                stroke="#5C46E6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          {{ pageData?.title }}
        </button>
        <p class="h-9 flex items-center">{{ pageData?.info }}</p>
      </div>
      <div
        class="settings-tab xl:justify-center bg-white flex gap-6 xl:gap-12 xl:relative mb-[-14px]"
        v-if="$route.params.user && $route.name.includes('settings')"
      >
        <button
          :to="`/profile/${$route.params.user}/settings`"
          @click="$router.push(`/profile/${$route.params.user}/settings`)"
          :class="{ active: !$route.name.includes('specialities') }"
          class="px-6 py-3 xl:relative rounded-[12px] border-solid border-[2px] border-bg-grey bg-bg-grey xl:bg-white xl:px-0 xl:pt-0 xl:pb-2 xl:border-[0] xl:font-semibold text-base text-grey-64 font-medium xl:py-0 xl:flex xl:items-center xl:h-9 whitespace-nowrap xl:rounded-lg"
        >
          Shaxsiy ma'lumotlar
        </button>
        <button
          @click="$router.push(`/profile/${$route.params.user}/settings/specialities`)"
          :class="{ active: $route.name.includes('specialities') }"
          class="px-6 py-0 xl:flex xl:items-center xl:relative rounded-[12px] border-solid border-[2px] xl:bg-white xl:px-0 xl:pt-0 xl:pb-2 xl:border-[0] xl:font-semibold border-bg-grey bg-bg-grey text-base text-grey-64 font-medium xl:py-2 xl:h-9 whitespace-nowrap xl:rounded-lg"
        >
          Mutaxassisliklar
        </button>
      </div>
    </div>
    <div class="menu" :class="{ show: menuHandle == true }">
      <div class="top border-[0] border-apple-grey border-t-[2px] border-solid">
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
              <rect x="0.5" y="1" width="31" height="22" rx="2.5" stroke="#E7EDFB" />
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
              <rect x="0.5" y="1" width="31" height="22" rx="2.5" stroke="#E7EDFB" />
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
              <rect x="0.5" y="1" width="31" height="22" rx="2.5" stroke="#E7EDFB" />
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
      <div
        class="user flex justify-between items-center py-3 px-6 rounded-2xl bg-bg-grey mx-4"
        v-if="$store.state.auth && Boolean($store.state.userInfo['name'])"
      >
        <div class="flex gap-6 items-center">
          <div class="h-12 w-12 rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              v-if="$store.state.userInfo['avatar']"
              :src="`${imgUrl}${$store.state.userInfo['avatar']}`"
              alt=""
            />
            <img
              class="w-full h-full"
              v-else
              src="@/assets/images/user-avatar.jpg"
              alt=""
            />
          </div>

          <p class="text-base text-black font-semibold">
            {{ $store.state.userInfo["name"] }}
          </p>
        </div>
        <button @click="open">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.10938 8.89062H24.888M7.10938 16H24.888M7.10938 23.1093H24.888"
              stroke="#5C46E6"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!-- </div> -->
        <vue-bottom-sheet-vue2
          ref="headerBottomSheet"
          class="bottom-drawer spicial-drawer h-full"
          :init-sheet-height="500"
          :can-swipe="false"
        >
          <ul v-if="userType" class="rounded-[12px] px-2 py-3 flex flex-col gap-8">
            <li>
              <button
                @click="userType = !userType"
                class="rounded-[12px] bg-green py-4 w-full flex justify-center text-white font-medium text-base hover:text-white"
              >
                Перейти на “заказчик”
              </button>
            </li>
            <li>
              <button
                :class="{
                  ' pointer-events-none': $route.path == '/profile/freelancer/info',
                }"
                @click="toPage('/profile/freelancer/info')"
                class="w-full flex gap-2 justify-between items-center px-4 font-medium text-base text-black"
              >
                <span class="flex gap-4"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="3"
                      cy="3"
                      r="3"
                      transform="matrix(1 0 0 -1 9 12)"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Профиль
                </span>
                <span v-html="iconArrow"></span>
              </button>
            </li>
            <li>
              <button
                :class="{
                  ' pointer-events-none':
                    $route.path.includes('/profile/freelancer/orders') &&
                    $route.path.includes('status'),
                }"
                @click="toPage('/profile/freelancer/orders/active/status')"
                class="w-full flex justify-between gap-2 px-4 font-medium text-base text-black"
              >
                <span class="flex gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14L9.08225 12.1963C9.72077 11.132 11.2247 11.0309 12 12C12.7753 12.9691 14.2792 12.8679 14.9178 11.8037L16 10M12 18V22M4 6H20C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6ZM3 6H21V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V6Z"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  Проект
                </span>
                <span v-html="iconArrow"></span>
              </button>
            </li>
            <li>
              <button
                :class="{
                  ' pointer-events-none': $route.path == '/profile/freelancer/portfolio',
                }"
                @click="toPage('/profile/freelancer/portfolio')"
                class="w-full flex justify-between gap-2 px-4 font-medium text-base text-black"
              >
                <span class="flex gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="6"
                      width="20"
                      height="16"
                      rx="4"
                      stroke="#353437"
                      stroke-width="1.5"
                    />
                    <path
                      d="M8 6V5C8 3.34315 9.34315 2 11 2H13C14.6569 2 16 3.34315 16 5V6"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M2 11C2 11 8.09476 15 12 15C15.9052 15 22 11 22 11"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z"
                      fill="#353437"
                    />
                  </svg>
                  Портфолио
                </span>

                <span v-html="iconArrow"></span>
              </button>
            </li>
            <li>
              <button
                @click="toPage('/profile/freelancer/settings')"
                :class="{
                  ' pointer-events-none': $route.path == '/profile/freelancer/settings',
                }"
                class="w-full flex justify-between gap-2 px-4 font-medium text-base text-black"
              >
                <span class="flex gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7439 15.7206L20.1043 15.3289V15.3289L20.7439 15.7206ZM19.7894 17.2794L20.429 17.6711V17.6711L19.7894 17.2794ZM3.25609 8.27942L2.61648 7.88775H2.61648L3.25609 8.27942ZM4.21064 6.72057L4.85025 7.11223L4.21064 6.72057ZM6.81852 6.06172L7.1771 5.403L7.1771 5.403L6.81852 6.06172ZM3.95487 10.7383L3.59629 11.397H3.59629L3.95487 10.7383ZM17.1815 17.9383L16.8229 18.597L16.8229 18.597L17.1815 17.9383ZM20.0451 13.2617L19.6866 13.9204V13.9205L20.0451 13.2617ZM4.21064 17.2794L3.57103 17.6711L3.57103 17.6711L4.21064 17.2794ZM3.25609 15.7206L3.8957 15.3289L3.8957 15.3289L3.25609 15.7206ZM19.7894 6.72058L20.429 6.32892V6.32892L19.7894 6.72058ZM20.7439 8.27943L20.1043 8.67109V8.67109L20.7439 8.27943ZM20.0451 10.7383L20.4037 11.397L20.0451 10.7383ZM17.1815 6.06174L17.5401 6.72046V6.72046L17.1815 6.06174ZM3.95487 13.2617L4.31345 13.9205H4.31345L3.95487 13.2617ZM6.81851 17.9383L6.45994 17.2795L6.45993 17.2795L6.81851 17.9383ZM17.08 6.11698L16.7214 5.45825L17.08 6.11698ZM6.92 6.11697L6.56142 6.77569L6.56142 6.77569L6.92 6.11697ZM17.08 17.883L17.4386 17.2243L17.4386 17.2243L17.08 17.883ZM6.92 17.883L7.27858 18.5418L7.27858 18.5418L6.92 17.883ZM11.0455 3.75H12.9545V2.25H11.0455V3.75ZM12.9545 20.25H11.0455V21.75H12.9545V20.25ZM11.0455 20.25C10.3631 20.25 9.88635 19.7389 9.88635 19.2H8.38635C8.38635 20.6493 9.61906 21.75 11.0455 21.75V20.25ZM14.1136 19.2C14.1136 19.7389 13.6369 20.25 12.9545 20.25V21.75C14.3809 21.75 15.6136 20.6493 15.6136 19.2H14.1136ZM12.9545 3.75C13.6369 3.75 14.1136 4.26107 14.1136 4.8H15.6136C15.6136 3.35071 14.3809 2.25 12.9545 2.25V3.75ZM11.0455 2.25C9.61906 2.25 8.38635 3.35071 8.38635 4.8H9.88635C9.88635 4.26107 10.3631 3.75 11.0455 3.75V2.25ZM20.1043 15.3289L19.1498 16.8878L20.429 17.6711L21.3835 16.1122L20.1043 15.3289ZM3.8957 8.67108L4.85025 7.11223L3.57103 6.32891L2.61648 7.88775L3.8957 8.67108ZM4.85025 7.11223C5.15889 6.6082 5.88055 6.40506 6.45993 6.72045L7.1771 5.403C5.93027 4.72428 4.31676 5.11109 3.57103 6.32891L4.85025 7.11223ZM4.31345 10.0795C3.75746 9.77688 3.6043 9.14696 3.8957 8.67108L2.61648 7.88775C1.85352 9.13373 2.32606 10.7055 3.59629 11.397L4.31345 10.0795ZM19.1498 16.8878C18.8411 17.3918 18.1195 17.5949 17.5401 17.2795L16.8229 18.597C18.0697 19.2757 19.6832 18.8889 20.429 17.6711L19.1498 16.8878ZM21.3835 16.1122C22.1465 14.8663 21.6739 13.2945 20.4037 12.603L19.6866 13.9205C20.2425 14.2231 20.3957 14.853 20.1043 15.3289L21.3835 16.1122ZM4.85025 16.8878L3.8957 15.3289L2.61648 16.1122L3.57103 17.6711L4.85025 16.8878ZM19.1498 7.11225L20.1043 8.67109L21.3835 7.88777L20.429 6.32892L19.1498 7.11225ZM20.1043 8.67109C20.3957 9.14697 20.2425 9.77689 19.6866 10.0795L20.4037 11.397C21.6739 10.7055 22.1465 9.13374 21.3835 7.88777L20.1043 8.67109ZM17.5401 6.72046C18.1195 6.40507 18.8411 6.60822 19.1498 7.11225L20.429 6.32892C19.6832 5.1111 18.0697 4.72429 16.8229 5.40301L17.5401 6.72046ZM3.8957 15.3289C3.6043 14.853 3.75746 14.2231 4.31345 13.9205L3.59629 12.603C2.32606 13.2945 1.85352 14.8663 2.61648 16.1122L3.8957 15.3289ZM3.57103 17.6711C4.31675 18.8889 5.93027 19.2757 7.1771 18.597L6.45993 17.2795C5.88055 17.5949 5.15889 17.3918 4.85025 16.8878L3.57103 17.6711ZM17.4386 6.7757L17.5401 6.72046L16.8229 5.40301L16.7214 5.45825L17.4386 6.7757ZM6.45993 6.72045L6.56142 6.77569L7.27858 5.45824L7.1771 5.403L6.45993 6.72045ZM17.5401 17.2795L17.4386 17.2243L16.7214 18.5417L16.8229 18.597L17.5401 17.2795ZM6.56142 17.2243L6.45994 17.2795L7.17709 18.597L7.27858 18.5418L6.56142 17.2243ZM3.59629 11.397C4.07404 11.6571 4.07404 12.3429 3.59629 12.603L4.31345 13.9205C5.83498 13.0922 5.83498 10.9078 4.31345 10.0795L3.59629 11.397ZM7.27858 18.5418C7.77798 18.2699 8.38635 18.6314 8.38635 19.2H9.88635C9.88635 17.4934 8.06035 16.4084 6.56142 17.2243L7.27858 18.5418ZM15.6136 19.2C15.6136 18.6314 16.222 18.2699 16.7214 18.5417L17.4386 17.2243C15.9397 16.4083 14.1136 17.4934 14.1136 19.2H15.6136ZM20.4037 12.603C19.926 12.3429 19.926 11.6571 20.4037 11.397L19.6866 10.0795C18.165 10.9078 18.165 13.0922 19.6866 13.9204L20.4037 12.603ZM6.56142 6.77569C8.06035 7.59165 9.88635 6.50663 9.88635 4.8H8.38635C8.38635 5.3686 7.77798 5.7301 7.27858 5.45824L6.56142 6.77569ZM16.7214 5.45825C16.222 5.73011 15.6136 5.36861 15.6136 4.8H14.1136C14.1136 6.50663 15.9397 7.59166 17.4386 6.7757L16.7214 5.45825ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 14.25C10.7574 14.25 9.75001 13.2426 9.75001 12H8.25001C8.25001 14.0711 9.92894 15.75 12 15.75V14.25ZM9.75001 12C9.75001 10.7574 10.7574 9.75 12 9.75V8.25C9.92894 8.25 8.25001 9.92893 8.25001 12H9.75001ZM12 9.75C13.2426 9.75 14.25 10.7574 14.25 12H15.75C15.75 9.92893 14.0711 8.25 12 8.25V9.75Z"
                      fill="#353437"
                    />
                  </svg>

                  Настройки
                </span>
                <span v-html="iconArrow"></span>
              </button>
            </li>
            <li>
              <button
                @click="toPage('/profile/freelancer/comments')"
                class="w-full flex justify-between gap-2 px-4 font-medium text-base text-black"
              >
                <span class="flex gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 3H11C6.02944 3 2 7.02944 2 12V17C2 19.2091 3.79086 21 6 21H13C17.9706 21 22 16.9706 22 12C22 7.02944 17.9706 3 13 3Z"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <circle cx="12" cy="12" r="1" fill="#353437" />
                    <circle cx="16" cy="12" r="1" fill="#353437" />
                    <circle cx="8" cy="12" r="1" fill="#353437" />
                  </svg>

                  Отзывы
                </span>
                <span v-html="iconArrow"></span>
              </button>
            </li>
            <li>
              <button
                @click="openLogout"
                :class="{
                  ' pointer-events-none': $route.path == '/profile/customer/settings',
                }"
                class="w-full py-3 rounded-[12px] flex justify-center gap-4 px-4 font-medium text-base text-light-red bg-[#FFE3EA]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9L9 12M9 12L12 15M9 12H21"
                    stroke="#F2154A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 7.5V7C15 4.79086 13.2091 3 11 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H11C13.2091 21 15 19.2091 15 17V16.5"
                    stroke="#F2154A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                Выход
              </button>
            </li>
          </ul>
          <ul v-else class="rounded-[12px] px-2 py-3 flex flex-col gap-8">
            <li>
              <button
                @click="userType = !userType"
                class="rounded-[12px] bg-main-color py-4 w-full flex justify-center text-white font-medium text-base hover:text-white"
              >
                Перейти на “фрилансер”
              </button>
            </li>

            <li>
              <button
                :class="{
                  ' pointer-events-none':
                    $route.path.includes('/profile/customer/orders') &&
                    $route.path.includes('status'),
                }"
                @click="toPage('/profile/customer/orders/active/status')"
                class="w-full flex justify-between gap-2 px-4 font-medium text-base text-black"
              >
                <span class="flex gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 14L9.08225 12.1963C9.72077 11.132 11.2247 11.0309 12 12C12.7753 12.9691 14.2792 12.8679 14.9178 11.8037L16 10M12 18V22M4 6H20C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6ZM3 6H21V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V6Z"
                      stroke="#353437"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  Проект
                </span>
                <span v-html="iconArrow"></span>
              </button>
            </li>

            <li>
              <button
                @click="toPage('/profile/customer/settings')"
                :class="{
                  ' pointer-events-none': $route.path == '/profile/customer/settings',
                }"
                class="w-full flex justify-between gap-2 px-4 font-medium text-base text-black"
              >
                <span class="flex gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7439 15.7206L20.1043 15.3289V15.3289L20.7439 15.7206ZM19.7894 17.2794L20.429 17.6711V17.6711L19.7894 17.2794ZM3.25609 8.27942L2.61648 7.88775H2.61648L3.25609 8.27942ZM4.21064 6.72057L4.85025 7.11223L4.21064 6.72057ZM6.81852 6.06172L7.1771 5.403L7.1771 5.403L6.81852 6.06172ZM3.95487 10.7383L3.59629 11.397H3.59629L3.95487 10.7383ZM17.1815 17.9383L16.8229 18.597L16.8229 18.597L17.1815 17.9383ZM20.0451 13.2617L19.6866 13.9204V13.9205L20.0451 13.2617ZM4.21064 17.2794L3.57103 17.6711L3.57103 17.6711L4.21064 17.2794ZM3.25609 15.7206L3.8957 15.3289L3.8957 15.3289L3.25609 15.7206ZM19.7894 6.72058L20.429 6.32892V6.32892L19.7894 6.72058ZM20.7439 8.27943L20.1043 8.67109V8.67109L20.7439 8.27943ZM20.0451 10.7383L20.4037 11.397L20.0451 10.7383ZM17.1815 6.06174L17.5401 6.72046V6.72046L17.1815 6.06174ZM3.95487 13.2617L4.31345 13.9205H4.31345L3.95487 13.2617ZM6.81851 17.9383L6.45994 17.2795L6.45993 17.2795L6.81851 17.9383ZM17.08 6.11698L16.7214 5.45825L17.08 6.11698ZM6.92 6.11697L6.56142 6.77569L6.56142 6.77569L6.92 6.11697ZM17.08 17.883L17.4386 17.2243L17.4386 17.2243L17.08 17.883ZM6.92 17.883L7.27858 18.5418L7.27858 18.5418L6.92 17.883ZM11.0455 3.75H12.9545V2.25H11.0455V3.75ZM12.9545 20.25H11.0455V21.75H12.9545V20.25ZM11.0455 20.25C10.3631 20.25 9.88635 19.7389 9.88635 19.2H8.38635C8.38635 20.6493 9.61906 21.75 11.0455 21.75V20.25ZM14.1136 19.2C14.1136 19.7389 13.6369 20.25 12.9545 20.25V21.75C14.3809 21.75 15.6136 20.6493 15.6136 19.2H14.1136ZM12.9545 3.75C13.6369 3.75 14.1136 4.26107 14.1136 4.8H15.6136C15.6136 3.35071 14.3809 2.25 12.9545 2.25V3.75ZM11.0455 2.25C9.61906 2.25 8.38635 3.35071 8.38635 4.8H9.88635C9.88635 4.26107 10.3631 3.75 11.0455 3.75V2.25ZM20.1043 15.3289L19.1498 16.8878L20.429 17.6711L21.3835 16.1122L20.1043 15.3289ZM3.8957 8.67108L4.85025 7.11223L3.57103 6.32891L2.61648 7.88775L3.8957 8.67108ZM4.85025 7.11223C5.15889 6.6082 5.88055 6.40506 6.45993 6.72045L7.1771 5.403C5.93027 4.72428 4.31676 5.11109 3.57103 6.32891L4.85025 7.11223ZM4.31345 10.0795C3.75746 9.77688 3.6043 9.14696 3.8957 8.67108L2.61648 7.88775C1.85352 9.13373 2.32606 10.7055 3.59629 11.397L4.31345 10.0795ZM19.1498 16.8878C18.8411 17.3918 18.1195 17.5949 17.5401 17.2795L16.8229 18.597C18.0697 19.2757 19.6832 18.8889 20.429 17.6711L19.1498 16.8878ZM21.3835 16.1122C22.1465 14.8663 21.6739 13.2945 20.4037 12.603L19.6866 13.9205C20.2425 14.2231 20.3957 14.853 20.1043 15.3289L21.3835 16.1122ZM4.85025 16.8878L3.8957 15.3289L2.61648 16.1122L3.57103 17.6711L4.85025 16.8878ZM19.1498 7.11225L20.1043 8.67109L21.3835 7.88777L20.429 6.32892L19.1498 7.11225ZM20.1043 8.67109C20.3957 9.14697 20.2425 9.77689 19.6866 10.0795L20.4037 11.397C21.6739 10.7055 22.1465 9.13374 21.3835 7.88777L20.1043 8.67109ZM17.5401 6.72046C18.1195 6.40507 18.8411 6.60822 19.1498 7.11225L20.429 6.32892C19.6832 5.1111 18.0697 4.72429 16.8229 5.40301L17.5401 6.72046ZM3.8957 15.3289C3.6043 14.853 3.75746 14.2231 4.31345 13.9205L3.59629 12.603C2.32606 13.2945 1.85352 14.8663 2.61648 16.1122L3.8957 15.3289ZM3.57103 17.6711C4.31675 18.8889 5.93027 19.2757 7.1771 18.597L6.45993 17.2795C5.88055 17.5949 5.15889 17.3918 4.85025 16.8878L3.57103 17.6711ZM17.4386 6.7757L17.5401 6.72046L16.8229 5.40301L16.7214 5.45825L17.4386 6.7757ZM6.45993 6.72045L6.56142 6.77569L7.27858 5.45824L7.1771 5.403L6.45993 6.72045ZM17.5401 17.2795L17.4386 17.2243L16.7214 18.5417L16.8229 18.597L17.5401 17.2795ZM6.56142 17.2243L6.45994 17.2795L7.17709 18.597L7.27858 18.5418L6.56142 17.2243ZM3.59629 11.397C4.07404 11.6571 4.07404 12.3429 3.59629 12.603L4.31345 13.9205C5.83498 13.0922 5.83498 10.9078 4.31345 10.0795L3.59629 11.397ZM7.27858 18.5418C7.77798 18.2699 8.38635 18.6314 8.38635 19.2H9.88635C9.88635 17.4934 8.06035 16.4084 6.56142 17.2243L7.27858 18.5418ZM15.6136 19.2C15.6136 18.6314 16.222 18.2699 16.7214 18.5417L17.4386 17.2243C15.9397 16.4083 14.1136 17.4934 14.1136 19.2H15.6136ZM20.4037 12.603C19.926 12.3429 19.926 11.6571 20.4037 11.397L19.6866 10.0795C18.165 10.9078 18.165 13.0922 19.6866 13.9204L20.4037 12.603ZM6.56142 6.77569C8.06035 7.59165 9.88635 6.50663 9.88635 4.8H8.38635C8.38635 5.3686 7.77798 5.7301 7.27858 5.45824L6.56142 6.77569ZM16.7214 5.45825C16.222 5.73011 15.6136 5.36861 15.6136 4.8H14.1136C14.1136 6.50663 15.9397 7.59166 17.4386 6.7757L16.7214 5.45825ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 14.25C10.7574 14.25 9.75001 13.2426 9.75001 12H8.25001C8.25001 14.0711 9.92894 15.75 12 15.75V14.25ZM9.75001 12C9.75001 10.7574 10.7574 9.75 12 9.75V8.25C9.92894 8.25 8.25001 9.92893 8.25001 12H9.75001ZM12 9.75C13.2426 9.75 14.25 10.7574 14.25 12H15.75C15.75 9.92893 14.0711 8.25 12 8.25V9.75Z"
                      fill="#353437"
                    />
                  </svg>

                  Настройки
                </span>
                <span v-html="iconArrow"></span>
              </button>
            </li>
            <li>
              <button
                @click="openLogout"
                :class="{
                  ' pointer-events-none': $route.path == '/profile/customer/settings',
                }"
                class="w-full py-3 rounded-[12px] flex justify-center gap-4 px-4 font-medium text-base text-light-red bg-[#FFE3EA]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9L9 12M9 12L12 15M9 12H21"
                    stroke="#F2154A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 7.5V7C15 4.79086 13.2091 3 11 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H11C13.2091 21 15 19.2091 15 17V16.5"
                    stroke="#F2154A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                Выход
              </button>
            </li>
          </ul>
        </vue-bottom-sheet-vue2>
      </div>
      <div class="bottom" v-else>
        <div class="grid grid-cols-2 gap-2 px-4">
          <NuxtLink to="/" class="login">Kirish</NuxtLink>
          <NuxtLink to="/registration" class="registration">Ro'yxatdan o'tish</NuxtLink>
        </div>
      </div>
    </div>
    <Logout ref="logout" />
  </div>
</template>

<script>
import Logout from "../modals/Logout.vue";

export default {
  data() {
    return {
      iconArrow: ` <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16L18 12M18 12L14 8M18 12L6 12"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`,
      visibleLogout: false,
      menuHandle: false,
      userType: true,
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
  computed: {
    baseUrl() {
      return process.env.BASE_URL;
    },
    imgUrl() {
      return this.baseUrl + "/storage/";
    },
    pageData() {
      return this.$store.state.pageData;
    },
  },
  methods: {
    toPage(link) {
      this.close();
      this.$router.push(link);
    },
    openLogout() {
      this.$refs.logout.openModal();
      this.$refs.logout.open();
    },
    open() {
      this.$refs.headerBottomSheet.open();
    },
    close() {
      this.$refs.headerBottomSheet.close();
    },
  },

  watch: {
    "$route.path"() {
      this.menuHandle = false;
    },
  },
  components: { Logout },
};
</script>
<style lang="css" scoped>
.topper {
  /* padding-bottom: 14px; */
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
.settings-tab .active {
  border-color: var(--main-color);
  color: var(--main-color);
  background-color: #fff;
}
.settings-tab button::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 4px;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
}
@media (max-width: 1200px) {
  .settings-tab .active::after {
    background: var(--Light-purple, #5d5fef);
  }
}
</style>
