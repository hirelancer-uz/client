<template>
  <div
    class="create-order pt-[110px] pb-[112px] max-w-[1200px] mx-auto xl:pt-4 xl:px-4"
  >
    <div class="head flex justify-between">
      <h1
        class="flex text-[32px] text-black font-semibold xl:text-[18px] xl:hidden"
      >
        {{ $store.state.translations["profile.add-portfolio"] }}
      </h1>
      <div class="buttons flex gap-4 xl:hidden">
        <button
          @click="$router.go(-1)"
          class="border border-solid border-grey-24 rounded-[8px] h-[52px] w-[168px] flex justify-center items-center text-base text-grey-64 font-medium"
        >
          {{ $store.state.translations["auth.cancel"] }}
        </button>
        <button
          @click="onSubmit()"
          class="border border-solid border-blue bg-blue rounded-[8px] h-[52px] w-[232px] flex justify-center items-center text-base text-white font-medium gap-2"
        >
          {{ $store.state.translations["order.share"] }}
          <svg
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
      class="form-block max-w-[712px] px-8 pt-10 pb-[45px] rounded-[24px] bg-white mt-[40px] xl:mt-0 border-[2px] border-solid border-grey-light xl:py-0 xl:border-0 xl:px-0"
    >
      <a-form-model :model="form" ref="ruleForm" :rules="rules">
        <div class="flex flex-col gap-6">
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
            label="Категорие"
            :class="{
              errorSelect: activeCheckedList.length === 0 && errorSelect,
            }"
          >
            <div
              class="min-h-[58px] xl:min-h-[50px] items-center border border-solid flex justify-start border-grey-8 rounded-lg px-4 py-3 modal-select"
            >
              <p
                class="text-grey-40 text-base"
                v-if="activeCheckedList.length === 0"
              >
                Специальности
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
                  {{ listItem?.name_ru }}

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
                class="h-[34px] flex justify-end items-center flex-auto absolute z-[6] right-0 px-4 w-full"
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
            <!-- <a-select
              mode="multiple"
              :default-value="['Программирование ', 'Программирование ']"
              style="width: 100%"
              placeholder="Категорие"
              @change="handleChangeSelect"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select> -->
          </a-form-model-item>
          <div class="images">
            <div class="flex flex-col gap-2">
              <h2 class="text-base text-black font-medium xl:text-[14px]">
                {{ $store.state.translations["profile.add-photo"] }}
              </h2>
              <p class="text-[14px] text-grey-64">
                {{ $store.state.translations["profile.first-photo"] }}
              </p>
            </div>
            <div class="clearfix flex flex-col gap-2 mt-4">
              <div class="flex order-upload gap-2 xl:grid xl:grid-cols-3">
                <!-- <a-upload
                  v-for="item in uploadList"
                  :key="item"
                  list-type="picture-card"
                  :file-list="fileList[item]"

                  @change="($event) => handleChange($event, item)"
                >
                  <div v-if="fileList[item].length < 1" class="flex justify-center">
                    <img src="@/assets/images/image-add.png" alt="" />
                  </div>
                </a-upload> -->
                <a-upload
                  v-for="item in uploadList"
                  :key="item"
                  list-type="picture-card"
                  :file-list="fileList[item]"
                  @preview="handlePreview"
                  :remove="($event) => handleRemove($event, item)"
                  :before-upload="handleBeforeUpload"
                  :custom-request="($event) => customRequest($event, item)"
                  accept=".jpg, .png, .jpeg, .gif, .svg"
                >
                  <div
                    v-if="fileList[item].length < 1"
                    class="flex justify-center"
                  >
                    <img src="@/assets/images/image-add.png" alt="" />
                  </div>
                </a-upload>
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
          <a-form-model-item
            class="order-item w-full mb-0 relative flex items-center"
            :label="$store.state.translations[`profile.link`]"
          >
            <a-input
              v-model="form.link"
              :placeholder="$store.state.translations[`profile.link`]"
            />
            <svg
              class="absolute right-4 top-[-3px]"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.54472 14.6902L4.89072 15.3442C3.71872 16.5162 3.71872 18.4152 4.89072 19.5872C6.06272 20.7592 7.96172 20.7592 9.13372 19.5872L13.3757 15.3452C14.5477 14.1732 14.5477 12.2742 13.3757 11.1022M9.57972 14.8982C8.40772 13.7262 8.40772 11.8272 9.57972 10.6552L13.8217 6.41318C14.9937 5.24118 16.8927 5.24118 18.0647 6.41318C19.2367 7.58518 19.2367 9.48418 18.0647 10.6562L17.4097 11.3102"
                stroke="#5C46E6"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a-form-model-item>
          <a-form-model-item
            class="order-item w-full mb-0"
            :label="$store.state.translations[`profile.desc`]"
          >
            <a-input
              type="textarea"
              rows="5"
              v-model="form.desc"
              :placeholder="$store.state.translations[`profile.desc`]"
            />
          </a-form-model-item>
        </div>
      </a-form-model>
      <div class="mt-8 xl:hidden">
        <button
          @click="onSubmit()"
          class="border border-solid border-blue bg-blue rounded-[8px] h-[52px] w-[232px] flex justify-center items-center text-base text-white font-medium gap-2"
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
      <div
        class="fixed-btns fixed bottom-0 w-full z-[7] py-4 px-4 bg-white left-0 hidden xl:flex flex-col gap-2"
      >
        <button
          @click="onSubmit()"
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
        <button
          @click="$router.go(-1)"
          class="border border-solid border-grey-24 rounded-[12px] h-[52px] w-full flex justify-center items-center text-[14px] text-grey-64 font-medium"
        >
          {{ $store.state.translations["auth.cancel"] }}
        </button>
      </div>
    </div>
    <SpicialsticsCheck
      ref="specialities"
      @saveChecked="saveChecked"
      :specialities="specialities"
      :activeCheckedList="activeCheckedList"
    />
    <Loader v-if="loading" />
  </div>
