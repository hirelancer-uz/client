<template>
  <div
    class="number-check flex flex-col px-[120px] gap-8 py-[80px] border border-solid border-grey-light rounded-3xl number-card xl:border-0 xl:px-0 xl:py-0"
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
      <nuxt-link to="/">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="27"
            viewBox="0 0 145 27"
            fill="none"
          >
            <path
              d="M24.969 26.9204H8.08407C5.85398 26.9204 3.94248 26.1372 2.34956 24.5708C0.783186 22.9779 0 21.0664 0 18.8363V0H7.52655V18.1593C7.52655 18.5044 7.64602 18.7965 7.88496 19.0354C8.12389 19.2743 8.40265 19.3938 8.72124 19.3938H24.3319C24.677 19.3938 24.969 19.2743 25.208 19.0354C25.4469 18.7965 25.5664 18.5044 25.5664 18.1593V0H33.0531V18.8363C33.0531 21.0664 32.2566 22.9779 30.6637 24.5708C29.0973 26.1372 27.1991 26.9204 24.969 26.9204Z"
              fill="#5C46E6"
            />
            <path
              d="M61.992 26.9204H37.023V0H61.992C64.2221 0 66.1203 0.79646 67.6867 2.38938C69.2796 3.95575 70.076 5.85398 70.076 8.08407V18.8363C70.076 21.0664 69.2796 22.9779 67.6867 24.5708C66.1203 26.1372 64.2221 26.9204 61.992 26.9204ZM44.5495 19.3938H61.3548C61.6999 19.3938 61.992 19.2743 62.2309 19.0354C62.4699 18.7965 62.5893 18.5177 62.5893 18.1991V8.72124C62.5893 8.40265 62.4699 8.12389 62.2309 7.88496C61.992 7.64602 61.6999 7.52655 61.3548 7.52655H44.5495V19.3938Z"
              fill="#5C46E6"
            />
            <path
              d="M99.0149 27H82.13C79.8999 27 77.9884 26.2168 76.3955 24.6504C74.8291 23.0575 74.0459 21.1593 74.0459 18.9558V8.08407C74.0459 5.85398 74.8291 3.95575 76.3955 2.38938C77.9884 0.79646 79.8999 0 82.13 0H99.0149C101.245 0 103.143 0.79646 104.71 2.38938C106.303 3.95575 107.099 5.85398 107.099 8.08407V18.9558C107.099 21.1593 106.303 23.0575 104.71 24.6504C103.143 26.2168 101.245 27 99.0149 27Z"
              fill="#5C46E6"
            />
            <path
              d="M136.038 27H119.153C116.923 27 115.011 26.2168 113.418 24.6504C111.852 23.0575 111.069 21.1593 111.069 18.9558V8.08407C111.069 5.85398 111.852 3.95575 113.418 2.38938C115.011 0.79646 116.923 0 119.153 0H136.038C138.268 0 140.166 0.79646 141.733 2.38938C143.326 3.95575 144.122 8.08407 144.122 8.08407V18.9558C144.122 21.1593 143.326 23.0575 141.733 24.6504C140.166 26.2168 138.268 27 136.038 27Z"
              fill="#5C46E6"
            />
            <circle cx="81.8028" cy="7.87821" r="4.14823" fill="white" />
            <circle
              cx="119.966"
              cy="7.87821"
              r="4.14823"
              fill="white"
            /></svg></span
      ></nuxt-link>
      <h4
        class="flex text-black text-[24px] font-semibold mt-[31px] xl:text-[20px]"
      >
        {{ $store.state.translations["auth.registrate"] }}
      </h4>
      <p class="flex text-base text-grey-64 mt-2 xl:text-[14px]">
        {{ $store.state.translations["auth.choose-type"] }}
      </p>
    </div>
    <div
      class="xl:h-full xl:flex xl:flex-col xl:justify-between xl:pb-4 xl:pt-2"
    >
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        @submit.prevent="onSubmit"
      >
        <div class="flex flex-col gap-8 xl:gap-6">
          <a-form-model-item
            class="auth-item"
            :label="$store.state.translations[`auth.number`]"
          >
            <!-- <a-input v-model="form.name" /> -->
            <div
              class="rounded-[8px] pl-2 pr-4 xl:pl-2 py-3 h-[53px] xl:h-11 bg-bg-grey border border-solid border-border-darik flex items-center justify-between gap-4"
            >
              <span
                class="mr-1 text-base xl:text-[14px] text-grey-40 font-medium px-3 py-[6px] rounded-[4px] bg-white xl:leading-5"
                >+998</span
              >
              <p
                v-if="form.phone_number"
                class="w-full text-base xl:text-[14px] text-grey-80 font-medium py-[6px] rounded-[4px] xl:leading-5"
              >
                {{
                  `${form.phone_number}`
                    .match(/(\d{2})(\d{3})(\d{2})(\d{2})/)
                    .filter((_, index) => index !== 0)
                    .join(" ")
                }}
              </p>
              <!--              <input-->
              <!--                class="w-full pointer-events-none"-->
              <!--                v-mask="'## ### ## ##'"-->
              <!--                v-model="form.phone_number"-->
              <!--                type="text"-->
              <!--              />-->
              <nuxt-link
                class="cursor-pointer"
                :to="localePath('/registrationas')"
              >
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3865 6.33114L18.169 10.1136M3 21.5L6.67278 20.8008C7.45152 20.6526 8.16769 20.2736 8.72823 19.713L20.1837 8.25754C21.2721 7.16918 21.2721 5.40462 20.1837 4.31626C19.0954 3.22791 17.3308 3.22791 16.2425 4.31627L4.78696 15.7718C4.22642 16.3323 3.8474 17.0485 3.69916 17.8272L3 21.5Z"
                    stroke="#020105"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </nuxt-link>
            </div>
          </a-form-model-item>
          <a-form-model-item
            ref="name"
            class="auth-item required"
            :label="$store.state.translations['auth.enter-code']"
            prop="password"
          >
            <div
              class="rounded-[8px] h-[53px] xl:h-11 sms-input pl-4 pr-2 py-2 h-[47px] bg-white border border-solid border-border-darik flex items-center justify-between gap-4"
              :class="{ 'border-red': smsError && form.password.length !== 6 }"
            >
              <input
                ref="codeInput"
                autofocus
                type="number"
                pattern="/^-?\d+\.?\d*$/"
                v-model="form.password"
                onKeyPress="if(this.value.length==6) return false;"
                placeholder="●●●●●●"
                @keyup.enter="onSubmit"
              />
              <!--              <v-otp-input-->
              <!--                ref="otpInput"-->
              <!--                input-classes="otp-input"-->
              <!--                :num-inputs="6"-->
              <!--                separator=""-->
              <!--                :should-auto-focus="true"-->
              <!--                placeholder="o"-->
              <!--                :is-input-num="true"-->
              <!--                @on-change="handleOnChange"-->
              <!--                @on-complete="handleOnComplete"-->
              <!--              />-->
              <div
                class="mr-1 text-base text-black px-4 py-[6px] xl:pr-[6px] xl:leading-5 rounded-[4px] bg-bg-grey flex gap-2 items-center xl:max-h-8"
              >
                <span
                  ><a-progress
                    class="sms-progress flex items-center"
                    type="circle"
                    :percent="timeProgress"
                /></span>
                <p class="text-base xl:text-[14px] text-black font-medium">
                  00:{{ time >= 10 ? time : `0${time}` }}
                </p>
              </div>
            </div>
            <span
              class="code-invalid opacity-0 absolute text-light-red text-[15px] xl:text-[14px]"
              :class="{ 'relative opacity-100': codeInvalid }"
              >Tasdiqlash kodini to'g'ri kiriting</span
            >
          </a-form-model-item>
        </div>
        <button
          :class="{ 'opacity-50 pointer-events-none': time > 0 }"
          class="text-blue text-[15px] mt-3 xl:mt-2 xl:text-[14px]"
        >
          {{ $store.state.translations["auth.resend-code"] }}
        </button>

        <p class="text-grey-40 text-[14px] mt-6 xl:hidden">
          <!--          +998-->
          <!--          {{-->
          <!--            `${form?.phone_number}`-->
          <!--              .match(/(\d{2})(\d{3})(\d{2})(\d{2})/)-->
          <!--              .filter((item, index) => index !== 0)-->
          <!--              .join(" ")-->
          <!--          }}-->
          {{ $store.state.translations["auth.sent-code"] }}
        </p>
      </a-form-model>
      <div class="w-full flex flex-col gap-6">
        <p class="text-grey-40 text-[14px] mt-6 xl:block hidden text-center">
          <!--          +998-->
          <!--          {{-->
          <!--            `${form?.phone_number}`-->
          <!--              .match(/(\d{2})(\d{3})(\d{2})(\d{2})/)-->
          <!--              .filter((item, index) => index !== 0)-->
          <!--              .join(" ")-->
          <!--          }}-->
          {{ $store.state.translations["auth.sent-code"] }}
        </p>
        <div
          class="buttons grid grid-cols-2 gap-4 mt-6 xl:mt-0 xl:flex xl:flex-col-reverse xl:gap-2 xl:w-full xl:fixed xl:left-0 xl:px-4 xl:bottom-4"
        >
          <button
            @click="$router.go(-1)"
            class="h-[60px] xl:h-[52px] border border-solid border-border-darik rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-black font-medium"
          >
            {{ $store.state.translations["auth.cancel"] }}
          </button>
          <button
            @click="onSubmit"
            class="h-[60px] xl:h-[52px] border border-solid border-blue bg-blue rounded-[12px] flex justify-center items-center text-[18px] xl:text-[14px] text-white font-medium"
            :class="{
              'pointer-events-none opacity-50':
                loading || form.password.length < 6,
            }"
          >
            <LoaderBtn v-if="loading" />
            <span v-else>{{
              $store.state.translations["auth.confirm-code"]
            }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import uzbFlag from "@/components/icons/uzbFlag.vue";
import engFlag from "@/components/icons/engFlag.vue";
import rusFlag from "@/components/icons/rusFlag.vue";

export default {
  props: ["loading", "codeInvalid"],
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

      other: "",
      timeProgress: 100,
      smsError: false,

      time: 60,
      form: {
        phone_number: "",
        password: "",
      },
      rules: {
        password: [
          {
            required: true,
            message: "Kod 6 xonali bo'lishi kerak",
            trigger: "change",
          },
          { min: 6, message: "Kod 6 xonali bo'lishi kerak", trigger: "change" },
        ],
      },
    };
  },
  mounted() {
    this.$refs.codeInput.focus()
    if (localStorage.getItem("phone")) {
      this.form.phone_number = localStorage.getItem("phone");
    } else {
      this.$router.go(-1);
    }
    // this.setInputPlaceholder();
    setInterval(() => {
      if (this.time > 0) {
        this.time--;
      }
      if (this.timeProgress > 0) {
        this.timeProgress -= 100 / 60;
      }
    }, 1000);
  },
  methods: {
    setInputPlaceholder() {
      this.$refs.otpInput.$el
        .querySelectorAll("input")
        .forEach((input) => (input.placeholder = "●"));
    },
    handleOnComplete(value) {
      this.form.password = value;
    },
    handleOnChange(value) {
      this.form.password = value;
      this.$emit("clearError");
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
    onSubmit() {
      const data = {
        phone: `+998${this.form.phone_number.replaceAll(" ", "")}`,
        password: this.form.password,
        role: "Freelancer",
      };
      if (this.form.password.length !== 6) {
        this.smsError = true;
      } else {
        this.smsError = false;
      }
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit("sendCode", data);
        } else {
          console.log("error submit!!");
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
  watch: {
    form: {
      handler() {
        this.$emit("clearError");
      },
      deep: true
    },
  },
  components: { uzbFlag, rusFlag, engFlag },
};
</script>
<style lang="css" scoped>
.code-invalid {
}

:deep(.otp-input) {
  width: 24px;
  height: 24px;
  padding: 5px;
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
}

/*
 .otp-input::-webkit-inner-spin-button,
 .otp-input::-webkit-outer-spin-button {
   -webkit-appearance: none;
   margin: 0;
 } */
.auth-item input {
  color: var(--black);
  font-family: "TT Interfaces";
  font-size: 24px;
  font-style: normal;
  line-height: 150%; /* 24px */
  border-color: transparent;
  background-color: transparent;
  font-weight: 500;
  letter-spacing: 20px;
  width: 100%;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.auth-item input[type="number"]::-webkit-inner-spin-button,
.auth-item input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.sms-progress {
  display: flex !important;
  transform: rotateY(-180deg);
}

.sms-progress :deep(.ant-progress-inner) {
  width: 20px !important;
  height: 20px !important;
}

.sms-progress :deep(.ant-progress-text) {
  display: none !important;
}

.sms-progress :deep(.ant-progress-circle-path) {
  stroke-width: 20px;
  stroke: var(--blue) !important;
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

.required :deep(label) {
  padding-right: 10px;
}

.langer {
  position: absolute;
  top: 24px;
  right: 24px;
}

.number-card {
  position: relative;
}

@media (max-width: 1200px) {
  .auth-item input {
    font-size: 14px;
  }
}
</style>
