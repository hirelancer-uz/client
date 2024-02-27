<template>
  <div @click="visible = true" class="wrapper">
    <div class="portfolio-card rounded-lg overflow-hidden cursor-pointer">
      <div class="image h-[270px] relative">
        <img
          v-if="portfolio?.images.length > 0"
          class="h-full w-full object-cover"
          :src="`${baseUrl}/storage/${portfolio?.images[0]?.img}`"
          alt=""
        />
        <img
          v-else
          class="h-full w-full object-cover"
          src="@/assets/images/portfolio.png"
          alt=""
        />
        <div class="absolute right-[14px] top-[14px] flex gap-[12px]">
          <div
            class="text-blue text-[14px] flex gap-[6px] font-semibold px-2 h-[32px] rounded-[6px] bg-white items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M15.8477 7.38982C16.7174 8.30488 16.7174 9.69512 15.8477 10.6102C14.3809 12.1535 11.8616 14.25 9 14.25C6.13836 14.25 3.61912 12.1535 2.15228 10.6102C1.28257 9.69512 1.28257 8.30488 2.15228 7.38982C3.61912 5.8465 6.13836 3.75 9 3.75C11.8616 3.75 14.3809 5.8465 15.8477 7.38982Z"
                stroke="#5C46E6"
              />
              <path
                d="M11.25 9C11.25 10.2426 10.2426 11.25 9 11.25C7.75736 11.25 6.75 10.2426 6.75 9C6.75 7.75736 7.75736 6.75 9 6.75C10.2426 6.75 11.25 7.75736 11.25 9Z"
                stroke="#5C46E6"
              />
            </svg>
            {{ portfolio?.view_count }}
          </div>
          <div
            class="text-green text-[14px] flex gap-[6px] font-semibold px-2 h-[32px] rounded-[6px] bg-white items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M4.5 6H3C2.17157 6 1.5 6.67157 1.5 7.5V14.25C1.5 15.0784 2.17157 15.75 3 15.75H4.5C5.32843 15.75 6 15.0784 6 14.25V7.5C6 6.67157 5.32843 6 4.5 6Z"
                stroke="#009A10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9077 15.75H9.15833C8.56605 15.75 7.98703 15.5747 7.49423 15.2462L6.33398 14.4727C6.12533 14.3336 6 14.0994 6 13.8486V7.69917C6 7.56865 6.03406 7.44039 6.09882 7.32707L9 2.25H9.99653C11.4941 2.25 12.3873 3.91902 11.5566 5.16506L10.5 6.75H14.5788C15.5547 6.75 16.2707 7.66708 16.034 8.6138L14.8181 13.4776C14.4842 14.8131 13.2843 15.75 11.9077 15.75Z"
                stroke="#009A10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ portfolio?.classes_count }}
          </div>
        </div>
      </div>
      <div
        class="body px-4 pt-3 pb-4 flex rounded-b-lg flex-col gap-[6px] border-[0] border-t-0 border-b border-x border-solid border-grey-8"
      >
        <h4 class="text-black text-[18px] font-semibold">
          {{ portfolio?.name }}
        </h4>
        <div class="flex gap-2 xl:gap-2 w-full" ref="widthHandle">
          <p
            class="text-[14px] bg-apple-grey rounded-[22px] h-[28px] px-3 flex items-center font-medium text-grey-64 xl:text-[12px] whitespace-nowrap"
            v-for="(specialit, index) in visibleButtons"
            :key="specialit?.id"
            :ref="`button${index}`"
          >
            {{ specialit?.name_ru }}
          </p>
          <p
            v-if="hiddenButtonsCount"
            class="text-[14px] bg-apple-grey rounded-[22px] h-[28px] px-3 flex items-center font-medium text-grey-64 xl:text-[12px] whitespace-nowrap"
          >
            + {{ hiddenButtonsCount }}
          </p>
        </div>
        <!-- <div class="flex justify-between">
          <p class="text-[15px] text-grey-40">
            {{ portfolio?.specialities[0]?.name_ru }}
          </p>
        </div> -->
      </div>
    </div>
    <a-modal
      class="close-modal mt-[100px]"
      v-model="visible"
      :body-style="{
        padding: '0',
        borderRadius: '24px',
        margin: '120px 0 120px 0',
      }"
      :closable="false"
      width="1440px"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <div class="modal__header px-[120px] pt-[46px] pb-[24px]">
        <button @click="handleCancel" class="x">
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
            <p>Понравилось</p>
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
          <img :src="`${baseUrl}/storage/${image.img}`" alt="" />
        </div>
      </div>
      <div
        class="modal__desc py-[72px]"
        v-if="portfolio?.desc"
        v-html="portfolio?.desc"
      ></div>
      <div class="modal__owner">
        <div class="modal__cardo">
          <div class="cardo__top">
            <div class="modal__cardo-person">
              <img
                v-if="freelancer?.avatar"
                :src="`${baseUrl}/storage/${freelancer?.avatar}`"
                alt=""
              />
              <img v-else src="@/assets/images/user-avatar.jpg" alt="" />
            </div>
            <div>
              <h4 class="modal__cardo-name">{{ freelancer?.name }}</h4>
              <p class="modal__cardo-status">Зарегистрирован: более 5 лет назад</p>
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
                ><span class="text-pantone-2023">{{ freelancer?.dislikes_count }}</span
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
      <div class="modal__others pl-[120px] pb-[40px]">
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
          <PortfolioCard
            v-for="portfolio in portfolios"
            :portfolio="portfolio"
            :key="portfolio?.id"
          />
        </a-carousel>
      </div>
    </a-modal>
  </div>
</template>
<script>
import PortfolioCard from "./PortfolioCard.vue";
import moment from "moment";
export default {
  props: ["portfolio", "portfolios", "freelancer"],
  data() {
    return {
      visible: false,
      visibleButtons: [],
    };
  },
  computed: {
    hiddenButtonsCount() {
      return this.portfolio?.specialities.length - this.visibleButtons.length;
    },
    dateFormat() {
      return moment(this.portfolio?.created_at).format("HH:mm DD.MM.YYYY");
    },
    baseUrl() {
      return process.env.BASE_URL;
    },
  },
  async mounted() {
    this.visibleButtons = await this.portfolio?.specialities;
    this.widthHandle();
  },
  methods: {
    widthHandle() {
      if (this.$refs.widthHandle) {
        let containerWidth = this.$refs.widthHandle.offsetWidth;
        let totalWidth = 43;
        let visibleButtonsCount = 0;
        if (this.portfolio?.specialities.length > 0) {
          setTimeout(() => {
            for (let i = 0; i < this.portfolio?.specialities.length; i++) {
              totalWidth += this.$refs[`button${i}`][0]?.offsetWidth;
              if (totalWidth <= containerWidth) {
                visibleButtonsCount++;
              } else {
                break;
              }
            }
            this.visibleButtons = this.portfolio?.specialities.slice(
              0,
              visibleButtonsCount
            );
          }, 0);
        }
      }
    },
    handleOk() {
      this.visible = true;
    },
    handleCancel(e) {
      this.visible = false;
    },
    onChange(a, b, c) {
      console.log(a, b, c);
    },
  },
  components: { PortfolioCard },
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
  background: var(--BG-grey, #f8f9ff);
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
  .modal__desc,
  .modal__others {
    padding: 0;
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
