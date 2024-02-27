<template lang="html">
  <div
    class="notification-card border border-solid border-border-darik rounded-[16px] px-6 py-4"
  >
    <h5 class="text-dark-grey-100 text-[20px] font-medium mb-4">
      Davlat idorasining bo’lim boshlig’idan
    </h5>
    <div class="body pb-12 border-[0] border-b border-border-darik border-solid">
      <p class="text-base text-dark-grey-80 desc">
        O’zbekiston respublikasi milly gvardiyasi qo’riqlash bosh boshqarmasining idoraviy
        jihatdan tegishly bo’lmagan qorovullik bo’linmalariga ish (xizmat)ga qabul qilish
        va idoraviy jihatdan tegishly bo’lmagan xabriylashtirilgan O’zbekiston
        respublikasi milly gvardiyasi qo’riqlash bosh boshqarmasining idoraviy jihatdan
        tegishly bo’lmagan qorovullik bo’linmalariga ish (xizmat)ga qabul qilish va
        idoraviy jihatdan tegishly bo’lmagan xabriylashtirilgan O’zbekiston respublikasi
        milly gvardiyasi qo’riqlash bosh boshqarmasining idoraviy jihatdan tegishly
        bo’lmagan qorovullik bo’linmalariga ish (xizmat)ga qabul qilish va idoraviy
        jihatdan tegishly bo’lmagan xabriylashtirilgan
      </p>
    </div>
    <div class="footer mt-6 flex justify-between items-center">
      <span class="text-[14px] text-dark-grey-70 flex items-center gap-2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 9H21M8 2V5M16 2V5M7 22H17C19.2091 22 21 20.2091 21 18V7.5C21 5.29086 19.2091 3.5 17 3.5H7C4.79086 3.5 3 5.29086 3 7.5V18C3 20.2091 4.79086 22 7 22Z"
            stroke="#6C757D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
        >11.09.2023</span
      >
      <nuxt-link
        to="/"
        class="text-main-color text-base font-medium flex items-center gap-2"
        >Ko’rish<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 7L14 12L10 17"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></nuxt-link>
    </div>
    <a-modal
      class="xl:hidden flex"
      v-model="visible"
      :body-style="{ padding: '16px', borderRadius: '24px' }"
      :dialog-style="{ padding: '32px', borderRadius: '24px' }"
      centered
      :closable="false"
      width="955px"
      @ok="handleOk"
    >
      <div class="flex flex-col items-center gap-6 relative">
        <button @click="handleOk" class="absolute top-0 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M27.0718 12.929L12.9297 27.0711M27.0718 27.071L12.9297 12.9289"
              stroke="#020105"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <span class="py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40Z"
              fill="#009A10"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M57.8419 25.6321C59.1497 26.6493 59.3853 28.5341 58.3681 29.842L42.3401 50.4494C39.8452 53.6571 35.1524 54.0733 32.1319 51.3549L21.9931 42.23C20.7616 41.1216 20.6618 39.2248 21.7701 37.9932C22.8785 36.7617 24.7754 36.6619 26.0069 37.7703L36.1456 46.8951C36.5771 47.2835 37.2476 47.224 37.604 46.7658L53.632 26.1583C54.6492 24.8505 56.534 24.6149 57.8419 25.6321Z"
              fill="#009A10"
            /></svg
        ></span>
        <div class="flex flex-col gap-4 items-center mt-[-16px]">
          <h4 class="text-[24px] text-black font-medium">Ваша заявка отправлена</h4>
          <div class="flex flex-col justify-center items-center">
            <p class="text text-base text-black">
              Sledite za statusom zayavki cherez telegram bot
            </p>
            <a class="text-black" href="">Открыть телеграм-бот</a>
          </div>
        </div>
        <div class="buttons flex flex-col gap-4 items-center mb-6">
          <button
            class="px-6 justify-center h-[40px] rounded-[8px] border border-solid border-blue bg-white text-blue text-base font-medium flex items-center"
          >
            Посмотреть заказ
          </button>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
export default {
  methods: {}
};
</script>
<style lang="css" scoped>
.desc {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
</style>
