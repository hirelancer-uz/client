<template>
  <div
    class="number-check flex flex-col px-[120px] gap-[32px] xl:gap-[32px] py-[80px] border border-solid border-grey-light rounded-3xl number-card xl:px-0 xl:border-0 xl:py-0"
  >
    <div class="langer">
      <a-dropdown :trigger="['click']">
        <button
          class="flex text-[18px] text-black gap-2 items-center"
          @click="(e) => e.preventDefault()"
        >
          <component :is="currentLangObj.icon"></component>
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
            <span
              class="flex gap-1 items-center justify-center"
              @click="$router.push(switchLocalePath(lang.code))"
              ><component :is="lang.icon"></component>{{ lang.name }}</span
            >
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>

    <div class="flex flex-col items-center">
      <nuxt-link :to="localePath('/')">
        <span
          >
          <svg width="170" height="47" viewBox="0 0 237 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3113 3.77839C19.5101 2.74054 17.2909 2.74054 15.4897 3.77839L4 10.3988C4.59873 11.3167 5.34584 12.2173 6.12801 12.622C8.25209 13.7212 10.6122 13.9164 13.759 11.7966C16.9058 9.6767 19.1085 9.59819 22.098 11.3255C24.2962 12.5956 32.3343 17.2796 37 20V16.1727C37 14.097 35.8904 12.179 34.0892 11.1411L21.3113 3.77839Z" fill="#F2154A"/>
