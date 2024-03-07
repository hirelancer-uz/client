<template lang="html">
  <div>
    <a-modal
      class="portfolio-modal mt-[100px]"
      v-model="visible"
      :body-style="{
        padding: '0',
        borderRadius: '24px',
        margin: '0 0 120px 0',
      }"
      :dialog-style="{ top: '20px' }"
      :closable="false"
      width="1440px"
      @ok="closeModal"
      @cancel="closeModal"
    >
      <div class="modal__header px-[120px] pt-[46px] pb-[24px]">
        <button @click="closeModal" class="x">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M27.0718 12.929L12.9297 27.0711M27.0718 27.071L12.9297 12.9289"
              stroke="#353437"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div>
          <h4 class="modal__title">{{ portfolio?.name }}</h4>
          <div class="komarovo">
            <div class="flex gap-2 xl:gap-2 w-full xl:flex-wrap xl:items-start">
              <p
                class="text-[14px] bg-apple-grey rounded-[22px] h-[28px] px-3 flex items-center font-medium text-grey-64 xl:text-[12px] whitespace-nowrap"
                v-for="(specialit, index) in portfolio?.specialities"
                :key="specialit?.id"
              >
                {{ specialit?.name_ru }}
              </p>
            </div>
            <!-- <p class="modal__category">{{ portfolio?.specialities[0]?.name_ru }}</p> -->
            <div class="dot xl:hidden"></div>
            <p class="modal__date whitespace-nowrap">{{ dateFormat }}</p>
          </div>
        </div>
        <div class="modal__header-right">
          <button
            v-if="$route.path == '/profile/freelancer/portfolio'"
            class="border border-solid border-main-color bg-bg-grey px-[10px] rounded-[6px] text-main-color text-base flex h-[37px] items-center gap-[6px] xl:hidden"
            @click="
              $router.push(`/profile/freelancer/portfolio/${portfolio?.id}`)
            "
          >
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 9.5V14C16.5 15.6569 15.1569 17 13.5 17H4.5C2.84315 17 1.5 15.6569 1.5 14V5C1.5 3.34315 2.84315 2 4.5 2H9M11.7648 3.51706C11.7648 3.51706 11.7648 4.58978 12.8375 5.66251C13.9102 6.73523 14.9829 6.73523 14.9829 6.73523M6.866 12.4922L9.11872 12.1704C9.44367 12.1239 9.7448 11.9734 9.9769 11.7413L16.0557 5.6625C16.6481 5.07006 16.6481 4.10951 16.0557 3.51706L14.9829 2.44434C14.3905 1.85189 13.4299 1.85189 12.8375 2.44434L6.75873 8.5231C6.52663 8.7552 6.37606 9.05633 6.32964 9.38128L6.00783 11.634C5.93631 12.1346 6.3654 12.5637 6.866 12.4922Z"
                stroke="#5C46E6"
                stroke-linecap="round"
              />
            </svg>
            {{ $store.state.translations["modal.edit"] }}
          </button>
          <div class="modal__views">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M15.8477 7.88982C16.7174 8.80488 16.7174 10.1951 15.8477 11.1102C14.3809 12.6535 11.8616 14.75 9 14.75C6.13836 14.75 3.61912 12.6535 2.15228 11.1102C1.28257 10.1951 1.28257 8.80488 2.15228 7.88982C3.61912 6.3465 6.13836 4.25 9 4.25C11.8616 4.25 14.3809 6.3465 15.8477 7.88982Z"
                  stroke="#353437"
                />
                <path
                  d="M11.25 9.5C11.25 10.7426 10.2426 11.75 9 11.75C7.75736 11.75 6.75 10.7426 6.75 9.5C6.75 8.25736 7.75736 7.25 9 7.25C10.2426 7.25 11.25 8.25736 11.25 9.5Z"
                  stroke="#353437"
                />
              </svg>
            </span>
            <p>{{ portfolio?.view_count }}</p>
          </div>

          <button class="modal__views" :class="{ 'text-main-color': true }">
            <p>{{ $store.state.translations["modal.liked"] }}</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.53334 14.25H10.9077C12.2843 14.25 13.4842 13.3131 13.8181 11.9776L15.0341 7.1138C15.2707 6.16708 14.5547 5.25 13.5789 5.25H9.87502L10.8552 3.56976C11.5843 2.31978 10.6827 0.75 9.23557 0.75H8.37502L5.47383 5.82707C5.40908 5.94039 5.37502 6.06865 5.37502 6.19917V12.3486C5.37502 12.5994 5.50034 12.8336 5.70899 12.9727L6.86924 13.7462C7.36204 14.0747 7.94107 14.25 8.53334 14.25ZM2 5.25H2.75C3.57843 5.25 4.25 5.92157 4.25 6.75V12C4.25 12.8284 3.57843 13.5 2.75 13.5H2C1.17157 13.5 0.5 12.8284 0.5 12V6.75C0.5 5.92157 1.17157 5.25 2 5.25Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <article>{{ portfolio?.classes_count }}</article>
          </button>
        </div>
      </div>
      <div class="modal__images px-[120px] grid gap-[16px] grid-cols-3">
        <div v-for="image in portfolio?.images" :key="image?.id">
          <img :src="`${imgUrl}${image.img}`" alt="" />
        </div>
      </div>
      <div
        class="modal__desc py-[72px] xl:mx-[-16px] xl:px-4"
        :class="{ 'xl:bg-bg-grey': $route.name.includes('profile') }"
        v-if="portfolio?.desc"
        v-html="portfolio?.desc"
      ></div>
      <div
        class="modal__owner bg-bg-grey xl:bg-white"
        :class="{ 'xl:hidden': $route.name.includes('profile') }"
      >
        <div class="modal__cardo">
          <div class="cardo__top">
            <div class="modal__cardo-person">
              <img
                v-if="freelancer?.avatar"
                :src="`${imgUrl}${freelancer?.avatar}`"
                alt=""
              />
              <img v-else src="@/assets/images/user-avatar.jpg" alt="" />
            </div>
            <div>
              <h4 class="modal__cardo-name">{{ freelancer?.name }}</h4>
              <p class="modal__cardo-status">
                {{ $store.state.translations["modal.registrated"] }} более 5 лет
                назад
              </p>
            </div>
          </div>
          <div class="modal__cardo-footer">
            <div class="modal__cardo-item">
              <p>ID: {{ freelancer?.id }}</p>
            </div>
            <div class="modal__cardo-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.36198 2.72614C9.03255 1.31346 10.9701 1.31346 11.6406 2.72613L12.7995 5.16761C13.0658 5.72858 13.5806 6.11741 14.176 6.20736L16.7674 6.59887C18.2669 6.8254 18.8656 8.74125 17.7806 9.84086L15.9054 11.7413C15.4745 12.1779 15.2779 12.8071 15.3796 13.4236L15.8223 16.1071C16.0784 17.6598 14.511 18.8438 13.1698 18.1107L10.852 16.8438C10.3194 16.5527 9.68318 16.5527 9.15061 16.8438L6.83277 18.1107C5.49163 18.8438 3.92415 17.6598 4.18029 16.1071L4.62296 13.4236C4.72467 12.8071 4.52806 12.1779 4.0972 11.7413L2.22203 9.84086C1.13702 8.74125 1.73574 6.82541 3.23519 6.59887L5.82661 6.20736C6.42204 6.11741 6.93677 5.72858 7.20306 5.16761L8.36198 2.72614Z"
                    fill="#F2C94C"
                  />
                </svg>
              </span>
              <p>{{ freelancer?.stars }}</p>
            </div>
            <div class="modal__cardo-item">
              <p class="text-[14px] flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3.49999 4.66667H2.33332C1.68899 4.66667 1.16666 5.189 1.16666 5.83333V11.0833C1.16666 11.7277 1.68899 12.25 2.33332 12.25H3.49999C4.14432 12.25 4.66666 11.7277 4.66666 11.0833V5.83333C4.66666 5.189 4.14432 4.66667 3.49999 4.66667Z"
                    stroke="#009A10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.26151 12.25H7.12313C6.66247 12.25 6.21212 12.1136 5.82883 11.8581L4.92641 11.2565C4.76413 11.1483 4.66666 10.9662 4.66666 10.7711V5.98825C4.66666 5.88673 4.69315 5.78697 4.74351 5.69883L6.99999 1.75H7.77507C8.93983 1.75 9.63457 3.04813 8.98848 4.01727L8.16666 5.25H11.3391C12.0981 5.25 12.655 5.96329 12.4709 6.69962L11.5252 10.4826C11.2655 11.5213 10.3322 12.25 9.26151 12.25Z"
                    stroke="#009A10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
                ><span class="text-green">{{ freelancer?.likes_count }}</span
                ><span class="text-grey-40">/</span
                ><span class="text-pantone-2023">{{
                  freelancer?.dislikes_count
                }}</span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1451_10014)">
                    <path
                      d="M10.5 8.75L11.6667 8.75C12.311 8.75 12.8333 8.22766 12.8333 7.58333L12.8333 3.5C12.8333 2.85567 12.311 2.33333 11.6667 2.33333L10.5 2.33333C9.85566 2.33333 9.33332 2.85567 9.33332 3.5L9.33332 7.58333C9.33332 8.22766 9.85566 8.75 10.5 8.75Z"
                      stroke="#BB2649"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.73847 1.75L6.87685 1.75C7.3375 1.75 7.78785 1.88635 8.17115 2.14188L9.07356 2.74349C9.23585 2.85168 9.33332 3.03382 9.33332 3.22886L9.33332 8.01175C9.33332 8.11327 9.30683 8.21303 9.25646 8.30117L6.99999 12.25L6.22491 12.25C5.06015 12.25 4.36541 10.9519 5.0115 9.98273L5.83332 8.75L2.66089 8.75C1.90189 8.75 1.34498 8.03671 1.52906 7.30038L2.4748 3.51742C2.73448 2.47869 3.66777 1.75 4.73847 1.75Z"
                      stroke="#BB2649"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1451_10014">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(14 14) rotate(180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal__others bg-bg-grey xl:bg-white pl-[120px] pb-[40px]"
        :class="{ 'xl:hidden': $route.name.includes('profile') }"
      >
        <a-carousel
          :slidesToShow="3.2"
          :infinite="false"
          :after-change="onChange"
          draggable
          :responsive="[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]"
        >
          <PortfolioCard2
            v-for="portfolio in portfolios"
            :portfolio="portfolio"
            :key="portfolio?.id"
          />
        </a-carousel>
      </div>
      <div
        class="buttons hidden xl:flex bg-bg-grey gap-2 pt-5 mx-[-16px] px-4 pb-6"
        v-if="$route.name.includes('profile')"
      >
        <button
          @click="
            $router.push(`/profile/freelancer/portfolio/${portfolio?.id}`)
          "
          class="w-full h-12 flex justify-center items-center bg-main-color text-white rounded-xl"
        >
          {{ $store.state.translations["modal.edit"]
          }}<svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 17.5H18M11.987 4.42643C11.987 4.42643 11.987 5.78861 13.3492 7.1508C14.7114 8.51299 16.0736 8.51299 16.0736 8.51299M6.59969 14.9901L9.46028 14.5814C9.87291 14.5225 10.2553 14.3313 10.55 14.0365L17.4358 7.1508C18.1881 6.39848 18.1881 5.17874 17.4358 4.42642L16.0736 3.06424C15.3213 2.31192 14.1015 2.31192 13.3492 3.06424L6.46347 9.94997C6.16873 10.2447 5.97754 10.6271 5.91859 11.0397L5.50994 13.9003C5.41913 14.536 5.964 15.0809 6.59969 14.9901Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button
          @click="openDelete"
          class="max-w-[56px] w-full h-12 flex justify-center items-center border border-light-red border-solid rounded-lg"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9L18.2841 18.3068C18.1238 20.3908 16.386 22 14.2959 22H9.70412C7.61398 22 5.87621 20.3908 5.71591 18.3068L5 9M21 7C18.4021 5.73398 15.3137 5 12 5C8.68635 5 5.59792 5.73398 3 7M10 5V4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4V5M10 11V17M14 11V17"
              stroke="#F2154A"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </a-modal>
    <DeletePortfolio ref="deletePortfolio" @submit="__DELETE_WORK" />
  </div>
