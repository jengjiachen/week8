const myCats = [
    {
    name: 'Balinese',
    orign: 'US',
    characteristics: 'Long, svelte body',
    hair: 'Short Hair',
    comments: 'Mutation of Siamese'
    },
    {
    name: 'Birman',
    orign: 'Burma',
    characteristics: 'Deep blye eyes, White gloved tails',
    hair: 'Long Hair',
    comments: 'Sacred Cat of Burma'
    },
    {
    name: 'Cymric',
    orign: 'Canada',
    characteristics: 'Tailless',
    hair: 'Long Hair',
    comments: 'Cross between Siamese and Persian'
    },
    {
    name: 'Persian',
    orign: 'Iran',
    characteristics: 'Large Head',
    hair: 'Long Hair',
    comments: 'One of the oldest breeds'
    },
    {
    name: 'Turkish Angora',
    orign: 'Turkey',
    characteristics: 'Long Plumed tail',
    hair: 'Long Hair',
    comments: 'Of the the first long hairs'
    },
    
  ];
  
  var vm = new Vue({
  el:"#app",
  data: {
    cats: myCats, 
    newCatObj: {
      name: "",
      origin: "",
      characteristics: "",
      hair: "",
      comments: ""

    }
  }, 
  methods: {
    submitHandler: () => {
      console.log('submitted');
      vm.cats = vm.cats.concat(vm.newCatObj);
      vm.resetForm();
    },
    resetForm: () => {
      vm.newCatObj = {
        name: "",
        orign: "",
        characteristics: "",
        hair: "",
        comments: ""
      };
    },
    deleteItem: item => {
      vm.cats = vm.cats.filter(catItem => {
        return catItem !== item;
      })
    }
  }
});