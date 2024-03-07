<template>
  <div>
    <div class="xl:hidden">
      <a-modal
        class="complaint-modal xl:hidden"
        v-model="visible"
        :body-style="{
          padding: '16px',
          paddingLrft: '32px',
          borderRadius: '24px',
        }"
        centered
        :closable="false"
        width="954px"
        @ok="closeModal"
      >
        <div class="flex flex-col gap-6 pl-4">
          <div class="flex flex-col gap-8">
            <div class="flex justify-between">
              <h4 class="text-black text-[24px] font-semibold">
                {{ $store.state.translations["modal.sure-cancel"] }}
              </h4>
              <button @click="visible = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.6565 10.3428L10.3428 21.6566M21.6565 21.6565L10.3428 10.3428"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="head flex gap-[37px] justify-start items-center">
              <!-- <div class="rating flex flex-col gap-2">
              <p class="text-[14px] text-grey-40 whitespace-nowrap">
                Frilanserga baho berish
              </p>
              <a-rate v-model="form.stars" />
            </div> -->
              <a-select
                v-model="form.is_positive"
                :placeholder="$store.state.translations[`modal.positive`]"
                class="w-full"
              >
                <a-select-option
                  :value="optin.value"
                  v-for="optin in options"
                  :key="optin.value"
                >
                  {{ optin.label }}</a-select-option
                >
              </a-select>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <a-form-model :model="form" ref="ruleForm" :rules="rules">
              <a-form-model-item prop="feedback" class="form-item w-full mb-0">
                <a-input
                  v-model="form.feedback"
                  type="textarea"
                  rows="6"
                  :placeholder="
                    $store.state.translations[`modal.leave-comment`]
                  "
                />
              </a-form-model-item>
            </a-form-model>
            <div class="flex justify-between">
              <span class="flex">
                <a-checkbox v-model="done" class="flex items-center">
                  <p class="text-base text-grey-80 font-regular">
                    {{ $store.state.translations["modal.sure-cancel"] }}
                  </p></a-checkbox
                >
                <!-- <a-radio v-model="done" class="flex">

              </a-radio> -->
              </span>
              <div class="flex gap-4">
                <button
                  @click="closeModal"
                  class="h-[54px] gap-2 items-center w-[194px] flex justify-center border border-solid border-grey-24 bg-white rounded-[8px] text-base font-medium text-black"
                >
                  {{ $store.state.translations["modal.cancel"] }}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 12H8.5M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                      stroke="#5D5D5F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  @click="onSubmit"
                  class="h-[54px] items-center w-[194px] flex justify-center gap-2 border border-solid border-main-color bg-main-color rounded-[8px] text-base font-medium text-white"
                  :class="{
                    'pointer-events-none opacity-50': loadingBtn || !done,
                  }"
                >
                  {{ $store.state.translations["modal.save"] }}
                  <LoaderBtn v-if="loadingBtn" />
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M9.56495 11.757L11.938 14.129L16.195 9.87098M20.498 11.999C20.498 16.4161 16.9171 19.997 12.5 19.997C8.08278 19.997 4.50195 16.4161 4.50195 11.999C4.50195 7.5818 8.08278 4.00098 12.5 4.00098C16.9171 4.00098 20.498 7.5818 20.498 11.999Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </a-modal>
    </div>
    <div class="hidden xl:block">
      <vue-bottom-sheet-vue2
        @closed="closed"
        ref="compliteOrder"
        class="bottom-drawer"
      >
        <div class="flex flex-col gap-4 relative xl:px-4 py-4">
          <div class="flex justify-end w-full">
            <button @click="close" class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.2427 7.75738L7.75745 16.2427M16.2427 16.2426L7.75745 7.75732"
                  stroke="#353437"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-col gap-4 w-full">
            <div class="flex justify-between">
              <h4 class="text-black text-[24px] font-semibold xl:text-[18px]">
                {{ $store.state.translations["modal.sure-cancel"] }}
              </h4>
            </div>
            <div class="head flex gap-[37px] justify-start items-center">
              <!-- <div class="rating flex flex-col gap-2">
              <p class="text-[14px] text-grey-40 whitespace-nowrap">
                Frilanserga baho berish
              </p>
              <a-rate v-model="form.stars" />
            </div> -->
              <a-select
                v-model="form.is_positive"
                :placeholder="$store.state.translations[`modal.positive`]"
                class="w-full"
              >
                <a-select-option
                  :value="optin.value"
                  v-for="optin in options"
                  :key="optin.value"
                >
                  {{ optin.label }}</a-select-option
                >
              </a-select>
            </div>
          </div>
          <div class="flex flex-col gap-4 w-full">
            <a-form-model :model="form" ref="ruleForm" :rules="rules">
              <a-form-model-item prop="feedback" class="form-item w-full mb-0">
                <a-input
                  v-model="form.feedback"
                  type="textarea"
                  rows="6"
                  :placeholder="
                    $store.state.translations[`modal.leave-comment`]
                  "
                />
              </a-form-model-item>
            </a-form-model>
            <div class="flex flex-col">
              <span class="flex">
                <a-checkbox v-model="done" class="flex items-center">
                  <p class="text-base text-grey-80 font-regular xl:text-[14px]">
                    {{ $store.state.translations["modal.sure-cancel"] }}
                  </p></a-checkbox
                >
                <!-- <a-radio v-model="done" class="flex">

              </a-radio> -->
              </span>
              <div class="grid grid-cols-2 gap-3 mt-10">
                <button
                  @click="close"
                  class="h-12 gap-2 items-center w-full flex justify-center border border-solid border-grey-24 bg-white rounded-[8px] text-[14px] font-medium text-black"
                >
                  {{ $store.state.translations["modal.cancel"] }}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 12H8.5M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                      stroke="#5D5D5F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  @click="onSubmit"
                  class="h-12 items-center w-full flex justify-center gap-2 border border-solid border-main-color bg-main-color rounded-[8px] text-[14px] font-medium text-white"
                  :class="{
                    'pointer-events-none opacity-50': loadingBtn || !done,
                  }"
                >
                  {{ $store.state.translations["modal.save"] }}
                  <LoaderBtn v-if="loadingBtn" />
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M9.56495 11.757L11.938 14.129L16.195 9.87098M20.498 11.999C20.498 16.4161 16.9171 19.997 12.5 19.997C8.08278 19.997 4.50195 16.4161 4.50195 11.999C4.50195 7.5818 8.08278 4.00098 12.5 4.00098C16.9171 4.00098 20.498 7.5818 20.498 11.999Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </vue-bottom-sheet-vue2>
    </div>
  </div>
