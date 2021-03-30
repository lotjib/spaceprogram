<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
  	return{
  		stats: null,
  	}
  },
  mounted(){
  	this.getStats();
  	console.log();
  },
  methods:{
  	getStats(){
  		axios.get('http://server.siberiaserver.tk/api/model/Stat/getAll').then(res => {
  			this.stats = res.data;
  		});
  	}
  },
}
</script>
