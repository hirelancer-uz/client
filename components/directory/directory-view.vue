<script>
export default {
  name: "directory-view"
}
</script>

<template>
<div class="flex flex-col gap-6 container xl:pt-6 xl:pb-10">
  <h3 class="title">Регистрация и авторизация </h3>
  <img src="@/assets/images/img.png" alt="">
  <p>Moo.Team — это таск-трекер, хранилище доступов, база знаний, учет рабочего времени, инструменты управления командой и взаимодействия с клиентами одновременно и в одном месте! Пока веду в этом сервисе в тестовом режиме один личный проект, не спешу, но обзор готовлю 🙂

    Сервис всё ещё исследую, но мне он определённо нравится. А скоро будет нравиться ещё больше. Дело в том, что вот-вот, буквально через месяц, Moo.Team зарелизят новый дизайн сервиса. Александр Алаев, основатель Moo.Team, поделился со мной скриншотами новой внешности таск-трекера, а я не жадный, делюсь во всеми! А получилось, скажу я вам очень классно </p>
</div>
</template>

<style scoped lang="css">
.title {
  color: var(--black);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 16px;
}
p {
  margin-top: 16px;
  color: var(--grey-80);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
@media (max-width: 1200px) {
  .title {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
}
</style>
