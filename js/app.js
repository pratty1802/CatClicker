var initialCats=[
{
  name:'Leelavati',
  imgSrc:"img/434164568_fea0ad4013_z.jpg",
  imgAttribution:"http://flicker.com",
  clickCount:0,
  nickNameList:['Pilla1','Pillu1','Minka1','Minki1']
},
{
  name:'Gunvati',
  imgSrc:"img/22252709_010df3379e_z.jpg",
  imgAttribution:"http://flicker.com",
  clickCount:0,
  nickNameList:['Pilla2','Pillu2','Minka2','Minki2']
},
{
  name:'PuchPuchi Devi',
  imgSrc:"img/1413379559_412a540d29_z.jpg",
  imgAttribution:"http://flicker.com",
  clickCount:0,
  nickNameList:['Pilla3','Pillu3','Minka3','Minki3']
},
{
  name:'Ramkudi Devi',
  imgSrc:"img/9648464288_2516b35537_z.jpg",
  imgAttribution:"http://flicker.com",
  clickCount:0,
  nickNameList:['Pilla4','Pillu4','Minka4','Minki4']
},
{
  name:'Jhamkudi Devi',
  imgSrc:"img/4154543904_6e2428c421_z.jpg",
  imgAttribution:"http://flicker.com",
  clickCount:0,
  nickNameList:['Pilla5','Pillu5','Minka5','Minki5']
}
];

var Cat= function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.catLevel=ko.computed(function(){
    if(this.clickCount()<10)
    {
      return "new born";
    }
    else if(this.clickCount()<100)
    {
      return "infant";
    }
    else
    {
        return "teen";
    }
  },this);

  this.nickNameList = ko.observableArray(data.nickNameList);
};

var viewModel = function(){
  self=this;
  this.catList=ko.observableArray([]);
  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });
  this.currentCat=ko.observable(this.catList()[0]);
  this.incrementCounter = function(){
  self.currentCat().clickCount(self.currentCat().clickCount()+1);
  } ;
  this.setCat=function(clickedCat){
  self.currentCat(clickedCat);
  };

};
ko.applyBindings(new viewModel());
