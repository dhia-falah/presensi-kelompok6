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
            <p class="card-text">
              Status: {{ user.role }} <br />NISN: {{ user.nisn }} <br />Email:
              {{ user.email }}
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
  name: "Admin",
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
        .get("http://localhost:3000/useres")
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
  height: 250px;
  width: 250px;
  border-radius: 50%;
  margin-left: 60px;
  margin-top: 30px;
}
.col {
  text-align: center;
  columns: 2.5;
}
.row {
  margin-left: 200px;
}
</style>