<path d="M13.8833 15.0649C10.7534 17.1514 8.01464 16.7138 5.90192 15.7604C4.45952 15.0218 3.08496 13.6228 2.22422 12C1.02075 13.0719 0 14.9048 0 16.5419V31.0351C0 33.078 1.10365 34.9658 2.89521 35.9873L15.6048 43.2339C17.3964 44.2554 19.6037 44.2554 21.3952 43.2339C21.9781 42.9015 21.9781 42.0612 21.3952 41.7288L18.3773 40.0081C17.7104 39.6279 17.4819 38.7857 17.8669 38.1271C18.2519 37.4686 19.1047 37.2429 19.7716 37.6231L25.0084 40.609C25.3154 40.784 25.692 40.784 25.999 40.609L27.7228 39.6261C28.3957 39.2425 28.3957 38.2724 27.7228 37.8887L23.6982 35.594C23.0313 35.2138 22.8028 34.3717 23.1878 33.7131C23.5729 33.0545 24.4256 32.8288 25.0925 33.2091L31.5397 36.885C31.8467 37.0601 32.2233 37.0601 32.5303 36.885L34.1048 35.9873C34.2832 35.8856 34.4549 35.7752 34.6193 35.657C35.137 35.2846 35.0173 34.532 34.4634 34.2162L29.0191 31.1121C28.3522 30.7318 28.1238 29.8897 28.5088 29.2311C28.8938 28.5725 29.7465 28.3469 30.4134 28.7271L35.6863 31.7335C36.2627 32.0622 36.9947 31.7426 36.9998 31.0791C36.9999 31.0644 37 31.0498 37 31.0351V23.139C32.3593 20.4615 24.3642 15.8514 22.1777 14.6013C19.2042 12.9012 17.0133 12.9785 13.8833 15.0649Z" fill="#5C46E5"/>
<path d="M52.3899 22.5503C52.3899 20.3811 52.7882 18.3956 53.5848 16.594C54.3815 14.7924 55.4968 13.2481 56.9307 11.9613C58.3769 10.6622 60.105 9.65718 62.1149 8.94634C64.1371 8.2355 66.3738 7.88008 68.825 7.88008C71.2639 7.88008 73.4945 8.2355 75.5167 8.94634C77.5389 9.65718 79.267 10.6622 80.7009 11.9613C82.1471 13.2481 83.2685 14.7924 84.0652 16.594C84.8618 18.3956 85.2601 20.3811 85.2601 22.5503C85.2601 24.7319 84.8618 26.7357 84.0652 28.5618C83.2685 30.3757 82.1471 31.9383 80.7009 33.2497C79.267 34.5611 77.5389 35.5844 75.5167 36.3198C73.4945 37.0429 71.2639 37.4044 68.825 37.4044C66.3738 37.4044 64.1371 37.0429 62.1149 36.3198C60.105 35.5844 58.3769 34.5611 56.9307 33.2497C55.4968 31.9383 54.3815 30.3757 53.5848 28.5618C52.7882 26.7357 52.3899 24.7319 52.3899 22.5503ZM58.2176 22.5503C58.2176 24.0333 58.4811 25.3692 59.0081 26.558C59.5473 27.7468 60.2888 28.7641 61.2325 29.6097C62.1885 30.4431 63.3099 31.0865 64.5967 31.54C65.8959 31.9935 67.3053 32.2202 68.825 32.2202C70.3447 32.2202 71.748 31.9935 73.0349 31.54C74.334 31.0865 75.4554 30.4431 76.3991 29.6097C77.3428 28.7641 78.0843 27.7468 78.6236 26.558C79.1628 25.3692 79.4324 24.0333 79.4324 22.5503C79.4324 21.0674 79.1628 19.7376 78.6236 18.5611C78.0843 17.3845 77.3428 16.3918 76.3991 15.5829C75.4554 14.7617 74.334 14.1367 73.0349 13.7077C71.748 13.2788 70.3447 13.0643 68.825 13.0643C67.3053 13.0643 65.8959 13.2788 64.5967 13.7077C63.3099 14.1367 62.1885 14.7617 61.2325 15.5829C60.2888 16.3918 59.5473 17.3845 59.0081 18.5611C58.4811 19.7376 58.2176 21.0674 58.2176 22.5503ZM88.439 45.861H82.9974V15.3071H88.439V17.3477C88.917 17.0168 89.4808 16.7043 90.1303 16.4102C90.7799 16.116 91.4785 15.8586 92.2261 15.638C92.9737 15.4174 93.7458 15.2458 94.5425 15.1233C95.3391 14.9885 96.1357 14.9211 96.9323 14.9211C98.7707 14.9211 100.456 15.1907 101.988 15.73C103.532 16.2692 104.856 17.0291 105.959 18.0095C107.062 18.99 107.92 20.1666 108.533 21.5392C109.158 22.8996 109.47 24.4071 109.47 26.0616C109.47 27.7897 109.145 29.3523 108.496 30.7495C107.846 32.1344 106.945 33.3232 105.793 34.316C104.654 35.2964 103.293 36.0563 101.712 36.5956C100.143 37.1226 98.4398 37.3861 96.6014 37.3861C95.8171 37.3861 95.0388 37.337 94.2667 37.239C93.5068 37.1409 92.7715 37.0061 92.0606 36.8345C91.3621 36.663 90.7002 36.4607 90.0752 36.2279C89.4624 35.9828 88.917 35.7193 88.439 35.4374V45.861ZM88.439 30.1796C88.9905 30.6208 89.5727 30.9946 90.1855 31.301C90.7983 31.6074 91.4233 31.8587 92.0606 32.0548C92.6979 32.2509 93.3414 32.3979 93.9909 32.496C94.6405 32.5818 95.2717 32.6247 95.8845 32.6247C97.1346 32.6247 98.2437 32.4592 99.2119 32.1283C100.192 31.7851 101.014 31.3194 101.675 30.7311C102.349 30.1428 102.864 29.4504 103.22 28.6538C103.575 27.8571 103.753 26.9931 103.753 26.0616C103.753 25.1915 103.575 24.3703 103.22 23.5982C102.876 22.8261 102.374 22.152 101.712 21.576C101.063 20.9877 100.272 20.5281 99.3406 20.1972C98.4214 19.8541 97.3858 19.6825 96.2338 19.6825C95.4984 19.6825 94.7631 19.756 94.0277 19.9031C93.2924 20.0379 92.5815 20.234 91.8952 20.4914C91.2211 20.7487 90.5838 21.0613 89.9833 21.4289C89.395 21.7966 88.8802 22.2072 88.439 22.6606V30.1796ZM105.682 26.08C105.682 24.6093 105.982 23.206 106.582 21.8701C107.183 20.522 108.047 19.3332 109.174 18.3037C110.302 17.2742 111.681 16.4531 113.311 15.8403C114.953 15.2275 116.816 14.9211 118.9 14.9211C120.971 14.9211 122.834 15.2336 124.488 15.8586C126.155 16.4714 127.564 17.3171 128.716 18.3956C129.881 19.4741 130.769 20.7426 131.382 22.201C132.007 23.6595 132.32 25.2221 132.32 26.8889C132.32 27.0973 132.314 27.324 132.301 27.5691C132.301 27.802 132.289 28.0165 132.265 28.2125H111.748C111.981 28.8621 112.355 29.4565 112.87 29.9958C113.397 30.535 114.052 31.0008 114.837 31.3929C115.621 31.7851 116.528 32.0915 117.557 32.3121C118.587 32.5205 119.727 32.6247 120.977 32.6247C122.227 32.6247 123.471 32.496 124.709 32.2386C125.947 31.969 127.129 31.6319 128.257 31.2275L130.095 35.3822C129.384 35.7131 128.661 36.0073 127.926 36.2646C127.203 36.5098 126.443 36.7181 125.646 36.8897C124.862 37.049 124.035 37.1716 123.165 37.2574C122.307 37.3432 121.4 37.3861 120.444 37.3861C118.005 37.3861 115.866 37.0919 114.028 36.5036C112.189 35.9154 110.651 35.1126 109.413 34.0954C108.176 33.0781 107.244 31.8832 106.619 30.5105C105.994 29.1379 105.682 27.661 105.682 26.08ZM126.547 23.9659C126.351 23.3654 126.045 22.8077 125.628 22.293C125.224 21.766 124.715 21.3125 124.102 20.9326C123.489 20.5404 122.778 20.234 121.97 20.0134C121.161 19.7928 120.272 19.6825 119.304 19.6825C118.274 19.6825 117.337 19.7989 116.491 20.0318C115.646 20.2646 114.904 20.5771 114.267 20.9693C113.629 21.3615 113.096 21.815 112.667 22.3297C112.251 22.8445 111.944 23.3899 111.748 23.9659H126.547ZM130.278 15.3071H135.719V17.1455C137.165 16.3244 138.544 15.7483 139.856 15.4174C141.179 15.0865 142.472 14.9211 143.735 14.9211C145.389 14.9211 146.921 15.1662 148.33 15.6564C149.74 16.1344 150.959 16.8514 151.989 17.8073C153.018 18.7633 153.821 19.9582 154.397 21.3922C154.985 22.8138 155.28 24.4623 155.28 26.3374V37H149.856V27.2198C149.856 26.031 149.685 24.9709 149.342 24.0394C149.011 23.0957 148.527 22.3052 147.889 21.6679C147.264 21.0184 146.498 20.5281 145.591 20.1972C144.697 19.8541 143.692 19.6825 142.576 19.6825C141.988 19.6825 141.381 19.7437 140.756 19.8663C140.144 19.9889 139.537 20.1666 138.936 20.3994C138.348 20.62 137.778 20.9019 137.227 21.2451C136.675 21.576 136.173 21.9559 135.719 22.3849V37H130.278V15.3071ZM154.745 8.26614H165.279C168.355 8.26614 171.027 8.59704 173.294 9.25886C175.562 9.92068 177.437 10.8705 178.92 12.1083C180.415 13.3339 181.524 14.8291 182.247 16.594C182.982 18.3466 183.35 20.3198 183.35 22.5136C183.35 24.5971 182.989 26.5274 182.265 28.3045C181.542 30.0693 180.439 31.6013 178.956 32.9004C177.473 34.1873 175.598 35.1984 173.331 35.9337C171.064 36.6568 168.392 37.0184 165.316 37.0184L154.745 37V8.26614ZM166.713 31.9628C168.453 31.9628 169.979 31.7422 171.29 31.301C172.602 30.8476 173.693 30.2103 174.563 29.3891C175.445 28.568 176.107 27.5752 176.548 26.4109C176.989 25.2466 177.21 23.9475 177.21 22.5136C177.21 21.1041 176.989 19.8357 176.548 18.7081C176.107 17.5683 175.445 16.6062 174.563 15.8219C173.693 15.0252 172.602 14.4125 171.29 13.9835C169.979 13.5545 168.453 13.3401 166.713 13.3401H160.573V31.9628H166.713ZM179.58 26.08C179.58 24.6093 179.88 23.206 180.481 21.8701C181.081 20.522 181.945 19.3332 183.073 18.3037C184.2 17.2742 185.579 16.4531 187.209 15.8403C188.852 15.2275 190.714 14.9211 192.798 14.9211C194.869 14.9211 196.732 15.2336 198.387 15.8586C200.053 16.4714 201.463 17.3171 202.615 18.3956C203.779 19.4741 204.668 20.7426 205.281 22.201C205.906 23.6595 206.218 25.2221 206.218 26.8889C206.218 27.0973 206.212 27.324 206.2 27.5691C206.2 27.802 206.187 28.0165 206.163 28.2125H185.647C185.879 28.8621 186.253 29.4565 186.768 29.9958C187.295 30.535 187.951 31.0008 188.735 31.3929C189.519 31.7851 190.426 32.0915 191.456 32.3121C192.485 32.5205 193.625 32.6247 194.875 32.6247C196.125 32.6247 197.369 32.496 198.607 32.2386C199.845 31.969 201.028 31.6319 202.155 31.2275L203.994 35.3822C203.283 35.7131 202.56 36.0073 201.824 36.2646C201.101 36.5098 200.341 36.7181 199.545 36.8897C198.76 37.049 197.933 37.1716 197.063 37.2574C196.205 37.3432 195.298 37.3861 194.342 37.3861C191.903 37.3861 189.765 37.0919 187.926 36.5036C186.088 35.9154 184.55 35.1126 183.312 34.0954C182.074 33.0781 181.143 31.8832 180.518 30.5105C179.892 29.1379 179.58 27.661 179.58 26.08ZM200.446 23.9659C200.249 23.3654 199.943 22.8077 199.526 22.293C199.122 21.766 198.613 21.3125 198.001 20.9326C197.388 20.5404 196.677 20.234 195.868 20.0134C195.059 19.7928 194.171 19.6825 193.202 19.6825C192.173 19.6825 191.235 19.7989 190.39 20.0318C189.544 20.2646 188.803 20.5771 188.165 20.9693C187.528 21.3615 186.995 21.815 186.566 22.3297C186.149 22.8445 185.843 23.3899 185.647 23.9659H200.446ZM203.147 30.1612C203.147 29.1195 203.373 28.1697 203.827 27.3117C204.28 26.4538 204.96 25.7185 205.867 25.1057C206.774 24.4806 207.902 24.0027 209.25 23.6718C210.61 23.3286 212.191 23.157 213.993 23.157C215.329 23.157 216.732 23.2551 218.203 23.4511C219.686 23.6472 221.212 23.9475 222.78 24.352C222.719 23.6656 222.511 23.0344 222.155 22.4584C221.8 21.8701 221.304 21.3677 220.666 20.951C220.041 20.522 219.281 20.1911 218.387 19.9582C217.504 19.7254 216.499 19.6089 215.372 19.6089C214.759 19.6089 214.085 19.6457 213.35 19.7192C212.614 19.7928 211.854 19.9031 211.07 20.0501C210.286 20.1972 209.507 20.3811 208.735 20.6017C207.975 20.8223 207.264 21.0858 206.603 21.3922L204.948 16.9249C205.769 16.6308 206.646 16.3611 207.577 16.116C208.521 15.8709 209.483 15.6625 210.463 15.491C211.444 15.3071 212.424 15.1662 213.405 15.0681C214.385 14.9701 215.335 14.9211 216.254 14.9211C220.311 14.9211 223.326 15.9567 225.299 18.0279C227.272 20.0992 228.259 23.2734 228.259 27.5507V37H222.817V34.9594C222.253 35.2903 221.634 35.6028 220.96 35.897C220.299 36.1911 219.575 36.4485 218.791 36.6691C218.007 36.8897 217.161 37.0613 216.254 37.1838C215.359 37.3187 214.41 37.3861 213.405 37.3861C211.713 37.3861 210.224 37.2022 208.937 36.8345C207.663 36.4669 206.597 35.9583 205.739 35.3087C204.881 34.6591 204.231 33.8993 203.79 33.0291C203.361 32.1467 203.147 31.1907 203.147 30.1612ZM208.882 29.9774C208.882 30.3328 208.974 30.676 209.158 31.0069C209.342 31.3255 209.636 31.6135 210.04 31.8709C210.445 32.116 210.96 32.3183 211.585 32.4776C212.222 32.6247 212.988 32.6982 213.883 32.6982C214.839 32.6982 215.764 32.6124 216.659 32.4408C217.553 32.2692 218.387 32.0425 219.159 31.7606C219.931 31.4787 220.63 31.154 221.255 30.7863C221.88 30.4186 222.4 30.0387 222.817 29.6465V28.6905C221.984 28.4577 221.157 28.2616 220.335 28.1022C219.526 27.9429 218.748 27.8204 218.001 27.7346C217.265 27.6365 216.567 27.5691 215.905 27.5323C215.255 27.4956 214.685 27.4772 214.195 27.4772C213.178 27.4772 212.332 27.5446 211.658 27.6794C210.984 27.8142 210.439 27.9981 210.022 28.2309C209.605 28.4515 209.311 28.715 209.14 29.0214C208.968 29.3278 208.882 29.6465 208.882 29.9774ZM227.706 6.50129H233.147V37H227.706V6.50129Z" fill="#353437"/>
</svg>
           </span
      ></nuxt-link>
      <h4
        class="flex text-black text-[24px] font-semibold mt-[31px] xl:text-[20px]"
      >
        {{ $store.state.translations["auth.choose-type"] }}
      </h4>
      <div
        class="user-type h-12 xl:h-11 flex client-types mt-6 xl:mt-4 xl:w-full xl:grid xl:grid-cols-2"
      >
        <button
          @click="userType = true"
          :class="{ 'activeF bg-blue': userType }"
          class="border-[2px] border-solid border-grey-light rounded-l-[12px] h-full w-[235px] xl:w-auto flex gap-2 text-base xl:text-[14px] text-black font-medium items-center justify-center"
        >
          {{ $store.state.translations["auth.freelancer"] }}
          <svg
            class="xl:w-5 xl:h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M14.979 14.673C14.246 15.489 13.183 16.003 12 16.003C10.816 16.003 9.75199 15.489 9.01899 14.671M9.33299 8.86997V9.65797M14.667 8.78797V9.57597M21.333 12.001C21.333 17.1554 17.1545 21.334 12 21.334C6.84552 21.334 2.66699 17.1554 2.66699 12.001C2.66699 6.8465 6.84552 2.66797 12 2.66797C17.1545 2.66797 21.333 6.8465 21.333 12.001Z"
              stroke="#020105"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></button
        ><button
          @click="userType = false"
          :class="{ 'activeC bg-light-red': !userType }"
          class="border-[2px] border-solid border-grey-light rounded-r-[12px] h-full w-[235px] xl:w-auto flex gap-2 text-base xl:text-[14px] text-black font-medium items-center justify-center"
        >
          {{ $store.state.translations["auth.customer"] }}
          <svg
            class="xl:w-5 xl:h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M2.5 8H4.5L10.7622 10.7397C11.7241 11.1605 12.1664 12.2784 11.7528 13.2434V13.2434C11.337 14.2136 10.2136 14.663 9.24342 14.2472L7.5 13.5"
              stroke="#28303F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.83541 16.3292C2.46493 16.1439 2.01442 16.2941 1.82918 16.6646C1.64394 17.0351 1.79411 17.4856 2.16459 17.6708L2.83541 16.3292ZM11.8354 13.3292L11.1646 12.9938L10.4938 14.3354L11.1646 14.6708L11.8354 13.3292ZM19.75 18C19.75 18.4142 20.0858 18.75 20.5 18.75C20.9142 18.75 21.25 18.4142 21.25 18H19.75ZM14.2331 15.3666L13.8977 16.0374L14.2331 15.3666ZM16.9164 16.75H18.5V15.25H16.9164V16.75ZM18.5 19.25H10.3885V20.75H18.5V19.25ZM7.14625 18.4846L2.83541 16.3292L2.16459 17.6708L6.47542 19.8262L7.14625 18.4846ZM14.5685 14.6957L11.8354 13.3292L11.1646 14.6708L13.8977 16.0374L14.5685 14.6957ZM10.3885 19.25C9.26302 19.25 8.15295 18.9879 7.14625 18.4846L6.47542 19.8262C7.69041 20.4337 9.03015 20.75 10.3885 20.75V19.25ZM19.75 18C19.75 18.6904 19.1904 19.25 18.5 19.25V20.75C20.0188 20.75 21.25 19.5188 21.25 18H19.75ZM18.5 16.75C19.1904 16.75 19.75 17.3096 19.75 18H21.25C21.25 16.4812 20.0188 15.25 18.5 15.25V16.75ZM16.9164 15.25C16.1014 15.25 15.2975 15.0602 14.5685 14.6957L13.8977 16.0374C14.835 16.506 15.8685 16.75 16.9164 16.75V15.25Z"
              fill="#28303F"
            />
            <circle
              cx="18.5"
              cy="8"
              r="4"
              stroke="#28303F"
              stroke-width="1.5"
            />
          </svg>
        </button>
      </div>
      <!-- <p
        class="text-base text-grey-64 mt-4 text-center max-w-[90%] xl:text-[14px] xl:leading-5"
      >
        ищу работу ищу работу ищу работу ищу работу ищу работу ищу работу
      </p> -->
    </div>
    <div>
      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="flex flex-col gap-8 pb-12 xl:gap-6 xl:pb-0">
          <a-form-model-item
            ref="name"
            class="form-item"
            :label="$store.state.translations[`auth.name`]"
            prop="name"
          >
            <a-input
              v-model="form.name"
              :placeholder="$store.state.translations[`auth.name`]"
            />
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="form-item"
            :label="$store.state.translations[`auth.surname`]"
            prop="surname"
          >
            <a-input
              v-model="form.surname"
              :placeholder="$store.state.translations[`auth.surname`]"
            />
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="form-item"
            :label="$store.state.translations[`auth.sex`]"
            prop="gender"
          >
            <a-radio-group v-model="form.gender">
              <div class="grid grid-cols-2 gap-4 gender-btns">
                <button
                  @click="form.gender = 'male'"
                  class="border-[2px] border-solid border-border-darik px-4 py-4 rounded-lg flex flex-col gap-6 xl:flex-row-reverse xl:px-3 xl:py-[14px]"
                  :class="{ active: form.gender === 'male' }"
                >
                  <div
                    class="flex justify-between items-center w-full xl:justify-end xl:pr-1"
                  >
                    <div class="flex gap-[13px] items-center">
                      <svg
                        class="xl:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14.558 3.24951C14.1438 3.24951 13.808 3.5853 13.808 3.99951C13.808 4.41373 14.1438 4.74951 14.558 4.74951V3.24951ZM20.0013 3.99951H20.7513C20.7513 3.5853 20.4155 3.24951 20.0013 3.24951V3.99951ZM19.2513 9.44276C19.2513 9.85697 19.5871 10.1928 20.0013 10.1928C20.4155 10.1928 20.7513 9.85697 20.7513 9.44276H19.2513ZM13.1277 9.81545C12.8347 10.1083 12.8347 10.5832 13.1276 10.8761C13.4204 11.169 13.8953 11.1691 14.1882 10.8762L13.1277 9.81545ZM20.5236 4.54201C20.8165 4.24914 20.8166 3.77427 20.5237 3.48135C20.2309 3.18843 19.756 3.18838 19.4631 3.48125L20.5236 4.54201ZM13.1253 17.8111C11.2084 19.7279 8.10059 19.7279 6.18374 17.8111L5.12308 18.8717C7.62572 21.3744 11.6833 21.3744 14.1859 18.8717L13.1253 17.8111ZM6.18374 17.8111C4.26688 15.8942 4.26688 12.7864 6.18374 10.8695L5.12308 9.80887C2.62043 12.3115 2.62043 16.3691 5.12308 18.8717L6.18374 17.8111ZM6.18374 10.8695C8.10059 8.95267 11.2084 8.95267 13.1253 10.8695L14.1859 9.80887C11.6833 7.30622 7.62572 7.30622 5.12308 9.80887L6.18374 10.8695ZM13.1253 10.8695C15.0421 12.7864 15.0421 15.8942 13.1253 17.8111L14.1859 18.8717C16.6886 16.3691 16.6886 12.3115 14.1859 9.80887L13.1253 10.8695ZM14.558 4.74951L20.0013 4.74951V3.24951L14.558 3.24951V4.74951ZM19.2513 3.99951V9.44276H20.7513V3.99951H19.2513ZM14.1882 10.8762L20.5236 4.54201L19.4631 3.48125L13.1277 9.81545L14.1882 10.8762Z"
                          fill="#5C46E6"
                        />
                      </svg>

                      <h5
                        class="text-[18px] text-grey-64 font-semibold xl:text-base xl:flex xl:gap-2 xl:items-center"
                      >
                        <svg
                          class="xl:w-5 xl:h-5 hidden xl:block"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M14.558 3.24951C14.1438 3.24951 13.808 3.5853 13.808 3.99951C13.808 4.41373 14.1438 4.74951 14.558 4.74951V3.24951ZM20.0013 3.99951H20.7513C20.7513 3.5853 20.4155 3.24951 20.0013 3.24951V3.99951ZM19.2513 9.44276C19.2513 9.85697 19.5871 10.1928 20.0013 10.1928C20.4155 10.1928 20.7513 9.85697 20.7513 9.44276H19.2513ZM13.1277 9.81545C12.8347 10.1083 12.8347 10.5832 13.1276 10.8761C13.4204 11.169 13.8953 11.1691 14.1882 10.8762L13.1277 9.81545ZM20.5236 4.54201C20.8165 4.24914 20.8166 3.77427 20.5237 3.48135C20.2309 3.18843 19.756 3.18838 19.4631 3.48125L20.5236 4.54201ZM13.1253 17.8111C11.2084 19.7279 8.10059 19.7279 6.18374 17.8111L5.12308 18.8717C7.62572 21.3744 11.6833 21.3744 14.1859 18.8717L13.1253 17.8111ZM6.18374 17.8111C4.26688 15.8942 4.26688 12.7864 6.18374 10.8695L5.12308 9.80887C2.62043 12.3115 2.62043 16.3691 5.12308 18.8717L6.18374 17.8111ZM6.18374 10.8695C8.10059 8.95267 11.2084 8.95267 13.1253 10.8695L14.1859 9.80887C11.6833 7.30622 7.62572 7.30622 5.12308 9.80887L6.18374 10.8695ZM13.1253 10.8695C15.0421 12.7864 15.0421 15.8942 13.1253 17.8111L14.1859 18.8717C16.6886 16.3691 16.6886 12.3115 14.1859 9.80887L13.1253 10.8695ZM14.558 4.74951L20.0013 4.74951V3.24951L14.558 3.24951V4.74951ZM19.2513 3.99951V9.44276H20.7513V3.99951H19.2513ZM14.1882 10.8762L20.5236 4.54201L19.4631 3.48125L13.1277 9.81545L14.1882 10.8762Z"
                            fill="#5C46E6"
                          />
                        </svg>
                        {{ $store.state.translations["auth.male"] }}
                      </h5>
                    </div>

                    <a-radio class="type-radio" value="male" />
                  </div>
                </button>
                <button
                  @click="form.gender = 'female'"
                  class="border-[2px] border-solid border-border-darik px-4 py-4 rounded-lg flex flex-col gap-6 xl:flex-row-reverse xl:px-3 xl:py-[14px]"
                  :class="{ active: form.gender === 'female' }"
                >
                  <div
                    class="flex justify-between items-center w-full xl:justify-end xl:pr-1"
                  >
                    <div class="flex gap-[13px] items-center">
                      <svg
                        class="xl:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.6579 13.6507L17.4887 17.4807M17.4887 17.4807L19.9933 19.9849M17.4887 17.4807L19.9933 14.9761M17.4887 17.4807L14.9845 19.9849M13.6556 5.65536C11.4459 3.44561 7.86316 3.44561 5.65341 5.65536C3.44366 7.86511 3.44366 11.4478 5.65341 13.6576C7.86316 15.8673 11.4459 15.8673 13.6556 13.6576C15.8654 11.4478 15.8654 7.86511 13.6556 5.65536Z"
                          stroke="#BB2649"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                      </svg>

                      <h5
                        class="text-[18px] text-grey-64 font-semibold xl:text-base xl:flex xl:gap-2 xl:items-center"
                      >
                        <svg
                          class="xl:w-5 xl:h-5 hidden xl:block"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.6579 13.6507L17.4887 17.4807M17.4887 17.4807L19.9933 19.9849M17.4887 17.4807L19.9933 14.9761M17.4887 17.4807L14.9845 19.9849M13.6556 5.65536C11.4459 3.44561 7.86316 3.44561 5.65341 5.65536C3.44366 7.86511 3.44366 11.4478 5.65341 13.6576C7.86316 15.8673 11.4459 15.8673 13.6556 13.6576C15.8654 11.4478 15.8654 7.86511 13.6556 5.65536Z"
                            stroke="#BB2649"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                          />
                        </svg>
                        {{ $store.state.translations["auth.female"] }}
                      </h5>
                    </div>

                    <a-radio class="type-radio" value="female" />
                  </div>
                </button>
              </div>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item
            v-if="userType"
            ref="name"
            class="form-item"
            :label="$store.state.translations[`auth.spec`]"
          >
            <div
              class="min-h-[58px] xl:min-h-[50px] items-center border border-solid flex justify-start border-grey-8 rounded-lg px-4 py-3"
            >
              <p
                class="text-grey-40 text-base xl:text-[14px]"
                v-if="activeCheckedList.length === 0"
              >
                {{ $store.state.translations["auth.spec"] }}
              </p>
              <div v-else class="w-auto flex flex-wrap gap-[4px] max-w-[90%]">
                <div
                  v-for="listItem in activeCheckedList"
                  :key="listItem?.id"
                  class="px-4 h-[34px] rounded-[4px] bg-apple-grey flex gap-1 items-center text-blue text-[14px] font-medium relative z-[20]"
                >
                  {{ listItem?.name }}
                  <button @click="deleteChecked(listItem?.id)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
                        stroke="#020105"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button
                class="h-full flex justify-end items-center flex-auto absolute z-[6] right-0 px-4 w-full"
                @click="
                  openSpecial();
                  checkedList = [...activeCheckedList];
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3"
                  height="13"
                  viewBox="0 0 3 13"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 1.25C2.5 1.94036 1.94036 2.5 1.25 2.5C0.559644 2.5 0 1.94036 0 1.25C0 0.559644 0.559644 0 1.25 0C1.94036 0 2.5 0.559644 2.5 1.25ZM2.5 6.25C2.5 6.94036 1.94036 7.5 1.25 7.5C0.559644 7.5 0 6.94036 0 6.25C0 5.55964 0.559644 5 1.25 5C1.94036 5 2.5 5.55964 2.5 6.25ZM1.25 12.5C1.94036 12.5 2.5 11.9404 2.5 11.25C2.5 10.5596 1.94036 10 1.25 10C0.559644 10 0 10.5596 0 11.25C0 11.9404 0.559644 12.5 1.25 12.5Z"
                    fill="#020105"
                  />
                </svg>
              </button>
            </div>
          </a-form-model-item>
          <div
            class="py-4 w-full flex justify-center items-center relative xl:py-[18px]"
          >
            <span class="h-[1px] w-full absolute z-0 bg-border-darik"></span>
            <p
              class="px-2 relative z-50 text-grey-80 text-base font-medium bg-white mt-[-4px]"
            >
              {{ $store.state.translations["auth.add-info"] }}
            </p>
          </div>
          <a-form-model-item
            v-if="userType"
            ref="name"
            class="form-item"
            :label="$store.state.translations[`auth.birthday`]"
            prop="date_of_birth"
          >
            <!-- <a-date-picker
              @change="onChange"
              v-model="form.date_of_birth"
              class="w-full"
              placeholder="Tugilgan sanangiz"
            /> -->

            <a-input
              type="text"
              ref="date"
              v-model="form.date_of_birth"
              :placeholder="$store.state.translations[`auth.birthday`]"
              @input="formatDate"
              @blur="blurHandler"
            />
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="form-item"
            :label="$store.state.translations[`auth.region`]"
          >
            <a-select
              v-model="form.region_id"
              :placeholder="$store.state.translations[`auth.region`]"
            >
              <a-select-option
                :value="region?.id"
                v-for="region in regions"
                :key="region?.id"
              >
                {{ region?.name_ru }}</a-select-option
              >
            </a-select>
          </a-form-model-item>
        </div>
      </a-form-model>
    </div>
    <div
      class="buttons grid grid-cols-2 gap-4 xl:flex xl:flex-col-reverse xl:gap-2 xl:pt-6"
    >
      <button
        @click="$router.push(localePath('/registration'))"
        class="h-[60px] xl:h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-black font-medium"
      >
        {{ $store.state.translations["auth.cancel"] }}
      </button>
      <button
        @click="onSubmit"
        class="h-[60px] xl:h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-white font-medium"
      >
        {{ $store.state.translations["auth.save"] }}
      </button>
    </div>

    <SpicialsticsCheck
      ref="specialities"
      @saveChecked="saveChecked"
      :specialities="specialities"
      :activeCheckedList="activeCheckedList"
    />
  </div>
