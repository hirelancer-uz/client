<template>
  <div class="card file-card flex flex-col gap-[8px]">
    <div
      v-if="imgFileTypes.includes(fyleType)"
      class="image h-[104px] w-[104px] xl:w-full xl:h-[90px] rounded-[4px] xl:rounded-lg overflow-hidden cursor-pointer"
      @click="previewImg = true"
    >
      <img
        v-if="file?.file"
        loading="lazy"
        class="object-cover w-full h-full"
        :src="`${imgUrl}${file?.file}`"
        alt=""
      />
      <img
        v-else
        loading="lazy"
        class="object-cover w-full h-full"
        src="../../assets/images/file.png"
        alt=""
      />
    </div>
    <a :href="`${imgUrl}${file?.file}`" target="_blank" v-else >
      <div

        class="image h-[104px] w-[104px] xl:w-full xl:h-[90px] rounded-[4px] xl:rounded-lg overflow-hidden cursor-pointer border border-solid border-grey-8 flex items-center justify-center"
      >
        <IconsDocxFile />
      </div>
    </a>
    <div class="w-[104px] flex">
      <p class="text-[12px] text-grey-80 truncate ">{{file?.file.split('/')[1]}}</p>
      <p>.{{fyleType}}</p>
    </div>
    <transition name="fade" appear>
      <div
        v-if="previewImg"
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-modal z-50"
      ></div>
    </transition>
    <transition name="pop" appear>
      <div
        v-if="previewImg"
        class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 xl:px-4"
      >
        <div class="fixed w-full h-full" @click="previewImg = false"></div>
        <div class="max-w-[712px] xl:max-w-full w-full relative">
          <button
            class="absolute xl:hidden right-[-66px] top-[-10px]"
            @click="previewImg = false"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.4852 15.5148L15.5146 32.4853M32.4852 32.4852L15.5146 15.5146"
                stroke="white"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <img
            class="w-full h-full object-contain relative z-[100]"
            :src="`${imgUrl}${file?.file}`"
            alt=""
          />
        </div>
        <div class="absolute bottom-4 px-4 left-0 w-full">
          <button
            class="hidden xl:flex text-black text-[14px] font-semibold bg-white justify-center h-12 rounded-[12px] border border-solid border-border-darik items-center w-full"
            @click="previewImg = false"
          >
            {{ $store.state.translations["order.close"] }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { imgFileTypes } from "@/helpers/constants";

export default {
  props: ["file"],
  data() {
    return {
      previewImg: false,
      imgFileTypes: imgFileTypes
    };
  },
  computed: {
    imgUrl() {
      return this.$config.baseURL + "/storage/";
    },
    fyleType() {
      return this.file?.file.split('.').at(-1);
    },
  },
  watch: {
    previewImg(val) {
      if (val) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.height = "auto";
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>
<style lang="css" scoped>
.bg-modal {
  background: rgba(2, 1, 5, 0.48);
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.3s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
