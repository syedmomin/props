"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[900],{8900:(f,a,r)=>{r.r(a),r.d(a,{ScienceModule:()=>h});var i=r(6895),e=r(8256),l=r(0);const p=function(t,o){return{"background-image":t,transform:o}};function u(t,o){if(1&t&&(e.TgZ(0,"div",12)(1,"span"),e._uU(2),e.qZA()()),2&t){const n=o.$implicit,s=o.index,c=e.oxw();e.Q6J("ngStyle",e.WLB(2,p,"url("+n.imageUrl+")",c.getTransform(s))),e.xp6(2),e.Oqu(n.text)}}const g=function(t){return{transform:t}};let m=(()=>{class t{constructor(){this.carouselFaces=[{text:"This is something",imageUrl:"https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{text:"Very special",imageUrl:"https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{text:"Special is the key",imageUrl:"https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{text:"For you",imageUrl:"https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}],this.currentIndex=0,this.carouselTransform=""}ngOnInit(){this.updateCarouselTransform()}getTransform(n){return`rotateY(${360/this.carouselFaces.length*n}deg) translateZ(430px)`}rotateCarousel(n){this.currentIndex=(this.currentIndex+n+this.carouselFaces.length)%this.carouselFaces.length,this.updateCarouselTransform()}updateCarouselTransform(){this.carouselTransform=`rotateY(${-360/this.carouselFaces.length*this.currentIndex}deg)`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-science"]],decls:20,vars:4,consts:[[1,"section"],[1,"header-science"],[1,"text-primary"],[1,"carousel-wrapper"],[1,"arrow","left-arrow",3,"click"],[1,"fas","fa-chevron-left"],[1,"container"],[1,"carousel",3,"ngStyle"],["class","carousel__face",3,"ngStyle",4,"ngFor","ngForOf"],[1,"arrow","right-arrow",3,"click"],[1,"fas","fa-chevron-right"],[1,"description-science"],[1,"carousel__face",3,"ngStyle"]],template:function(n,s){1&n&&(e._UZ(0,"app-glass-animation"),e.TgZ(1,"div",0)(2,"div",1)(3,"h1",2),e._uU(4,"THE SCIENCE"),e.qZA()(),e.TgZ(5,"div",3)(6,"span",4),e.NdJ("click",function(){return s.rotateCarousel(-1)}),e._UZ(7,"i",5),e.qZA(),e.TgZ(8,"div",6)(9,"div",7),e.YNc(10,u,3,5,"div",8),e.qZA()(),e.TgZ(11,"span",9),e.NdJ("click",function(){return s.rotateCarousel(1)}),e._UZ(12,"i",10),e.qZA()(),e.TgZ(13,"div",11)(14,"h3"),e._uU(15,"Description Of The Container Here"),e.qZA(),e.TgZ(16,"h5"),e._uU(17,"Sub Heading"),e.qZA(),e.TgZ(18,"p"),e._uU(19," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),e.qZA()()()),2&n&&(e.xp6(9),e.Q6J("ngStyle",e.VKq(2,g,s.carouselTransform)),e.xp6(1),e.Q6J("ngForOf",s.carouselFaces))},dependencies:[i.sg,i.PC,l.q],styles:[".section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;width:100%;overflow:hidden;text-align:center}.header-science[_ngcontent-%COMP%]{margin-bottom:20px}.header-science[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700}.carousel-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center;width:85%;overflow:hidden}.container[_ngcontent-%COMP%]{position:relative;width:340px;height:250px;perspective:1000px}.carousel[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;transform-style:preserve-3d;transition:transform .5s ease}.carousel__face[_ngcontent-%COMP%]{position:absolute;width:300px;height:187px;top:20px;left:10px;background-size:cover;box-shadow:inset 0 0 0 2000px #00000080;display:flex;align-items:center;justify-content:center}.carousel__face[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:2rem;color:#fff}.arrow[_ngcontent-%COMP%]{color:#767575;cursor:pointer;font-size:3rem;z-index:1;transition:color .3s ease;margin:0 10px}.arrow[_ngcontent-%COMP%]:hover{color:#fff}.description-science[_ngcontent-%COMP%]{margin-top:20px;max-width:40%}.description-science[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-weight:700;line-height:19.36px;letter-spacing:.66em}"]}),t})();var d=r(2655);let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.ez,l.q,d.Bz.forChild([{path:"",component:m}])]}),t})()}}]);