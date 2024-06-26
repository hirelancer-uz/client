<template lang="html">
  <div
    class="create-order pt-[110px] pb-[120px] xl:pb-0 max-w-[953px] mx-auto xl:pt-0"
  >
    <div class="head flex justify-between items-center">
      <h1 class="flex text-[24px] text-black font-semibold xl:hidden">
        {{ title }}
      </h1>

      <div class="buttons flex gap-4 xl:hidden">
        <button
          @click="toBack"
          class="border-[2px] border-solid border-border-darik rounded-[12px] h-[54px] min-w-[194px] flex justify-center items-center gap-2 text-base text-grey-64 font-medium"
        >
          {{ $store.state.translations["auth.cancel"] }}
        </button>
        <button
          @click="onSubmit"
          class="w-full border border-solid border-blue bg-blue rounded-[8px] h-[54px] min-w-[194px] flex justify-center items-center text-base text-white font-medium gap-2 xl:hidden"
          :class="{ 'pointer-events-none opacity-50': loadingBtn }"
        >
          {{ $store.state.translations["order.share"] }}
          <LoaderBtn v-if="loadingBtn" />
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="form-block px-8 py-8 xl:px-4 xl:py-6 rounded-[16px] bg-white border-border-darik border-solid border xl:border-[0] mt-4 xl:mt-0"
    >
      <h2
        class="text-[20px] text-black font-semibold mb-6 xl:text-[18px] xl:mb-4"
      >
        {{ $store.state.translations["order.order-info"] }}
      </h2>

      <a-form-model ref="ruleForm" :model="form" :rules="rules">
        <div class="flex flex-col gap-6 xl:gap-4">
          <a-form-model-item
            class="order-item w-full mb-0"
            :label="$store.state.translations[`order.work-name`]"
            prop="name"
          >
            <a-input
              v-model="form.name"
              :placeholder="$store.state.translations[`order.work-name`]"
            />
          </a-form-model-item>

          <a-form-model-item
            class="order-select w-full mb-0 required"
            :label="$store.state.translations[`order.category`]"
            prop="activeCheckedList"
            :class="{
              errorSelect: activeCheckedList.length == 0 && errorSelect,
            }"
          >
            <div
              class="min-h-[58px] items-center border border-solid flex border-grey-8 rounded-lg px-4 py-3 modal-select"
            >
              <p
                class="text-grey-40 text-base"
                v-if="activeCheckedList.length == 0"
              >
                {{ $store.state.translations["header.specs"] }}
              </p>

              <div
                v-else
                class="w-auto flex flex-wrap gap-[4px] relative z-[20] max-w-[90%]"
              >
                <div
                  v-for="listItem in activeCheckedList"
                  :key="listItem?.id"
                  class="px-4 h-[34px] rounded-[4px] bg-apple-grey flex gap-1 items-center text-blue text-[14px] font-medium"
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
                class="h-[34px] flex justify-end my-[-10px] items-center absolute z-[10] right-0 px-4 w-full"
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

          <div>
            <div
              class="order-item required top flex items-center gap-[16px] mb-3"
            >
              <label class="inline gap-3 relative">
                {{ $store.state.translations["order.order-comment"] }}
              </label>

              <a-tooltip placement="top">
                <template slot="title">
                  <span>
                    {{ $store.state.translations["order.tooltip"] }}
                  </span>
                </template>
                <svg
                  class="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.3907 11.8428H12.0017V15.1998M12.0001 8.80372L12.0019 8.80078M19.9999 11.998C19.9999 16.4152 16.4191 19.996 12.0019 19.996C7.58473 19.996 4.00391 16.4152 4.00391 11.998C4.00391 7.58083 7.58473 4 12.0019 4C16.4191 4 19.9999 7.58083 19.9999 11.998Z"
                    stroke="#C2C2C3"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a-tooltip>
            </div>
            <!-- <a-form-model-item class="order-item required" prop="description"> -->
            <div class="relative">
            <ckeditor :editor="editor" v-model="form.description"/>
              <span class="absolute right-0 bottom-[-40px]"
                >{{ maxLength - form.description.length }} / {{ maxLength }}
              </span>
            </div>
              <!-- <quill-editor
                style="min-height: 250px"
                ref="quillEditor"
                :options="editorOption"
                :value="form.description"
                v-model="form.description"
                :placeholder="$store.state.translations[`order.order-comment`]"
                @change="handleTextChange"
              /> -->

            <!-- </a-form-model-item> -->
          </div>

          <div
            class="images pb-[40px] border-[0] border-b border-solid border-border-darik"
          >
            <div class="flex flex-col">
              <h2 class="text-[20px] text-black font-semibold xl:text-[18px]">
                {{ $store.state.translations["order.order-files"] }}
              </h2>
              <p class="text-[14px] text-grey-64">
                {{ $store.state.translations["order.upload-files"] }}
              </p>
            </div>
            <div class="clearfix flex flex-col mt-6">
              <div class="flex order-upload gap-2 flex-wrap">
                <!-- <a-upload
                  list-type="picture-card"
                  :file-list="fileList"
                  @preview="handlePreview"
                  @change="handleChange"
                >
                  <div v-if="fileList.length < 10" class="flex justify-center bg-bg-grey">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.4357 13.7854C16.2815 13.7854 17.7774 12.2896 17.7774 10.4437C17.7774 8.5979 16.2815 7.10207 14.4357 7.10207C14.1782 7.10207 13.9299 7.13707 13.689 7.1929C12.9674 5.4979 11.2865 4.30957 9.3282 4.30957C6.71154 4.30957 4.58987 6.43124 4.58987 9.0479C3.28154 9.0479 2.2207 10.1087 2.2207 11.4171C2.2207 12.7254 3.28154 13.7862 4.58987 13.7862M7.12737 12.4412L9.56904 9.99957L12.0107 12.4412M9.56904 15.6896V10.0071"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a-upload> -->
                <a-upload
                  v-if="fileList.length < 12"
                  :multiple="true"
                  accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .jpeg, .jpg, .png, .gif, .svg, .mp3, .wav, ., ogg, .mp4, .avi, .mkv, .zip, .rar, .7z, .bmp, .tiff, .flv, .txt, .rtf, .csv, .bmp, ., tiff, .webp, .ico, .wma, .aiff, .mov, .webm, .xml"
                  list-type="picture-card"
                  :file-list="fileList"
                  :before-upload="handleBeforeUpload"
                  :custom-request="customRequest"
                >
                  <div class="flex justify-center bg-bg-grey flex-col items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.4357 13.7854C16.2815 13.7854 17.7774 12.2896 17.7774 10.4437C17.7774 8.5979 16.2815 7.10207 14.4357 7.10207C14.1782 7.10207 13.9299 7.13707 13.689 7.1929C12.9674 5.4979 11.2865 4.30957 9.3282 4.30957C6.71154 4.30957 4.58987 6.43124 4.58987 9.0479C3.28154 9.0479 2.2207 10.1087 2.2207 11.4171C2.2207 12.7254 3.28154 13.7862 4.58987 13.7862M7.12737 12.4412L9.56904 9.99957L12.0107 12.4412M9.56904 15.6896V10.0071"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                      <p>Max 4MB</p>
                  </div>
                </a-upload>
                <div
                  v-for="(item, index) in fileList"
                  :key="index"
                  class="w-[104px] gap-2 flex flex-col xl:w-full"
                >
                  <div
                    class="w-full img-card overflow-hidden h-[104px] xl:h-[90px] border border-solid border-grey-8 rounded-[4px] flex justify-center items-center relative"
                  >
                    <img
                      v-if="imgFileTypes.includes(item.name.split('.').at(-1))"
                      class="object-cover"
                      :src="item.url"
                      alt=""
                    />
                    <IconsDocxFile v-else />
                    <button
                      @click="handleRemove(item)"
                      class="bg-white w-[30px] img-delete h-[30px] rounded-[10px] absolute flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5.55664 5.53809L14.445 14.4248M5.55664 14.4248L14.445 5.53809"
                          stroke="#F2154A"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="w-full flex items-center">
                    <p class="text-grey-80 text-[12px] truncate">
                      {{ item.name }}
                    </p>
                    <p class="text-grey-80 text-[12px]">
                      .{{ item.name.split(".").at(-1) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a-modal
              :visible="previewVisible"
              :footer="null"
              @cancel="handleCancel"
            >
              <img alt="example" style="width: 100%" :src="previewImage" />
            </a-modal>
          </div>
          <div class="grid grid-cols-2 gap-[70px] xl:grid-cols-1 xl:gap-4">
            <a-form-model-item
              class="w-full mb-0"
              :label="$store.state.translations[`order.deadline-days`]"
              prop="deadline"
            >
              <a-input-number
                :formatter="
                  (value) =>
                    value.length > 0
                      ? `${value.replace(/[^0-9.]/g, '')} ${
                          $store.state.translations['order.days']
                        }`
                      : `${value.replace(/[^0-9.]/g, '')}`
                "
                :parser="
                  (value) =>
                    value
                      .replace(/[^0-9.]/g, '')
                      .replace(`${$store.state.translations['order.days']}`, '')
                "
                :class="{
                  'opacity-50 pointer-events-none': form.deadline_negotiable,
                }"
                v-model="form.deadline"
                placeholder="0"
              />
            </a-form-model-item>
            <div class="flex items-end mb-3">
              <div class="flex items-center gap-2 xl:justify-between xl:w-full">
                <a-checkbox
                  class="checkbox_el"
                  :checked="form.deadline_negotiable == 1"
                  @change="
                    ($event) => {
                      $event.target.checked
                        ? (form.deadline_negotiable = 1)
                        : (form.deadline_negotiable = 0);
                    }
                  "
                >
                  <p class="text-[20px] text-black font-medium xl:text-[14px]">
                    {{ $store.state.translations["order.deal-deadline"] }}
                  </p>
                </a-checkbox>
                <a-tooltip placement="top">
                  <template slot="title">
                    {{ $store.state.translations["order.deal-deadline"] }}
                  </template>
                  <svg
                    class="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.3907 11.8428H12.0017V15.1998M12.0001 8.80372L12.0019 8.80078M19.9999 11.998C19.9999 16.4152 16.4191 19.996 12.0019 19.996C7.58473 19.996 4.00391 16.4152 4.00391 11.998C4.00391 7.58083 7.58473 4 12.0019 4C16.4191 4 19.9999 7.58083 19.9999 11.998Z"
                      stroke="#C2C2C3"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a-tooltip>
              </div>
            </div>
          </div>
          <div
            class="border-[0] border-b border-solid border-border-darik"
          ></div>
          <div class="grid grid-cols-2 gap-[70px] xl:grid-cols-1 xl:gap-4">
            <a-form-model-item
              class="w-full mb-0"
              :label="$store.state.translations[`order.price`]"
              prop="price"
            >
              <a-input-number
                :formatter="
                  (value) =>
                    `${value.replace(/[^0-9.]/g, '')}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ' '
                    ).toString().slice(0, 10)
                "
                :parser="
                  (value) =>
                    value.replace(/[^0-9.]/g, '').replace(/\$\s?|( *)/g, '')
                "
                :class="{
                  'opacity-50 pointer-events-none': form.price_negotiable,
                }"
                v-model="form.price"
                placeholder="0"
              />
            </a-form-model-item>
            <div class="flex items-end mb-3">
              <div class="flex items-center gap-2 xl:justify-between xl:w-full">
                <a-checkbox
                  class="checkbox_el"
                  :checked="form.price_negotiable == 1"
                  @change="
                    ($event) => {
                      $event.target.checked
                        ? (form.price_negotiable = 1)
                        : (form.price_negotiable = 0);
                    }
                  "
                >
                  <p class="text-[20px] text-black font-medium xl:text-[14px]">
                    {{ $store.state.translations["order.price"] }}
                  </p>
                </a-checkbox>
                <a-tooltip placement="top">
                  <template slot="title">
                    {{ $store.state.translations["order.price"] }}
                  </template>
                  <svg
                    class="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M10.3907 11.8428H12.0017V15.1998M12.0001 8.80372L12.0019 8.80078M19.9999 11.998C19.9999 16.4152 16.4191 19.996 12.0019 19.996C7.58473 19.996 4.00391 16.4152 4.00391 11.998C4.00391 7.58083 7.58473 4 12.0019 4C16.4191 4 19.9999 7.58083 19.9999 11.998Z"
                      stroke="#C2C2C3"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a-tooltip>
              </div>
            </div>
          </div>
        </div>
      </a-form-model>
    </div>
    <div class="mt-8">
      <button
        @click="onSubmit"
        class="w-full border border-solid border-blue bg-blue rounded-[8px] h-[60px] flex justify-center items-center text-base text-white font-medium gap-2 xl:hidden"
        :class="{ 'pointer-events-none opacity-50': loadingBtn }"
      >
        {{ $store.state.translations["order.share"] }}
        <LoaderBtn v-if="loadingBtn" />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div
        class="fixed-btns fixed bottom-0 w-full z-[7] py-4 px-4 bg-white left-0 hidden xl:grid grid-cols-2 gap-2"
      >
        <button
          @click="$router.go(-1)"
          class="border border-solid border-border-darik bg-white rounded-[12px] h-[52px] w-full flex justify-center items-center text-[14px] text-grey-64 font-medium gap-2"
        >
          {{ $store.state.translations["auth.cancel"] }}
        </button>
        <button
          @click="onSubmit"
          class="border border-solid border-blue bg-blue rounded-[12px] h-[52px] w-full flex justify-center items-center text-[14px] text-white font-medium gap-2"
          :class="{ 'pointer-events-none opacity-50': loadingBtn }"
        >
          {{ $store.state.translations["order.share"] }}
          <LoaderBtn v-if="loadingBtn" />
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <SpicialsticsCheck
      ref="specialities"
      @saveChecked="saveChecked"
      :specialities="specialities"
      :activeCheckedList="activeCheckedList"
      :maxCount="1"
    />
    <Loader v-if="loading" />
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import LoaderBtn from "@/components/loader-btn.vue";
import SpicialsticsCheck from "@/components/modals/SpicialsticsCheck.vue";
import { imgFileTypes } from "@/helpers/constants";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import deleteFile from "@/mixins/deleteFile";
import Ckeditor from "../../ckeditor.vue";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
let ClassicEditor;
let CKEditor;

if (process.client) {
  ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
  CKEditor = require("@ckeditor/ckeditor5-vue2");
} else {
  CKEditor = { component: { template: "<div></div>" } };
}
export default {
  name: "order-template",
  props: ["specialities", "title"],
  mixins: [deleteFile],
  data() {
    return {
      editor: ClassicEditor,
      maxLength: 5000,
      imgFileTypes: imgFileTypes,
      editorOption: {
        theme: "snow",
        placeholder: this.$store.state.translations["order.tooltip"],
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }],
            [{ align: [] }],
            ["link"],
          ],
        },
      },
      openBottom: false,
      loadingBtn: false,
      checkedList: [],
      activeCheckedList: [],
      errorSelect: false,
      modalList: null,
      visible: false,
      loading: true,
      form: {
        name: "",
        description: "",
        deadline_negotiable: "",
        price_negotiable: "",
        price: "",
        deadline: "",
        specialities: [],
        files: [],
      },
      rules: {
        name: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        description: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        price: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
        deadline: [
          {
            required: true,
            message: "This field is required",
            trigger: "change",
          },
        ],
      },
      previewVisible: false,
      previewImage: "",
      fileList: [],
      uploadList: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  computed: {
    imgUrl() {
      return this.$config.baseURL + "/storage/";
    },
  },
  destroyed() {
    this.$store.commit("setPageData", {});
  },
  mounted() {
    this.loading = true;
    if (!localStorage.getItem("auth-token")) {
      this.$router.push(this.localePath("/"));
    } else {
      this.loading = false;
    }
    this.$store.commit("setPageData", {
      title: this.title,
      center: false,
      info: "",
      link: true,
    });
    if (this.$route.params.id) this.__GET_ORDERS();
  },

  methods: {
    async __GET_ORDERS() {
      try {
        const data = await this.$store.dispatch("fetchOrders/getMyOrderById", {
          id: this.$route.params.id,
        });
        this.order = data?.content;
        this.activeCheckedList = data?.content?.specialities;
        Object.keys(this.form).forEach((elem) => {
          this.form[elem] = data?.content[elem];
        });
        this.form.deadline_negotiable = !this.form.deadline;
        this.form.price_negotiable = !this.form.price;
        this.fileList = this.order.files.map((item, index) => {
          return {
            uid: (index + 1) * -1,
            name: item.file.split('/')[1],
            status: "done",
            url: this.imgUrl + item.file,
            id: item.id,
          };
        });
      } catch (e) {
      } finally {
        this.loading = false;
      }
    },

    // handleTextChange(event) {
    //   const editor = this.$refs.quillEditor.quill;
    //   const length = editor.getLength();
    //   if (length > this.maxLength) {
    //     const delta = length - this.maxLength;
    //     editor.deleteText(this.maxLength, delta);
    //   } else {
    //     this.form.description = editor.root.innerHTML;
    //   }
    // },
    toBack() {
      this.$router.go(-1);
    },
    openSpecial() {
      this.$refs.specialities.open();
      this.$refs.specialities.openModal();
    },
    closeSpecial() {
      this.$refs.specialities.close();
      this.$refs.specialities.closeModal();
    },
    handleBeforeUpload(file) {
      return true;
    },
    customRequest({ onSuccess, onError, file }) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedFile = {
          uid: file.uid,
          name: file.name,
          originFileObj: file,
          url: reader.result,
        };

        if (this.fileList.length < 12) {
          this.fileList.push(uploadedFile);
        }
        onSuccess();
      };
      reader.onerror = () => {
        console.error("Error reading file as binary data");
        onError(new Error("Error reading file"));
      };
      reader.readAsDataURL(file); // Use readAsDataURL to get Base64 data
    },
    saveChecked(checkedList) {
      this.activeCheckedList = [...checkedList];
      this.checkedList = [];
      this.closeSpecial();
    },
    deleteChecked(id) {
      this.activeCheckedList = this.activeCheckedList.filter(
        (item) => item.id !== id
      );
    },
    open() {
      this.openBottom = true;
      setTimeout(() => {
        if (this.openBottom) this.openBottom = false;
      }, 10);
    },
    close() {
      this.openBottom = false;
    },
    onSubmit() {
      let formData = new FormData();
      this.fileList.forEach((item) => {
        formData.append("files[]", item.originFileObj);
      });
      this.activeCheckedList.forEach((item) => {
        formData.append("specialities[]", item.id);
      });
      formData.append("name", this.form.name);
      formData.append("description", this.form.description);
      if (!this.form.deadline_negotiable) {
        formData.append("deadline", this.form.deadline);
      } else {
        formData.append("deadline_negotiable", 1);
      }
      if (!this.form.price_negotiable) {
        formData.append("price", this.form.price);
      } else {
        formData.append("price_negotiable", 1);
      }
      if (this.activeCheckedList.length === 0) {
        this.errorSelect = true;
      } else {
        this.errorSelect = false;
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$route.params.id
            ? this.__PUT_ORDER(formData)
            : this.__POST_ORDER(formData);
        } else {
          return false;
        }
      });
    },
    async __PUT_ORDER(data) {
      try {
        await this.$store.dispatch("fetchOrders/putOrder", {
          id: this.$route.params.id,
          data,
        });
        this.$notification["success"]({
          message: this.$store.state.translations["modal.sent-done"],
        });
        this.$router.go(-1);
      } catch (e) {
        if(e.response.status == 413) {
          this.$notification["error"]({
            message: "Error",
            description: 'Maximum upload file size exceeded. Please upload a file smaller than 4MB.',
          });
        } else {
          this.$notification["error"]({
            message: "Error",
            description: e.response.statusText,
          });
        }

      }
    },
    async __POST_ORDER(dataForm) {
      try {
        this.loadingBtn = true;
        const data = await this.$store.dispatch(
          "fetchOrders/postOrder",
          dataForm
        );
        this.$notification["success"]({
          message: this.$store.state.translations["modal.sent-done"],
        });
        this.$router.push(this.localePath(`/profile/customer/order/view/${data?.content?.id}`));
      } catch (e) {

        if(e.response.status == 413) {
          this.$notification["error"]({
            message: "Error",
            description: 'Maximum upload file size exceeded. Please upload a file smaller than 4MB.',
          });
        } else {
          this.$notification["error"]({
            message: "Error",
            description: e.response.statusText,
          });
        }
      } finally {
        this.loadingBtn = false;
      }
    },
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList.map((item) => {
        let url = URL.createObjectURL(item.originFileObj);
        return {
          ...item,
          url: url,
        };
      });
    },
    async handleRemove(file) {
      if (file?.id) {
        const data = await this.__DELETE_FILE({ id: file?.id, type: "order" });
        if (data) {
          const index = this.fileList.indexOf(file);
          const newFileList = this.fileList.slice();
          newFileList.splice(index, 1);
          this.fileList = newFileList;
        }
      } else {
        const index = this.fileList.indexOf(file);
        const newFileList = this.fileList.slice();
        newFileList.splice(index, 1);
        this.fileList = newFileList;
      }
    },
    handleOk() {
      this.visible = false;
    },
  },
  watch: {
    "form.deadline_negotiable"(val) {
      if (val) {
        delete this.rules.deadline;
      } else {
        this.rules.deadline = [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ];
      }
    },
    "form.price_negotiable"(val) {
      if (val) {
        delete this.rules.price;
      } else {
        this.rules.price = [
          {
            required: true,
            message: "This field is required",
            trigger: "blur",
          },
        ];
      }
    },
  },
  components: {
    Loader,
    LoaderBtn,
    SpicialsticsCheck,
    ckeditor: CKEditor.component,
  },
};
</script>
<style lang="css" scoped>
:deep(.ck-content) {
  height: 250px;
  border: 1px solid var(--grey-8) !important;
  border-radius: 0 0 10px 10px !important;
}
:deep(.ck-toolbar) {
  border: 1px solid var(--grey-8) !important;
  border-radius: 10px 10px 0 0 !important;
}
.order-item :deep(input),
.order-item :deep(textarea) {
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: #fff;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

:deep(.ant-input-number) {
  border-radius: 8px;
  border: 1px solid var(--grey-8);
  background: #fff;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  height: 47px;
  width: 100%;
  display: flex;
  align-items: center;
}

:deep(.ant-input-number-handler-wrap) {
  display: none;
}

.order-select :deep(.ant-select-selection) {
  border-radius: 8px;
  padding-left: 12px;
  border: 1px solid var(--grey-8);
}

.order-item :deep(input) {
  height: 47px;
}

.order-item :deep(label),
.order-select :deep(label) {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  padding-right: 10px;
}

.order-item :deep(.ant-form-item-required::before),
.order-select :deep(.ant-form-item-required::before) {
  position: absolute;
  right: -5px;
  top: 0;
}

.order-item :deep(.ant-form-item-required::after),
.order-select :deep(.ant-form-item-required::after) {
  display: none;
}

.order-select :deep(.ant-select-selection__rendered) {
  line-height: 58px;
  display: flex;
  align-items: center;
}

.order-select :deep(.ant-select-selection__choice) {
  border: none;
  background-color: var(--bg-grey);
  padding: 0 16px;
  height: 34px;
  display: flex;
  gap: 4px;
  border-radius: 22px;
  align-items: center;
  color: var(--grey-64, #5d5d5f);
  /* Body 2/Medium */
  font-family: "TT Interfaces";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 19.6px */
  min-width: max-content;
}

.order-select :deep(.ant-select-selection__choice > span) {
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
}

.order-upload :deep(.ant-upload-select-picture-card) {
  width: 104px;
  height: 104px;
  margin: 0;
  border: 1px solid var(--grey-8);
  background-color: #fff;
}

.order-upload {
  display: flex;
}

.order-upload :deep(.ant-upload-picture-card-wrapper) {
  width: 104px;
  display: flex;
}

.order-item :deep(label::after) {
  display: none;
}

.order-upload :deep(.ant-upload-list) {
  display: none;
}

.order-upload :deep(.ant-upload) {
  background-color: var(--bg-grey);
}

.img-delete {
  bottom: -100%;
  transition: 0.3s;
  opacity: 0;
}

.img-card {
  transition: 0.3s;
}

.img-card:hover .img-delete {
  bottom: auto;
  opacity: 1;
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

:deep(.ant-form-explain) {
  display: none;
}

:deep(.has-error) input,
:deep(.has-error) textarea {
  border-color: var(--red);
}

:deep(.has-error .ant-input-number) {
  border-color: var(--red);
}

.errorSelect .modal-select {
  border-color: var(--red);
}

.required :deep(label)::before {
  display: inline-block;
  margin-right: 4px;
  color: #f5222d;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: "*";
  position: absolute;
  right: -5px;
  top: 0;
}

.required :deep(label)::after {
  display: none !important;
}

:deep(.ql-toolbar.ql-snow) {
  border-radius: 10px 10px 0 0;
  background: #fff;
  border: none;
  border-bottom: 1px solid var(--grey-8, #ebebeb);
  border: 1px solid var(--grey-8);
}

:deep(.ql-container) {
  border-radius: 0 0 10px 10px;
  background: #fff;
  border: none;
  min-height: 250px;
  border: 1px solid var(--grey-8);
}

:deep(.ql-editor) {
  min-height: 250px;
  font-family: "TT Interfaces", serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  max-height: 450px;
}

.form-item :deep(input) {
  border-radius: 8px;
  border: 1px solid #e0e0ed;
  background: #fff;
  padding-left: 50px;
}

:deep(.quill-editor) {
  border-radius: 8px;
  font-family: "TT Interfaces";
  font-size: 16px;
}

:deep(.has-error .ql-toolbar),
:deep(.has-error .ql-container) {
  border-color: red;
}

:deep(.has-error .ql-toolbar) {
  border-bottom-color: #e0e0ed;
}

.checkbox_el {
  display: flex;
  align-items: center;
}

@media (max-width: 1200px) {
  :deep(.order-item label),
  :deep(.order-select label) {
    font-size: 14px;
  }

  .order-upload {
    display: grid;
    grid-template-columns: repeat(3, 30%);
  }

  .fixed-btns {
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px 4px 36px 0px rgba(0, 25, 53, 0.16);
  }

  .order-upload :deep(.ant-upload-select-picture-card) {
    width: 100%;
    height: 104px;
  }

  .order-upload :deep(.ant-upload-picture-card-wrapper) {
    width: 100%;
  }

  .order-item :deep(input) {
    height: 56px;
  }
}
</style>
