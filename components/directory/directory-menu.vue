<script>
import DropArrow from "@/components/icons/drop-arrow.vue";

export default {
  name: "directory-menu",
  data() {
    return {
      dropdownOpen: null
    }
  },
  mounted() {
    this.dropdownOpen = this.$route.params.id * 1;
  },
  methods: {
    handleDropdown(id) {
      if (this.dropdownOpen === id) {
        this.dropdownOpen = null;
      } else {
        this.dropdownOpen = id;
      }
    },
  },
  components: { DropArrow },
};
</script>

<template>
  <div class="py-4 flex flex-col gap-4 bg-[#FBFBFF] rounded-[24px]">
    <h3 class="px-6 text-grey-80 text-[20px] font-semibold">Категории</h3>
    <div class="px-4"><span class="flex bg-grey-8 h-[1px] w-full"></span></div>
    <ul>
      <li v-for="item in [1,2,3]" class="rounded-[16px] bg-[#FBFBFF] dropdown-item" :key="item" :class="{ active: dropdownOpen === item }">
        <div class=" overflow-hidden" >
          <button
            @click="handleDropdown(item)"
            class="text-grey-80 font-medium py-3 px-6 flex justify-between  text-base w-full"

            ><h4 @click="$router.push(`/directory/${item}`)">Вы новичок на сайте</h4>
            <DropArrow />
          </button>
          <div class="body px-2" >
            <nuxt-link class="text-grey-80 font-medium py-3 px-6 flex justify-between rounded-[16px] text-base" to="/1">Защита аккаунта</nuxt-link>
            <nuxt-link class="text-grey-80 font-medium py-3 px-6 flex justify-between rounded-[16px] text-base" to="/2">Защита аккаунта</nuxt-link>
            <nuxt-link class="text-grey-80 font-medium py-3 px-6 flex justify-between rounded-[16px] text-base" to="/3">Защита аккаунта</nuxt-link>
            <nuxt-link class="text-grey-80 font-medium py-3 px-6 flex justify-between rounded-[16px] text-base" to="/4">Защита аккаунта</nuxt-link>
          </div>
        </div>
      </li>
      <li>
        <nuxt-link
          class="text-grey-80 font-medium py-3 px-6 flex justify-between rounded-[16px] text-base"
          to="/directory/2"
          >Аудио и Видео
          <DropArrow />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.nuxt-link-active {
  //background: #fff;
  //box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
}

.active button h4 {
  color: var(--main-color);
}

:deep(.active svg rect) {
  fill: var(--main-color);
}

:deep(.active svg path) {
  fill: #fff;
}
.dropdown-item {
  transition: .4s;
  margin-left: 0;
  margin-right: 0;
}
.body {
  max-height: 0;
  transition: .4s;
}
.active {
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
  margin-left: 8px;
  margin-right: 8px;
}
.active .body {
  max-height: 400px;

}
</style>