</template>
<script>
import Loader from "@/components/Loader.vue";
import LoaderBtn from "@/components/loader-btn.vue";
import SpicialsticsCheck from "@/components/modals/SpicialsticsCheck.vue";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  data() {
    return {
      openBottom: false,
      loading: true,
      loadingBtn: false,
      errorSelect: false,
      checkedList: [],
      activeCheckedList: [],
      modalList: null,
      form: {
        name: "",
        link: "",
        desc: "",
        specialities: [],
        images: [],
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
        ],
      },
      previewVisible: false,
      previewImage: "",
      fileList: {
        file1: [],
        file2: [],
        file3: [],
        file4: [],
        file5: [],
        file6: [],
        file7: [],
        file8: [],
      },
      uploadList: [
        "file1",
        "file2",
        "file3",
        "file4",
        "file5",
        "file6",
        "file7",
        "file8",
      ],
    };
  },

  destroyed() {
    this.$store.commit("setPageData", {});
  },
  mounted() {
    this.$store.commit("setPageData", {
      title: "Добавить работу",
      center: false,
      info: "",
      link: true,
    });
    this.loading = true;
    !localStorage.getItem("auth-token")
      ? this.$router.push(this.localePath("/"))
      : (this.loading = false);
  },
  async asyncData({ store }) {
    const [specialitiesData] = await Promise.all([
      store.dispatch("fetchSpecialities/getSpecialities"),
    ]);
    const specialities = specialitiesData.content;
    return {
      specialities,
    };
  },
  methods: {
    onSubmit() {
      let formData = new FormData();
      this.activeCheckedList.forEach((item) => {
        formData.append("specialities[]", item.id);
      });
      this.uploadList.forEach((elem) => {
        if (this.fileList[elem].length > 0)
          formData.append("images[]", this.fileList[elem][0].originFileObj);
      });
      formData.append("name", this.form.name);
      formData.append("link", this.form.link);
      formData.append("desc", this.form.desc);
      if (this.activeCheckedList.length == 0) {
        this.errorSelect = true;
      } else {
        this.errorSelect = false;
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.fileList.file1.length == 0) {
            this.$notification["error"]({
              message: "Error",
              description: "Img is required",
            });
          } else {
            this.__POST_WORK(formData);
          }
        } else {
          return false;
        }
      });
    },
    openSpecial() {
      this.$refs.specialities.open();
      this.$refs.specialities.openModal();
    },
    closeSpecial() {
      this.$refs.specialities.close();
      this.$refs.specialities.closeModal();
    },
    async __POST_WORK(data) {
      try {
        this.loadingBtn = true;
        await this.$store.dispatch("fetchPortfolio/postWork", data);
        this.$notification["success"]({
          message: "Success",
          description: "Успешно отправлен",
        });
        this.$router.go(-1);
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
      } finally {
        this.loadingBtn = false;
      }
    },

    closeChecked() {
      this.checkedList = [];
      this.closeSpecial();
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
    onSelect(id) {
      this.modalList = id;
    },
    handleChangeSelect(value) {},
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
    handleChange({ fileList }, name) {
      this.fileList[name] = fileList;
    },
    handleBeforeUpload(file) {
      return true;
    },
    handleRemove(e, name) {
      this.fileList[name] = [];
    },
    customRequest({ onSuccess, onError, file }, name) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedFile = {
          uid: file.uid,
          name: file.name,
          originFileObj: file,
          url: reader.result,
        };
        this.fileList[name].push(uploadedFile);
        onSuccess();
      };
      reader.onerror = () => {
        console.error("Error reading file as binary data");
        onError(new Error("Error reading file"));
      };
      reader.readAsDataURL(file); // Use readAsDataURL to get Base64 data
    },
  },
  components: { Loader, LoaderBtn, SpicialsticsCheck },
};
</script>
<style lang="css" scoped>
.modal-select {
  /* max-height: 58px; */
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
  line-height: 140%; /* 19.6px */
  min-width: max-content;
}
.order-select :deep(.ant-select-selection__choice > span) {
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
}
.order-upload :deep(.ant-upload-select-picture-card) {
  width: 100%;
  height: 116px;
  margin: 0;
  border: none;
  background-color: var(--bg-grey);
  border: 1px solid var(--grey-light);
}
.order-upload {
  display: grid;
  grid-template-columns: repeat(4, 158px);
}
.order-upload :deep(.ant-upload-picture-card-wrapper) {
  width: 100%;
}
.order-item :deep(label::after) {
  display: none;
}
:deep(.ant-upload-list-picture-card-container) {
  width: 100%;
}
:deep(.ant-upload-list-picture-card .ant-upload-list-item) {
  width: 100% !important;
  height: 116px !important;
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
@media (max-width: 1200px) {
  .order-upload {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  :deep(.order-upload .ant-upload-select-picture-card) {
    height: 102px;
    border-radius: 8px;
  }
  .fixed-btns {
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px 4px 36px 0px rgba(0, 25, 53, 0.16);
  }
  :deep(.order-item label),
  :deep(.order-select label) {
    font-size: 14px;
  }
}
</style>
