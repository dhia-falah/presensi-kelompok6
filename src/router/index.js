import vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/login.vue";
import Kontak from "@/components/kontak.vue";
import Registrasi from "@/components/register.vue";
import Beranda from "@/components/Beranda.vue";
import Siswa from "@/components/siswa.vue";
import Guru from "@/components/guru.vue";
import Tentang from "@/components/tentang.vue";
import AdminP from "@/components/adminP.vue";
import Admin from "@/components/admin.vue";
import Mahasiswa from "@/components/mahasiswa.vue";
import Dosen from "@/components/dosen.vue";
import StatistikMahasiswa from "@/components/StatistikMahasiswa.vue";

vue.use(Router);

function configRouters() {
  return [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/tentang",
      name: "Tentang",
      component: Tentang,
    },
    {
      path: "/dosen",
      name: "Dosen",
      component: Dosen,
    },
    {
      path: "/register",
      name: "Registrasi",
      component: Registrasi,
    },
    {
      path: "/Beranda",
      name: "Beranda",
      component: Beranda,
    },
    {
      path: "/kontak",
      name: "Kontak",
      component: Kontak,
    },
    {
      path: "/siswa",
      name: "Siswa",
      component: Siswa,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
    {
      path: "/adminP",
      name: "AdminP",
      component: AdminP,
    },
    {
      path: "/guru",
      name: "Guru",
      component: Guru,
    },
    {
      path: "/mahasiswa",
      name: "Mahasiswa",
      component: Mahasiswa,
    },
    {
      path: "/StatistikMahasiswa",
      name: "StatistikMahasiswa",
      component: StatistikMahasiswa,
    },
  ];
}

const link = new Router({
  mode: "history",
  routes: configRouters(),
});
export default link;
