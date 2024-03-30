export default {
  data() {
    return {
      page: 1,
      current: 1,
      params: {
        page: 1,
        pageSize: 15,
      },
      value: "",
    };
  },
  methods: {
    async changePagination(val) {
      if (this.$route.query.page !== val) {
        await this.$router.replace({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            page: val,
          },
        });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    },
    async getFirstData(pageSize) {
      if (pageSize) {
        this.params.pageSize = await pageSize;
      }
      if (
        !Object.keys(this.$route.query).includes("page") ||
        !Object.keys(this.$route.query).includes("per_page")
      ) {
        await this.$router.replace({
          path: this.$route.path,
          query: { page: this.params.page, per_page: this.params.pageSize },
        });
      }
      this.current = Number(this.$route.query.page);
      this.params.pageSize =
        Number(this.$route.query.per_page) || this.params.pageSize;
      this.params.page = Number(this.$route.query.page) || 1;
    },
  },
};
