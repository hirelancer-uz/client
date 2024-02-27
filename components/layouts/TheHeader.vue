<template lang="html">
  <div class="header bg-white h-[108px] flex items-center ">
    <div class="max-w-[1776px] mx-auto flex justify-between w-full">
      <div class="left flex gap-[80px] items-center">
        <div class="logo">
          <nuxt-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="145"
              height="27"
              viewBox="0 0 145 27"
              fill="none"
            >
              <path
                d="M24.969 26.9204H8.08407C5.85398 26.9204 3.94248 26.1372 2.34956 24.5708C0.783186 22.9779 0 21.0664 0 18.8363V0H7.52655V18.1593C7.52655 18.5044 7.64602 18.7965 7.88496 19.0354C8.12389 19.2743 8.40265 19.3938 8.72124 19.3938H24.3319C24.677 19.3938 24.969 19.2743 25.208 19.0354C25.4469 18.7965 25.5664 18.5044 25.5664 18.1593V0H33.0531V18.8363C33.0531 21.0664 32.2566 22.9779 30.6637 24.5708C29.0973 26.1372 27.1991 26.9204 24.969 26.9204Z"
                fill="#5C46E6"
              />
              <path
                d="M61.992 26.9204H37.023V0H61.992C64.2221 0 66.1203 0.79646 67.6867 2.38938C69.2796 3.95575 70.076 5.85398 70.076 8.08407V18.8363C70.076 21.0664 69.2796 22.9779 67.6867 24.5708C66.1203 26.1372 64.2221 26.9204 61.992 26.9204ZM44.5495 19.3938H61.3548C61.6999 19.3938 61.992 19.2743 62.2309 19.0354C62.4699 18.7965 62.5893 18.5177 62.5893 18.1991V8.72124C62.5893 8.40265 62.4699 8.12389 62.2309 7.88496C61.992 7.64602 61.6999 7.52655 61.3548 7.52655H44.5495V19.3938Z"
                fill="#5C46E6"
              />
              <path
                d="M99.0149 27H82.13C79.8999 27 77.9884 26.2168 76.3955 24.6504C74.8291 23.0575 74.0459 21.1593 74.0459 18.9558V8.08407C74.0459 5.85398 74.8291 3.95575 76.3955 2.38938C77.9884 0.79646 79.8999 0 82.13 0H99.0149C101.245 0 103.143 0.79646 104.71 2.38938C106.303 3.95575 107.099 5.85398 107.099 8.08407V18.9558C107.099 21.1593 106.303 23.0575 104.71 24.6504C103.143 26.2168 101.245 27 99.0149 27Z"
                fill="#5C46E6"
              />
              <path
                d="M136.038 27H119.153C116.923 27 115.011 26.2168 113.418 24.6504C111.852 23.0575 111.069 21.1593 111.069 18.9558V8.08407C111.069 5.85398 111.852 3.95575 113.418 2.38938C115.011 0.79646 116.923 0 119.153 0H136.038C138.268 0 140.166 0.79646 141.733 2.38938C143.326 3.95575 144.122 8.08407 144.122 8.08407V18.9558C144.122 21.1593 143.326 23.0575 141.733 24.6504C140.166 26.2168 138.268 27 136.038 27Z"
                fill="#5C46E6"
              />
              <circle cx="81.8028" cy="7.8784" r="4.14823" fill="white" />
              <circle cx="119.966" cy="7.8784" r="4.14823" fill="white" /></svg
          ></nuxt-link>
        </div>
        <div class="menu flex gap-[40px]">
          <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/orders"
            >Buyurtmalar</nuxt-link
          >
          <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/freelancers"
            >Frilanserlar</nuxt-link
          >
          <!-- <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/"
            >Ishlar</nuxt-link
          >
          <nuxt-link class="text-[18px] text-black font-tt font-normal" to="/"
            >Forum</nuxt-link
          > -->
        </div>
      </div>
      <div class="flex gap-6 items-center">
        <a-dropdown :trigger="['click']">
          <button
            class="flex text-[18px] text-black gap-2 items-center"
            @click="(e) => e.preventDefault()"
          >
            <span v-html="currentLangObj.icon"></span>
            {{ currentLangObj.name }}
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.344011 0.943085C0.559642 0.673546 0.95295 0.629845 1.22249 0.845476L4.99872 3.86646L8.77495 0.845476C9.04449 0.629845 9.4378 0.673546 9.65343 0.943085C9.86906 1.21262 9.82536 1.60593 9.55582 1.82156L5.38916 5.1549C5.16089 5.3375 4.83655 5.3375 4.60829 5.1549L0.44162 1.82156C0.172081 1.60593 0.12838 1.21262 0.344011 0.943085Z"
                fill="#020105"
              />
            </svg>
          </button>
          <a-menu slot="overlay">
            <a-menu-item
              :key="lang.id"
              v-for="lang in langList"
              @click="currentLang = lang.id"
            >
              <span class="flex gap-1 items-center justify-center"
                ><span v-html="lang.icon"></span>{{ lang.name }}</span
              >
            </a-menu-item>
            <!-- <a-menu-item key="1">
              <span class="flex gap-1 items-center"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="34px"
                  height="22px"
                  viewBox="0 0 36 36"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--twemoji"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fill="#CE2028"
                    d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z"
                  />
                  <path fill="#22408C" d="M0 13h36v10H0z" />
                  <path
                    fill="#EEE"
                    d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"
                  /></svg
                >RU</span
              >
            </a-menu-item> -->
          </a-menu>
        </a-dropdown>
        <span class="flex bg-grey-40 h-6 w-[1px]"></span>

        <div class="right flex gap-12 items-center">
          <div
            class="buttons flex gap-4"
            v-if="$store.state.auth && Boolean($store.state.userInfo['name'])"
          >
            <!-- <button
              class="w-[52px] h-[52px] rounded-full border-[2px] border-grey-8 border-solid flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M23.2544 24.7983L15 20.0564L6.74561 24.7983V8.91603C6.74561 6.8645 8.40837 5.20174 10.4599 5.20174H19.5388C21.5904 5.20174 23.2531 6.8645 23.2531 8.91603V24.7983H23.2544Z"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> -->
            <button
              @click="$router.push('/notifications')"
              class="relative w-[52px] h-[52px] rounded-full border-[2px] border-grey-8 border-solid flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M17.8253 25.2032C17.2657 26.1837 16.2096 26.8449 15 26.8449C13.7891 26.8449 12.733 26.1837 12.1734 25.2019M3.44482 21.5842H26.5563L23.8821 17.5876C23.4735 16.976 23.2543 16.2579 23.2543 15.5225V11.7005C23.2543 7.14184 19.5586 3.44612 15 3.44612C10.4413 3.44612 6.74559 7.14184 6.74559 11.7005V15.5237C6.74559 16.2592 6.52768 16.9785 6.11787 17.5889L3.44482 21.5842Z"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <!-- <span class="absolute bottom-0 right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#F2154A" />
                </svg>
              </span> -->
            </button>
            <button
              class="w-[52px] h-[52px] rounded-full border-[2px] border-grey-8 border-solid flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M3.94501 8.61269L15 18.0866L26.0549 8.61269M22.8408 23.2519H7.15911C5.10759 23.2519 3.44482 21.5892 3.44482 19.5376V10.4624C3.44482 8.41089 5.10759 6.74812 7.15911 6.74812H22.8421C24.8936 6.74812 26.5563 8.41089 26.5563 10.4624V19.5389C26.5551 21.5892 24.8923 23.2519 22.8408 23.2519Z"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            class="user flex gap-6 items-center py-3 px-6 rounded-2xl bg-bg-grey"
            v-if="$store.state.auth && Boolean($store.state.userInfo['name'])"
          >
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
            <!-- <div class="flex flex-col"> -->
            <!-- <p class="text-[18px] text-black">{{ $store.state.userInfo["name"] }}</p> -->
            <!-- <p class="text-[14px] text-green">Я - Фрилансер</p> -->
            <p class="text-base text-black font-semibold">
              {{ $store.state.userInfo["name"] }}
            </p>
            <!-- </div> -->
            <a-dropdown :trigger="['click']" v-model="dropdown">
              <button @click="(e) => e.preventDefault()">
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
              <ul
                v-if="userType"
                class="menu-container bg-bg-grey rounded-[12px] px-2 py-3 flex flex-col gap-2"
                slot="overlay"
              >
                <li key="0">
                  <button
                    @click="userType = !userType"
                    class="rounded-[12px] bg-green py-2 w-[230px] flex justify-center text-white font-medium text-base hover:text-white"
                  >
                    Перейти на “заказчик”
                  </button>
                </li>
                <li key="1">
                  <button
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path == '/profile/freelancer',
                    }"
                    @click="$router.push('/profile/freelancer')"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-black hover:bg-grey-light"
                  >
                    <svg
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
                  </button>
                </li>
                <li key="2">
                  <button
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path.includes('/profile/freelancer/orders') &&
                        $route.path.includes('status'),
                    }"
                    @click="$router.push('/profile/freelancer/orders/active/status')"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-black hover:bg-grey-light"
                  >
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
                  </button>
                </li>
                <li key="3">
                  <button
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path == '/profile/freelancer/portfolio',
                    }"
                    @click="$router.push('/profile/freelancer/portfolio')"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-black hover:bg-grey-light"
                  >
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
                  </button>
                </li>
                <li key="4">
                  <button
                    @click="$router.push('/profile/freelancer/settings')"
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path == '/profile/freelancer/settings',
                    }"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-black hover:bg-grey-light"
                  >
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
                  </button>
                </li>
                <li key="5">
                  <button
                    @click="$router.push('/profile/freelancer/comments')"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-black hover:bg-grey-light"
                  >
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
                  </button>
                </li>
                <span class="w-full flex h-[1px] bg-border-darik"></span>
                <li key="6">
                  <button
                    @click="visibleLogout = true"
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path == '/profile/customer/settings',
                    }"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-light-red hover:bg-grey-light"
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
              <ul
                v-else
                class="menu-container bg-bg-grey rounded-[12px] px-2 py-3 flex flex-col gap-2"
                slot="overlay"
              >
                <li key="0">
                  <button
                    @click="userType = !userType"
                    class="rounded-[12px] bg-main-color py-2 w-[230px] flex justify-center text-white font-medium text-base hover:text-white"
                  >
                    Перейти на “фрилансер”
                  </button>
                </li>

                <li key="1">
                  <button
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path.includes('/profile/customer/orders') &&
                        $route.path.includes('status'),
                    }"
                    @click="$router.push('/profile/customer/orders/active/status')"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-black hover:bg-grey-light"
                  >
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
                  </button>
                </li>

                <li key="2">
                  <button
                    @click="$router.push('/profile/customer/settings')"
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path == '/profile/customer/settings',
                    }"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-black hover:bg-grey-light"
                  >
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
                  </button>
                </li>
                <span class="w-full flex h-[1px] bg-border-darik"></span>
                <li key="3">
                  <button
                    @click="visibleLogout = true"
                    :class="{
                      'bg-grey-light pointer-events-none':
                        $route.path == '/profile/customer/settings',
                    }"
                    class="w-full py-2 flex gap-2 rounded-xl bg-bg-grey px-4 font-medium text-base text-light-red hover:bg-grey-light"
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
            </a-dropdown>
          </div>
          <div class="login flex gap-6" v-else>
            <button
              @click="$router.push('/registration')"
              class="text-black text-[18px] font-normal"
            >
              {{
                $store.state.auth && Boolean($store.state.userInfo["name"])
                  ? $store.state.userInfo["name"]
                  : "Kirish"
              }}
            </button>
            <button
              @click="$router.push('/registration')"
              class="rounded-xl text-4 py-3 px-6 font-medium font-tt bg-blue text-white"
            >
              Ro’yxatdan o’ting
            </button>
          </div>
        </div>
      </div>
    </div>
    <LoginAuth :visibleProp="visible" @handleOkProp="handleOk" />
    <Logout :visibleProp="visibleLogout" @handleOkProp="handleOk" />
  </div>
