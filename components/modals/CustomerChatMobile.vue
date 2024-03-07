<template>
  <div>
    <vue-bottom-sheet-vue2
      ref="customerChat"
      class="bottom-drawer h-full"
      :init-sheet-height="750"
    >
      <div
        class="offers-chat rounded-[16px] bg-white relative flex flex-col h-full"
      >
        <div class="flex justify-end px-4 pt-4 mb-[-8px]">
          <button @click="close">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.2426 7.75786L7.75732 16.2431M16.2426 16.2431L7.75732 7.75781"
                stroke="#353437"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          class="head px-4 py-4 border-[0] border-b border-solid border-grey-8"
        >
          <div
            class="image w-[52px] h-[52px] border-[2px] border-solid border-agro-green rounded-full overflow-hidden"
          >
            <img
              v-if="order?.selected_request?.freelancer?.avatar"
              class="w-full h-full object-cover"
              :src="`${imgUrl}${order?.selected_request?.freelancer?.avatar}`"
              alt=""
            />
            <img
              v-else
              class="w-full h-full object-cover"
              src="@/assets/images/user-avatar.jpg"
              alt=""
            />
          </div>
          <div class="flex justify-between items-center">
            <div class="flex flex-col gap-1">
              <h5 class="text-[20px] text-black font-medium">
                {{ order?.selected_request?.freelancer?.name }}
              </h5>
              <p class="text-grey-40 text-base">14:30</p>
            </div>
          </div>
        </div>
        <div
          class="board px-6 py-6 flex flex-col gap-4 border-[0] border-b border-solid border-grey-8 flex-auto"
        >
          <div class="flex justify-start">
            <div
              class="client-content px-2 max-w-[642px] py-2 bg-bg-grey rounded-[10px] rounded-bl-none flex gap-6 items-end"
            >
              <p class="text-[12px] text-black">5 дней</p>
              <span class="text-[10px] text-grey-40">14:30</span>
            </div>
          </div>
          <div class="flex justify-end">
            <div
              class="content px-2 py-2 max-w-[642px] bg-purple rounded-[10px] rounded-br-none flex gap-6 items-end"
            >
              <p class="text-[12px] text-white">
                Меня заинтересовал ваш проект. Моя цель – создавать интересные и
                интуитивно по
              </p>
              <span class="text-[10px] text-white">14:30</span>
            </div>
          </div>
          <div class="flex justify-start">
            <div
              class="client-content px-2 max-w-[642px] py-2 bg-bg-grey rounded-[10px] rounded-bl-none flex gap-6 items-end"
            >
              <p class="text-[12px] text-black">5 дней</p>
              <span class="text-[10px] text-grey-40">14:30</span>
            </div>
          </div>
          <div class="flex justify-end">
            <div
              class="content px-2 py-2 max-w-[642px] bg-purple rounded-[10px] rounded-br-none flex gap-6 items-end"
            >
              <p class="text-[12px] text-white">
                Меня заинтересовал ваш проект. Моя цель – создавать интересные и
                интуитивно по
              </p>
              <span class="text-[10px] text-white">14:30</span>
            </div>
          </div>
        </div>
        <div
          class="px-6 py-6 flex justify-center items-center italic text-base text-grey-80"
          v-if="status == 3"
        >
          {{ $store.state.translations["modal.chat-closed"] }}
        </div>
        <div class="footer px-4 py-4" v-else>
          <input type="text" placeholder="Напишите сообщение ..." />
          <div class="flex items-center justify-end gap-4">
            <button>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2252 5.18839L6.451 11.9626C5.80016 12.6134 5.80016 13.6684 6.451 14.3192C7.10183 14.9701 8.15683 14.9701 8.80766 14.3192L15.581 7.54589C16.8827 6.24422 16.8827 4.13339 15.581 2.83172C14.2793 1.53005 12.1685 1.53005 10.8668 2.83172L4.096 9.60255C2.14183 11.5567 2.14183 14.7251 4.096 16.6792C6.05016 18.6334 9.2185 18.6334 11.1727 16.6792L17.1577 10.6942"
                  stroke="#5C46E6"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              class="h-8 w-8 flex justify-center items-center rounded-full bg-blue"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.56885 10.6662V12.2535C3.56885 12.7489 4.09018 13.0715 4.53351 12.8495L14.2355 7.99952L4.53351 3.14952C4.09018 2.92752 3.56885 3.25019 3.56885 3.74552V7.99952H8.01351"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </vue-bottom-sheet-vue2>
  </div>
</template>
<script>
export default {
  props: ["order", "status"],
  computed: {
    imgUrl() {
      return this.$config.imgBaseUrl
    },
  },
  methods: {
    open() {
      this.$refs.customerChat.open();
    },
    close() {
      this.$refs.customerChat.close();
    },
  },
};
</script>
<style lang="css" scoped>
:deep(.bottom-sheet__main) {
  height: 100%;
}
:deep(.bottom-sheet__draggable-area) {
  display: none;
}
.head {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 16px;
}
.footer {
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 16px;
}
.footer input::placeholder {
  color: var(--grey-40);
  font-family: "TT Interfaces";
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 150%;
}
.footer input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
}
</style>
