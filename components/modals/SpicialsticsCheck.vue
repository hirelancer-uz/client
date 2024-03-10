<template lang="html">
  <div>
    <div class="xl:hidden">
      <a-modal
        v-model="visible"
        :body-style="{ padding: '32px 40px', borderRadius: '30px' }"
        :dialog-style="{ padding: '32px', borderRadius: '24px' }"
        centered
        class="modal xl:hidden"
        :closable="false"
        width="1198px"
        @ok="closeModal"
      >
        <div class="flex flex-col gap-8">
          <div class="flex justify-between items-center">
            <h6 class="text-black text-[24px] font-semibold">
              {{ $store.state.translations["modal.choose-direction"] }}
            </h6>
            <p
              class="text-[18px] text-grey-80 flex gap-2 items-center"
              v-if="maxSelectCount > 1"
            >
              <span class="text-main-color font-medium">{{
                checkedList.length
              }}</span
              >: {{ $store.state.translations["modal.choosen-one"] }}
              <span>(max {{ maxSelectCount }} ta)</span>
            </p>
          </div>
          <div class="modal-body">
            <div
              class="flex flex-col gap-4 max-h-[620px] overflow-y-scroll modal-list pr-[9px]"
            >
              <div
                class="cursor-pointer flex gap-3 items-center h-[67px] px-6 rounded-xl bg-bg-f9 text-black text-base font-medium border-[2px] border-solid border-bg-f9"
                v-for="item in specialities"
                @click="onSelect(item?.id)"
                :class="{
                  active:
                    (modalList ? modalList : specialities[0]?.id) === item?.id,
                }"
              >
                <img class="w-[56px] h-[56px] object-contain" v-if="item?.icon" :src="`${imgUrl}${item?.icon}`" alt="">
                {{ item?.name_ru }}
              </div>
            </div>
            <div class="modal-board flex flex-col justify-between gap-4">
              <div class="flex gap-3 flex-wrap items-start">
                <button
                  :disabled="
                    !Boolean(
                      checkedList.find((elemChild) => elemChild.id == child.id)
                    ) && checkedList.length == maxSelectCount
                  "
                  class="px-4 py-2 bg-bg-grey rounded-[22px] flex items-center gap-2"
                  v-for="child in specialities?.find(
                    (elem) =>
                      elem.id ===
                      (modalList !== null ? modalList : specialities[0]?.id)
                  )?.children"
                  @click="onchecked(child)"
                >
                  <a-checkbox
                    :disabled="
                      !Boolean(
                        checkedList.find(
                          (elemChild) => elemChild.id == child.id
                        )
                      ) && checkedList.length == maxSelectCount
                    "
                    :checked="
                      Boolean(
                        checkedList.find(
                          (elemChild) => elemChild.id == child.id
                        )
                      )
                    "
                  />
                  <p class="text-grey-80 text-[14px] font-medium">
                    {{ child?.name_ru }}
                  </p>
                </button>
              </div>
              <div class="flex gap-4 justify-end">
                <button
                  @click="closeChecked"
                  class="h-[60px] border border-solid w-[227px] border-border-darik rounded-[12px] flex justify-center items-center text-[18px] text-black font-medium"
                >
                  {{ $store.state.translations["modal.cancel"] }}
                </button>
                <button
                  @click="$emit('saveChecked', checkedList)"
                  class="h-[60px] border border-solid w-[227px] border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] text-white font-medium"
                >
                  {{ $store.state.translations["modal.save"] }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </a-modal>
    </div>
    <div class="hidden xl:block">
      <vue-bottom-sheet-vue2
        ref="openSpecials"
        class="bottom-drawer spicial-drawer h-full"
        :init-sheet-height="700"
        @closed="closed"
      >
        <div class="px-4 pb-4 flex flex-col justify-between h-full">
          <div class="flex flex-col">
            <div
              class="flex justify-between items-center flex-col gap-3 pb-6 border-[0] border-b border-solid border-grey-light"
            >
              <h6 class="text-black text-[18px] font-semibold">
                {{ $store.state.translations["modal.choose-direction"] }}
              </h6>
              <p
                class="text-[14px] text-grey-80 flex gap-2 items-center"
                v-if="maxSelectCount > 1"
              >
                <span class="text-main-color font-medium">{{
                  checkedList.length
                }}</span
                >: {{ $store.state.translations["modal.choosen-one"] }}
                <span>(max {{ maxSelectCount }} ta)</span>
              </p>
            </div>
            <div class="drop-list flex flex-col gap-2 xl:gap-8 mt-8">
              <div
                class="dropdown overflow-hidden"
                :class="{ active: dropdownOpens.includes(item?.id) }"
                v-for="item in specialities"
                @click="onSelect(item?.id)"
              >
                <button
                  class="drop-head xl:px-0 xl:py-0 bg-white relative z-20 w-full flex justify-between items-center px-[10px] py-[10px]"
                  @click="handleDropdown(item?.id)"
                >
                  <h2
                    class="text-[14px] font-medium text-grey-80 flex gap-2 items-center"
                    :class="{ 'text-blue': dropdownOpens.includes(item?.id) }"
                  >
                    <span class="flex items-center gap-2"
                      >
                      <img class="w-6 h-6 object-contain" v-if="item?.icon" :src="`${imgUrl}${item?.icon}`" alt="">
                      {{ item?.name_ru }}</span
                    >
                    <span class="text-[12px] text-grey-40"
                      >({{ item?.children.length }})</span
                    >
                  </h2>
                  <span
                    :class="{ 'rotate-180': dropdownOpens.includes(item?.id) }"
                    class="drop-icon"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 10L12 14L17 10"
                        stroke="#020105"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                  ></span>
                </button>

                <div class="drop-body relative z-10">
                  <div class="py-4 flex flex-col gap-4 xl:gap-8">
                    <div class="flex gap-3 flex-wrap">
                      <button
                        class="px-4 py-2 bg-bg-grey rounded-[22px] flex items-center gap-2"
                        v-for="child in item?.children"
                        @click="onchecked(child)"
                        :disabled="
                          !Boolean(
                            checkedList.find(
                              (elemChild) => elemChild.id === child.id
                            )
                          ) && checkedList.length === maxSelectCount
                        "
                      >
                        <a-checkbox
                          :disabled="
                            !Boolean(
                              checkedList.find(
                                (elemChild) => elemChild.id === child.id
                              )
                            ) && checkedList.length === maxSelectCount
                          "
                          :checked="
                            Boolean(
                              checkedList.find(
                                (elemChild) => elemChild.id === child.id
                              )
                            )
                          "
                        />
                        <p class="text-grey-80 text-[14px] font-medium">
                          {{ child?.name_ru }}
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- </Transition> -->
              </div>
            </div>
          </div>
          <div class="flex gap-2 flex-col w-full mt-20">
            <button
              @click="saveSelected"
              class="h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[14px] text-white font-medium"
            >
              {{ $store.state.translations["modal.save"] }}
            </button>
            <button
              @click="closeChecked"
              class="h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[14px] text-black font-medium"
            >
              {{ $store.state.translations["modal.cancel"] }}
            </button>
          </div>
        </div>
      </vue-bottom-sheet-vue2>
    </div>
  </div>
</template>
<script>
export default {
  props: ["specialities", "activeCheckedList", "maxCount"],
  data() {
    return {
      visible: false,
      checkedList: [],
      errorSelect: false,
      modalList: null,
      dropdownOpens: [],
      loading: true,
    };
  },

  computed: {
    maxSelectCount() {
      return this.maxCount || 3;
    },
      imgUrl() {
      return this.$config.baseURL + "/storage/"
    },
  },
  methods: {
    closed() {
      this.closeModal();
    },
    closeChecked() {
      this.checkedList = [];
      this.close();
      this.closeModal();
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },

    open() {
      this.checkedList = [...this.activeCheckedList];
      this.$refs.openSpecials?.open();
    },
    close() {
      this.$refs.openSpecials.close();
    },
    saveSelected() {
      this.$emit("saveChecked", this.checkedList);
      this.close();
      this.closeModal();
    },
    onchecked(obj) {
      if (this.checkedList.find((item) => item.id === obj.id)) {
        this.checkedList = this.checkedList.filter(
          (item) => item.id !== obj.id
        );
      } else {
        if (this.checkedList.length === this.maxSelectCount) {
          this.checkedList.shift();
        }
        this.checkedList.push(obj);
      }
    },
    async deleteChecked(id) {
      this.onSubmit(id);
    },
    onSelect(id) {
      this.modalList = id;
    },
    handleDropdown(id) {
      this.dropdownOpens.includes(id)
        ? (this.dropdownOpens = this.dropdownOpens.filter((item) => item != id))
        : this.dropdownOpens.push(id);
    },
  },
  watch: {
    visible(val) {
      if (!val) this.close();
    },
  },
};
</script>
<style lang="css" scoped>
.buttons .active {
  border-color: var(--blue);
  color: var(--blue);
  background-color: #fff;
}

.specialities-list :deep(.ant-skeleton-title) {
  height: 38px;
  margin-top: 0;
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
}
</style>
