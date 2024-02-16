<template lang="html">
  <div>
    <button id="btn">button</button>
    <div id="result"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const btn = document.getElementById("btn");
    const result = document.getElementById("result");
    const Speech = webkitSpeechRecognition;
    const rec = new Speech();
    rec.lang = "ru-RU";
    btn.addEventListener("click", () => {
      rec.start();
      btn.classList.add("rec");
    });
    rec.onresult = function (e) {
      const text = e.results[0][0].transcript;
      btn.classList.remove("rec");
      result.textContent = text;
    };
  },
};
</script>
<style lang=""></style>
