<template>
    <div>
       <Navbar/>
        <div class="container-fluid">
            <div class="row">
                <Sidebar/>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <router-view></router-view>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar';
import Navbar from './Navbar'

export default {
  components: {
    Sidebar,
    Navbar,
  },
  created() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log('mycookie',myCookie)
    this.$http.defaults.headers.common.Authorization = `${myCookie}`;
  },
  
};
</script>
