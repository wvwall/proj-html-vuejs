Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
     listNav : [

        {
            name : "home",
        },

        {
            name : "services",
        },

        {
            name : "about",
        },

        {
            name : "projects",
        },

        {
            name : "results",
        }
     ],
     img : [

        {
            name : "./assets/img/project-1.jpg",
            text : "Acadedmia professional program in social media"
        },

        {
            name : "./assets/img/project-2.jpg",
            text : "President's speech at the annual meeting"
        },

        {
            name : "./assets/img/project-3.jpg",
            text : "Intenational business trip in Shanghai"
        },

        {
            name : "./assets/img/project-4.jpg",
            text : "Technology workshop with education theme"
        },

        {
            name : "./assets/img/project-5.jpg",
            text : "Donation of clothes and food to the partner NGO"
        },

        {
            name : "./assets/img/project-6.jpg",
            text : "Confraternization of the procurement team"
        },
     ]
    },
    
  });