</template>
<script>
import SpicialsticsCheck from "../modals/SpicialsticsCheck.vue";
import uzbFlag from "@/components/icons/uzbFlag.vue";
import engFlag from "@/components/icons/engFlag.vue";
import rusFlag from "@/components/icons/rusFlag.vue";

export default {
  props: ["regions", "specialities"],
  data() {
    return {
      currentLang: 1,
      langList: [
        {
          name: "Uzb",
          icon: "uzbFlag",
          id: 1,
          code: "uz",
        },
        {
          name: "Rus",
          icon: "rusFlag",
          id: 3,
          code: "ru",
        },
      ],

      inputDate: "",
      formattedDate: "",
      dropdown: false,
      dropdownOpens: [],
      checkedList: [],
      activeCheckedList: [],
      modalList: null,
      userGender: true,
      userType: true,
      form: {
        name: "",
        surname: "",
        gender: "male",
        date_of_birth: "",
        specialities: [],
        region_id: undefined,
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$store.state.translations["auth.required"],
            trigger: "blur",
          },
        ],
        surname: [
          {
            required: true,
            message: this.$store.state.translations["auth.required"],
            trigger: "blur",
          },
        ],
        gender: [
          {
            required: true,
            message: this.$store.state.translations["auth.required"],
            trigger: "blur",
          },
        ],
        specialities: [
          {
            required: true,
            message: this.$store.state.translations["auth.required"],
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    openSpecial() {
      this.$refs.specialities.open();
      this.$refs.specialities.openModal();
    },
    closeSpecial() {
      this.$refs.specialities.close();
      this.$refs.specialities.closeModal();
    },
    checkValue(str, max) {
      if (str.charAt(0) !== "0" || str === "00") {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str =
          num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
            ? "0" + num
            : num.toString();
      }
      return str;
    },
    formatDate() {
      this.$refs.date.type = "text";
      let input = this.form.date_of_birth;
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
      let values = input.split("/").map(function (v) {
        return v.replace(/\D/g, "");
      });
      if (values[0]) values[0] = this.checkValue(values[0], 31);
      if (values[1]) values[1] = this.checkValue(values[1], 12);
      let output = values.map(function (v, i) {
        return v.length === 2 && i < 2 ? v + " / " : v;
      });
      this.form.date_of_birth = output.join("").substr(0, 14);
    },
    blurHandler() {
      this.$refs.date.type = "text";
      let input = this.form.date_of_birth;
      let values = input.split("/").map(function (v, i) {
        return v.replace(/\D/g, "");
      });
      let output = "";
      if (values.length === 3) {
        let year =
          values[2].length !== 4
            ? parseInt(values[2]) + 2000
            : parseInt(values[2]);
        let month = parseInt(values[1]) - 1;
        let day = parseInt(values[0]);
        let d = new Date(year, month, day);
        if (!isNaN(d)) {
          this.formattedDate = d.toString();
          let dates = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
          output = dates
            .map(function (v) {
              v = v.toString();
              return v.length === 1 ? "0" + v : v;
            })
            .join(" / ");
        }
      }
      this.form.date_of_birth = output;
      // this.form.date_of_birth = output;
    },

    saveChecked(checkedList) {
      this.activeCheckedList = [...checkedList];
      this.checkedList = [];
      this.closeSpecial();
    },

    onchecked(obj) {
      if (this.checkedList.includes(obj)) {
        this.checkedList = this.checkedList.filter(
          (item) => item.id !== obj.id
        );
      } else {
        if (this.checkedList.length === 3) this.checkedList.shift();
        this.checkedList.push(obj);
      }
    },
    deleteChecked(id) {
      this.activeCheckedList = this.activeCheckedList.filter(
        (item) => item.id !== id
      );
    },

    onChange(date, dateString) {},
    onSubmit() {
      // name: "",
      //   surname: "",
      //   gender: "",
      //   date_of_birth: "",
      //   specialities: [1],
      //   region_id: undefined,
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("surname", this.form.surname);
      formData.append("gender", this.form.gender);
      formData.append("date_of_birth", this.form.date_of_birth.replaceAll(" ","").replaceAll('/','-'));
      formData.append("region_id", this.form.region_id);
      this.activeCheckedList.forEach((item) => {
          formData.append("specialities[]", item.id);
      });
      // formData.append("specialities[]", JSON.stringify(this.form.specialities));
      // const data = {
      //   ...this.form,
      //   date_of_birth: this.form.date_of_birth
      //     .replaceAll(" ", "")
      //     .replaceAll("/", "-"),
      //   [`specialities`]: this.activeCheckedList.map(elem => elem.id),
      // };
      // delete data["specialities"];
      // console.log(data);
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("sendRegister", formData);
        } else {
          return false;
        }
      });
    },
  },
  computed: {
    currentLangObj() {
      return this.langList.find((elem) => elem.code === this.$i18n.locale);
    },
  },

  components: { SpicialsticsCheck, uzbFlag, rusFlag, engFlag },
};
</script>
<style lang="css" scoped>
.langer {
  position: absolute;
  top: 24px;
  right: 24px;
}
.number-card {
  position: relative;
}

