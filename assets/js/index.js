Vue.component('project', {
  props: [
    'gitlink', 'projectimg', 'projecttitle', 'projecttechnologies', 'projectreason', 'projectlearned'
  ],
  template: '<div class="item row"><a class="col-md-4 col-sm-4 col-xs-12" :href="gitlink" target="_blank"><img class="img-responsive project-image" :src="projectimg" alt="project name" /></a><div class="desc col-md-8 col-sm-8 col-xs-12"><h3 class="title"><a :href="gitlink" target="_blank">{{projecttitle}}</a></h3><p>{{projecttechnologies}}</p><p>{{projectreason}}</p><p>{{projectlearned}}</p></div><!--//desc--></div><!--//item-->'
})

Vue.component('skill', {
  props: ['skilltechnologies', 'skilllevel', 'skillpercentage'],
  template: '<div class="item"><h3 class="level-title">{{skilltechnologies}}<span class="level-label">{{skilllevel}}</span></h3><div class="level-bar"><div class="level-bar-inner" :data-level=skillpercentage></div></div></div>'
})

new Vue({
  el: '#app',
})
