export default {
  async getTranslations(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/api/translates", {
          ...params,
        });

        return res.data.translates;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