.spicial-drawer :deep(.bottom-sheet__main) {
  height: 100%;
}
.client-types .activeF {
  border-color: var(--blue);
  background-color: var(--blue);
  color: #fff;
}
.client-types .activeC {
  border-color: var(--green);
  background-color: var(--green);
  color: #fff;
}

.client-types .activeC svg path,
.client-types .activeC svg circle,
.client-types .activeF svg path,
.client-types .activeF svg circle {
  stroke: #fff;
}
.form-item :deep(.ant-input) {
  border-radius: 8px;
  background: #fff;
  border: 1px solid var(--border-darik);
  height: 50px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-input:focus) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.form-item :deep(.ant-select-selection) {
  border-radius: 8px;
  background: #fff;
  height: 50px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
:deep(.ant-select-selection:hover) {
  border-color: var(--blue);
}
:deep(.ant-select-open .ant-select-selection) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.form-item :deep(.ant-select-selection__rendered) {
  height: 100%;
  display: flex;
  align-items: center;
}

.form-item
  :deep(.ant-select-selection__rendered .ant-select-selection-selected-value) {
  color: var(--grey-80, #353437);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.form-item :deep(.ant-form-item-label label) {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  position: relative;
  padding-right: 12px;
}
.form-item :deep(label::before) {
  position: absolute;
  right: -3px;
  top: 0;
}
.form-item :deep(label::after) {
  display: none;
}
.form-item :deep(.ant-radio-group) {
  width: 100%;
}
.type-radio {
  margin-right: 0 !important;
}
:deep(.ant-radio-inner::after) {
  width: 12px;
  height: 12px;
  background-color: var(--main-color);
}
:deep(.ant-radio-inner) {
  width: 20px;
  height: 20px;
  border-color: var(--main-color) !important;
  box-shadow: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gender-btns .active {
  border-color: var(--blue);
}
.gender-btns .active h5 {
  color: var(--blue);
}
.modal :deep(.ant-modal-content) {
  border-radius: 30px;
}
.modal-body {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
}
.modal-list::-webkit-scrollbar {
  width: 4px;
}

/* Track */
.modal-list::-webkit-scrollbar-track {
  border-radius: 50px;
  background: var(--bg-grey);
  width: 4px;
}

/* Handle */
.modal-list::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 50px;
  background: var(--border-darik);
}
.modal-list .active {
  border-color: var(--blue);
  color: var(--blue);
}

:deep(
    .ant-select-focused .ant-select-selection,
    .ant-select-selection:focus,
    .ant-select-selection:active
  ) {
  border: 1px solid var(--blue);
  box-shadow: 0px 0px 0px 3px rgba(70, 105, 229, 0.2);
}
.drop-body {
  max-height: 0;
  /* height: 0; */
  overflow: hidden;
  transition: max-height 0.2s linear;
}
.drop-icon {
  transition: 0.2s linear;
}
.drop-list .active .drop-body {
  max-height: 200px;
  /* height: auto; */
}
.drop-list .active .drop-head h2 {
  color: var(--main-color);
}
.drop-head {
  transition: 0.2s linear;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@media (max-width: 1200px) {
  .form-item :deep(.ant-form-item-label label) {
    font-size: 14px;
  }
  .form-item :deep(.ant-select-selection) {
    height: 44px;
    font-size: 14px;
  }
  .form-item :deep(.ant-input) {
    height: 44px;
    font-size: 14px;
  }
  .langer {
    top: 16px;
    right: 16px;
  }
  .number-card {
    position: static;
  }
}
</style>
