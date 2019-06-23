Vue.component('project', {
	props: [
		'gitlink', 'projectimg', 'projecttitle', 'projecttechnologies', 'projectreason', 'projectlearned'
	],
	template: 
	`<div class="item row">
		<a class="col-md-4 col-sm-4 col-xs-12" :href="gitlink" target="_blank">
			<img class="img-responsive project-image" :src="projectimg" alt="project name" />
		</a>
		<div class="desc col-md-8 col-sm-8 col-xs-12">
			<h3 class="title">
				<a :href="gitlink" target="_blank">{{projecttitle}}</a>
			</h3>
			<p>{{projecttechnologies}}</p>
			<p>{{projectreason}}</p>
			<p>{{projectlearned}}</p>
    </div>
    </div>`
})

Vue.component('skill', {
	props: ['skilltechnologies', 'skilllevel', 'skillpercentage'],
	template:
	 `<div class="item">
	 		<h3 class="level-title">{{skilltechnologies}}
	 			<span class="level-label">{{skilllevel}}</span>
	 		</h3>
			<div class="level-bar">
				<div class="level-bar-inner" :data-level=skillpercentage>
				</div>
			</div>
		</div>`
})

Vue.component('education', {
	props: ['edugraduation', 'eduplace', 'edudate'],
	template:	
	`<div class="item">
		<h3 class="title"><i class="fa fa-graduation-cap"></i>{{edugraduation}}</h3>
    <h4 class="university">{{eduplace}} <span class="year">{{edudate}}</span></h4>
  </div>`	
})


new Vue({
  el: '#app',
  data: function() {
    return {
      dataShowJobs: true,
      dataShowStudy: false,
    }
  },
  methods: {
    showJobs: function() {
    this.dataShowJobs = !this.dataShowJobs;
    this.dataShowStudy = !this.dataShowStudy;
    },
    showStudy: function() {
      this.dataShowStudy = !this.dataShowStudy;
      this.dataShowJobs = !this.dataShowJobs;
    }
  }
})
