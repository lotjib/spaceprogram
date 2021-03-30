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
  },
  methods:{
  	getStats(){
  		this.$axios.get('https://server.siberiaserver.tk/api/model/Stat/getAll').then(res => {
  			this.stats = res.data;
  		}).then(msg => {
        console.log(this.stats);
      });

  	}
  },
}
</script>