</template>
<script>
import LoaderBtn from "@/components/loader-btn.vue";
export default {
  props: ["visibleProp", "title", "loadingBtn"],
  data() {
    return {
      visible: false,
      done: false,
      value: undefined,
      options: [
        {
          label: this.$store.state.translations[`modal.positive`],
          value: 1,
        },
        {
          label: this.$store.state.translations[`modal.negative`],
          value: 0,
        },
      ],
      text: "",
      rules: {
        feedback: [
          {
            required: true,
            message: this.$store.state.translations[`modal.required`],
            trigger: "blur",
          },
        ],
      },
      form: {
        order: null,
        stars: 5,
        feedback: "",
        is_positive: 1,
      },
    };
  },
  mounted() {
    this.form.order = this.$route.params.id;
  },
  methods: {
    closed() {
      this.closeModal();
    },
    open() {
      this.$refs.compliteOrder.open();
    },
    close() {
      this.$refs.compliteOrder.close();
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("submit", this.form);
        }
      });
    },
  },
  watch: {
    visible(val) {
      if (!val) this.close();
    },
  },
  components: {
    LoaderBtn,
  },
};
</script>
<style lang="css" scoped>
:deep(.bottom-sheet__draggable-area) {
  display: none;
}
:deep(.ant-checkbox-wrapper) {
  display: flex;
  align-items: center;
}
:deep(.ant-checkbox-checked .ant-checkbox-inner) {
  border-color: var(--blue);
  background-color: var(--blue);
}
:deep(
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner
  ) {
  border-color: var(--blue);
}
:deep(.ant-checkbox-checked::after) {
  border-color: var(--blue);
}
:deep(.ant-checkbox + span) {
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.complaint-modal :deep(.ant-modal-content) {
  border-radius: 16px;
}
.complaint-modal :deep(.form-item textarea) {
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: £FFF;
}
:deep(.ant-select-selection--single) {
  height: 48px;
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: #fff;
  max-width: 280px;
}
:deep(.ant-rate) {
  height: 20px;
  display: flex;
  align-items: center;
}
:deep(.ant-select-selection__rendered),
:deep(.ant-select-selection-selected-value) {
  height: 100%;
}
:deep(.ant-select-selection-selected-value) {
  display: flex !important;
  align-items: center;
  color: var(--grey-80);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
:deep(.ant-radio-checked .ant-radio-inner) {
  border-color: var(--main-color);
}
:deep(.ant-radio-inner::after) {
  background: var(--main-color);
}
:deep(.ant-radio-checked::after) {
  border-color: var(--main-color);
}
:deep(.ant-radio-wrapper) {
  display: flex;
  align-items: center;
}
@media (max-width: 1200px) {
  :deep(.ant-select-selection-selected-value) {
    font-size: 14px !important;
  }
}
</style>