</template>
<script>
import moment from "moment";
import PortfolioCard2 from "../profile/portfolio/PortfolioCard2.vue";
import DeletePortfolio from "./DeletePortfolio.vue";
export default {
  props: ["portfolios", "freelancer", "portfolio"],
  name: "portfolioModal",
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    dateFormat() {
      return moment(this.portfolio?.created_at).format("HH:mm DD.MM.YYYY");
    },

    imgUrl() {
      return this.$config.baseURL + "/storage/"
    },
  },
  methods: {
    openDelete() {
      this.$refs.deletePortfolio.open();
    },
    closeDelete() {
      this.$refs.deletePortfolio.close();
    },
    closeModal() {
      this.visible = false;
    },
    openModal() {
      this.visible = true;
    },
    onChange(a, b, c) {
      console.log(a, b, c);
    },
    async __DELETE_WORK() {
      try {
        await this.$store.dispatch(
          "fetchPortfolio/deleteWork",
          this.portfolio?.id
        );
        this.$notification["success"]({
          message: "Success",
          description: "Muvaffaqiyatli o'chirildi",
        });
        this.$emit("getData");
        this.closeModal();
        this.closeDelete();
      } finally {
      }
    },
  },
  components: { PortfolioCard2, DeletePortfolio },
};
</script>
<style lang="css" scoped>
.cardo__top {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;
}
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}
.count {
  box-shadow: 0px 4px 16px 0px rgba(11, 11, 21, 0.16);
}
.wrapper >>> ant-modal-content {
  border-radius: 16px;
}
.ant-carousel >>> .slick-slide {
  padding-right: 16px;
}
.modal__images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
}
.modal__images div {
  height: 310px;
  overflow: hidden;
  border-radius: 16px;
}
.modal__images div:first-child {
  grid-column: 1 / 4;
  height: 717px;
}
.modal__title {
  color: var(--Black, #020105);
  font-family: "TT Interfaces";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  margin-bottom: 8px;
}
.komarovo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #5c46e5;
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.x {
  position: absolute;
  top: 24px;
  right: 24px;
}
.modal__header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.modal__views {
  border-radius: 6px;
  background: var(--BG-grey, #f8f9ff);
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--grey-80, #353437);
  font-family: "TT Interfaces";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 21px */
}
.modal__likes {
  border-radius: 6px;
  background: var(--BG-grey, #f8f9ff);
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  color: var(--Blue, #5c46e5);
  font-family: "TT Interfaces";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.modal__desc {
  max-width: 794px;
  margin: 0 auto;
}
.modal__desc p {
  color: var(--grey-64, #5d5d5f);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}
.modal__owner,
.modal__others {
  /* background: var(--BG-grey, #f8f9ff); */
}
.modal__cardo {
  border-radius: 16px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  margin: 0 auto;
  width: 100%;
  max-width: 328px;
  padding: 16px;
}
.modal__owner {
  padding: 32px 0;
}
.modal__cardo-person {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 24px; */
}
.modal__cardo-person img {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
}
.modal__cardo-name {
  color: var(--Black, #020105);
  font-family: "TT Interfaces";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  margin-bottom: 8px;
}
.modal__cardo-status {
  color: var(--grey-40, #9a999b);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.modal__cardo-footer {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
}
.modal__cardo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e7edfb;
}
.modal__cardo-item:last-child {
  border-right: 0;
}
@media (max-width: 1200px) {
  .scroll-none::-webkit-scrollbar {
    display: none;
  }
  .modal__header,
  .modal__images,
  .modal__others {
    padding: 0;
  }
  .modal__desc {
    padding-top: 24px;
    padding-bottom: 0;
    margin-right: -16px;
    margin-left: -16px;
  }
  .modal__header {
    flex-direction: column;
    align-items: flex-start;
    grid-area: 12px;
    margin-bottom: 32px;
  }
  .x {
    top: -40px;
    right: 0;
  }
  .modal__title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  }
  .komarovo {
    margin-bottom: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
  .modal__images div:first-child {
    height: 217px;
    border-radius: 12px;
    overflow: hidden;
    grid-column: 1/3;
  }
  .modal__images div {
    height: 140px;
  }
  .modal__images {
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 16px;
  }
  .modal__desc p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 16px;
  }
  .modal__owner {
    padding: 56px 16px 32px 16px;
    margin: 0 -16px;
  }
  .modal__cardo-person {
    margin-bottom: 8px;
  }
  .modal__cardo img {
    width: 66px;
    height: 66px;
  }
  .modal__cardo-name {
    margin-bottom: 4px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .modal__cardo-status {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .modal__cardo {
    width: 100%;
    max-width: 100%;
  }
  .modal__others {
    margin: 0 -16px -56px -16px;
    padding: 0 16px 56px 16px;
  }
  .ant-carousel >>> .slick-slide {
    padding-right: 4px;
  }
  .cardo__top {
    display: grid;
    grid-template-columns: 66px 1fr;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
  }
}
</style>
