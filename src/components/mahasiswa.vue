<template>
  <div class="container" id="card-isi" style="padding-top: 30px">
    <div class="row">
      <div
        class="col-md-5"
        v-for="user in useres"
        :key="user.id"
        style="padding-top: 30px"
      >
        <div class="card img-2">
          <img class="card-img-top" :src="user.img" alt="Card image cap" />
          <div class="card-body">
            <hr />
            <h3 class="card-title">{{ user.username }}</h3>
            <p>
              Status: {{ user.role }} <br />NISN: {{ user.nisn }} <br />
              Email: {{ user.email }}
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "Mahasiswa",
  data() {
    return {
      useres: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/mahasiswa")
        .then((res) => {
          this.useres = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
img {
  padding: 20px;
}
.col {
  height: 500px;
}
</style>
