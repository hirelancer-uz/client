export default {
  methods: {
    async __DELETE_FILE(payload) {
      try {
        await this.$store.dispatch("fetchFiles/postDeleteFile", payload);
        this.$notification["success"]({
          message: "Success",
          description: "Fayl muvaffaqiyatli o'chirildi",
        });
        return true
      } catch (e) {
        this.$notification["error"]({
          message: "Error",
          description: e.response.statusText,
        });
        return false
      }
    },
  },
};