</template>
<script>
import userInfoVue from "../../pages/registration/user-info.vue";
import LoginAuth from "../modals/LoginAuth.vue";
import Logout from "../modals/Logout.vue";

export default {
  data() {
    return {
      visibleLogout: false,
      dropdown: false,
      userType: true,
      visible: false,
      currentLang: 1,
      langList: [
        {
          name: "Uzb",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="22px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><script xmlns=""/><path fill="#0099B5" d="M0 9v4h36V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4z"/><path fill="#1EB53A" d="M36 27v-4H0v4a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4z"/><path fill="#CE1126" d="M0 13h36v1.5H0zm0 8.5h36V23H0z"/><path fill="#EEE" d="M0 18v3.5h36v-7H0z"/><path fill="#FFF" d="M4.2 9.16a3.12 3.12 0 0 1 2.6-3.076a3.12 3.12 0 1 0 0 6.152A3.12 3.12 0 0 1 4.2 9.16zm4.683 2.303l-.14-.431l-.14.431h-.454l.367.267l-.14.431l.367-.267l.366.267l-.14-.431l.367-.267zm2.702 0l-.14-.431l-.14.431h-.453l.367.267l-.14.431l.366-.267l.367.267l-.14-.431l.367-.267zm-.14-2.927l-.14.431h-.453l.367.267l-.14.431l.366-.267l.367.267l-.14-.431l.367-.267h-.454zm2.843 2.927l-.14-.431l-.14.431h-.453l.366.267l-.14.431l.367-.267l.367.267l-.14-.431l.366-.267zm-.14-2.927l-.14.431h-.453l.366.267l-.14.431l.367-.267l.367.267l-.14-.431l.366-.267h-.453zm0-2.496l-.14.431h-.453l.366.267l-.14.431l.367-.267l.367.267l-.14-.431l.366-.267h-.453zm2.843 5.423l-.14-.431l-.14.431h-.454l.367.267l-.14.431l.367-.267l.366.267l-.14-.431l.367-.267zm-.14-2.927l-.14.431h-.454l.367.267l-.14.431l.367-.267l.366.267l-.14-.431l.367-.267h-.453zm0-2.496l-.14.431h-.454l.367.267l-.14.431l.367-.267l.366.267l-.14-.431l.367-.267h-.453zm2.842 5.423l-.14-.431l-.14.431h-.453l.367.267l-.14.431l.366-.267l.367.267l-.14-.431l.367-.267zm-.14-2.927l-.14.431h-.453l.367.267l-.14.431l.366-.267l.367.267l-.14-.431l.367-.267h-.454zm0-2.496l-.14.431h-.453l.367.267l-.14.431l.366-.267l.367.267l-.14-.431l.367-.267h-.454z"/><script xmlns=""/></svg>`,
          id: 1,
        },
        {
          name: "Eng",
          icon: `<svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              width="22"
              height="22"
              x="0px"
              y="0px"
              viewBox="0 0 55.2 38.4"
              style="enable-background: new 0 0 55.2 38.4"
              xml:space="preserve"
            >
              <style type="text/css">
                .st0 {
                  fill: #fefefe;
                }
                .st1 {
                  fill: #c8102e;
                }
                .st2 {
                  fill: #012169;
                }
              </style>
              <g>
                <path
                  class="st0"
                  d="M2.87,38.4h49.46c1.59-0.09,2.87-1.42,2.87-3.03V3.03c0-1.66-1.35-3.02-3.01-3.03H3.01 C1.35,0.01,0,1.37,0,3.03v32.33C0,36.98,1.28,38.31,2.87,38.4L2.87,38.4z"
                />
                <polygon
                  class="st1"
                  points="23.74,23.03 23.74,38.4 31.42,38.4 31.42,23.03 55.2,23.03 55.2,15.35 31.42,15.35 31.42,0 23.74,0 23.74,15.35 0,15.35 0,23.03 23.74,23.03"
                />
                <path
                  class="st2"
                  d="M33.98,12.43V0h18.23c1.26,0.02,2.34,0.81,2.78,1.92L33.98,12.43L33.98,12.43z"
                />
                <path
                  class="st2"
                  d="M33.98,25.97V38.4h18.35c1.21-0.07,2.23-0.85,2.66-1.92L33.98,25.97L33.98,25.97z"
                />
                <path
                  class="st2"
                  d="M21.18,25.97V38.4H2.87c-1.21-0.07-2.24-0.85-2.66-1.94L21.18,25.97L21.18,25.97z"
                />
                <path
                  class="st2"
                  d="M21.18,12.43V0H2.99C1.73,0.02,0.64,0.82,0.21,1.94L21.18,12.43L21.18,12.43z"
                />
                <polygon class="st2" points="0,12.8 7.65,12.8 0,8.97 0,12.8" />
                <polygon class="st2" points="55.2,12.8 47.51,12.8 55.2,8.95 55.2,12.8" />
                <polygon class="st2" points="55.2,25.6 47.51,25.6 55.2,29.45 55.2,25.6" />
                <polygon class="st2" points="0,25.6 7.65,25.6 0,29.43 0,25.6" />
                <polygon
                  class="st1"
                  points="55.2,3.25 36.15,12.8 40.41,12.8 55.2,5.4 55.2,3.25"
                />
                <polygon
                  class="st1"
                  points="19.01,25.6 14.75,25.6 0,32.98 0,35.13 19.05,25.6 19.01,25.6"
                />
                <polygon
                  class="st1"
                  points="10.52,12.81 14.78,12.81 0,5.41 0,7.55 10.52,12.81"
                />
                <polygon
                  class="st1"
                  points="44.63,25.59 40.37,25.59 55.2,33.02 55.2,30.88 44.63,25.59"
                />
              </g>
            </svg>`,
          id: 2,
        },
        {
          name: "Rus",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="22px" viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#CE2028" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z"/><path fill="#22408C" d="M0 13h36v10H0z"/><path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"/></svg>`,
          id: 3,
        },
      ],
    };
  },
  computed: {
    routerPath() {
      return this.$route.path;
    },
    baseUrl() {
      return process.env.BASE_URL;
    },
    imgUrl() {
      return this.baseUrl + "/storage/";
    },
    currentLangObj() {
      return this.langList.find((elem) => elem.id == this.currentLang);
    },
  },
  methods: {
    handleOk() {
      this.visibleLogout = false;
      this.visible = false;
    },
  },
  watch: {
    routerPath() {
      this.dropdown = false;
    },
  },
  components: { LoginAuth, Logout },
};
</script>
<style lang="css" scoped>
.nuxt-link-active {
  color: var(--main-color);
}
.header {
  box-shadow: 0px 4px 8px 0px rgba(92, 70, 229, 0.08);
}
.menu-container {
  -webkit-box-shadow: -1px -1px 10px -2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -1px -1px 10px -2px rgba(34, 60, 80, 0.2);
  box-shadow: -1px -1px 10px -2px rgba(34, 60, 80, 0.2);
}
.menu-container li button {
  transition: 0.3s;
}
@media (max-width: 1440px) {
  .header {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
