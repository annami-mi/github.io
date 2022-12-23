(function(){"use strict";var t={5656:function(t,a,s){var e=s(9242),n=s(3396);const i={class:"container"};function o(t,a,s,e,o,c){const r=(0,n.up)("main-header"),l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),(0,n._)("main",i,[(0,n.Wm)(l)])],64)}var c=s.p+"img/logo.e9f674a7.png";const r=t=>((0,n.dD)("data-v-ea25009c"),t=t(),(0,n.Cn)(),t),l=r((()=>(0,n._)("header",null,[(0,n._)("img",{class:"logo",src:c})],-1))),h={class:"nav"};function d(t,a,s,e,i,o){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n._)("nav",h,[(0,n.Wm)(c,{to:{name:"main"},class:"nav__link","active-class":"nav__link--active"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Episodes ")])),_:1}),(0,n.Wm)(c,{to:{name:"charactersPage"},class:"nav__link","active-class":"nav__link--active"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Characters ")])),_:1}),(0,n.Wm)(c,{to:{name:"locationsPage"},class:"nav__link","active-class":"nav__link--active"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Location ")])),_:1})])],64)}var u={name:"mainHeader",data(){return{activePage:""}}},p=s(89);const m=(0,p.Z)(u,[["render",d],["__scopeId","data-v-ea25009c"]]);var _=m,f={name:"App",data(){return{episodes:[],searchItem:"",season:null}},components:{MainHeader:_}};const w=(0,p.Z)(f,[["render",o]]);var g=w,v=s(2483);const k={class:"headline"},y={class:"search"},b={key:0};function x(t,a,s,e,i,o){const c=(0,n.up)("groups-season"),r=(0,n.up)("input-search"),l=(0,n.up)("list-episodes"),h=(0,n.up)("buttons-pagination");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",k,[(0,n.Wm)(c,{onChangeSeason:o.getCurrentSeason},null,8,["onChangeSeason"]),(0,n._)("div",y,[(0,n.Wm)(r,{onFilteringItems:o.searchText},null,8,["onFilteringItems"])])]),(0,n.Wm)(l,{episodes_data:this.episodes},null,8,["episodes_data"]),i.notFound?((0,n.wg)(),(0,n.iD)("div",b,"not found")):(0,n.kq)("",!0),i.hideButtonMore?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(h,{key:1,onClick:o.showMoreItems},null,8,["onClick"]))],64)}const C={class:"list"};function S(t,a,s,e,i,o){const c=(0,n.up)("card-episode");return(0,n.wg)(),(0,n.iD)("ul",C,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.episodes,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.id,class:"item"},[(0,n.Wm)(c,{episode_data:t},null,8,["episode_data"])])))),128))])}var I=s(7139);const D={class:"card__image"},N={class:"card__date"},A={class:"card__title"};function $(t,a,s,e,i,o){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(c,{to:{name:"episodePage",params:{id:s.episode_data.id}},class:"card"},{default:(0,n.w5)((()=>[(0,n._)("div",D,[(0,n._)("div",N,(0,I.zw)(s.episode_data.air_date),1)]),(0,n._)("p",A,(0,I.zw)(s.episode_data.episode)+" "+(0,I.zw)(s.episode_data.name),1)])),_:1},8,["to"])}var j={name:"cardEpisode",props:{episode_data:{type:Object}}};const L=(0,p.Z)(j,[["render",$],["__scopeId","data-v-14b97a78"]]);var P=L,M={name:"listEpisodes",data(){return{episodes:[]}},props:{episodes_data:{type:Object}},components:{CardEpisode:P},mounted(){},methods:{showList(){this.episodes=this.episodes_data}},watch:{episodes_data(){this.showList()}}};const E=(0,p.Z)(M,[["render",S],["__scopeId","data-v-51972746"]]);var B=E;const F=t=>((0,n.dD)("data-v-32207812"),t=t(),(0,n.Cn)(),t),U={class:"container"},z=F((()=>(0,n._)("button",{class:"button"},"More",-1))),O=[z];function W(t,a,s,e,i,o){return(0,n.wg)(),(0,n.iD)("div",U,O)}var H={name:"buttonsPagination",data(){return{}},methods:{}};const Z=(0,p.Z)(H,[["render",W],["__scopeId","data-v-32207812"]]);var T=Z;const Y={class:"groups"},q=["onClick"];function K(t,a,s,e,i,o){return(0,n.wg)(),(0,n.iD)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.seasons,(t=>((0,n.wg)(),(0,n.iD)("button",{key:t.id,class:(0,I.C_)(["link",t.id===i.currentSeason?"link--active":""]),onClick:a=>o.changeSeason(t.id)},(0,I.zw)(t.text),11,q)))),128))])}var G={name:"groupsSeason",data(){return{seasons:[{id:"0",text:"All seasons"},{id:"1",text:"1 season"},{id:"2",text:"2 season"},{id:"3",text:"3 season"},{id:"4",text:"4 season"},{id:"5",text:"5 season"}],currentSeason:null}},methods:{changeSeason(t){this.currentSeason=t,this.$emit("changeSeason",this.currentSeason)}}};const R=(0,p.Z)(G,[["render",K],["__scopeId","data-v-67c2392b"]]);var V=R;function J(t,a,s,i,o,c){return(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{onKeyup:a[0]||(a[0]=(...t)=>c.filteringItems&&c.filteringItems(...t)),"onUpdate:modelValue":a[1]||(a[1]=t=>o.searchText=t),type:"text",class:"input-search",placeholder:"Search.."},null,544)),[[e.nr,o.searchText]])}var Q={name:"inputSearch",data(){return{searchText:""}},methods:{filteringItems(){this.$emit("filteringItems",this.searchText)}}};const X=(0,p.Z)(Q,[["render",J],["__scopeId","data-v-8948c092"]]);var tt=X,at={name:"pageEpisodes",components:{InputSearch:tt,GroupsSeason:V,ButtonsPagination:T,ListEpisodes:B},data(){return{episodes:[],episodesNextPage:"",season:0,stopScroll:!1,notFound:!1,hideButtonMore:!1,searchName:"",linkApi:"https://rickandmortyapi.com/api/episode/"}},methods:{getCurrentSeason(t){this.season=Number(t)},async changeSeason(){let t;this.stopScroll=!0;try{0==!this.season?t=""===this.searchName?(t=this.season)=>`${this.linkApi}?episode=S0${t}`:(t=this.season,a=this.searchName)=>`${this.linkApi}?episode=S0${t}&name=${a}`:(t=""===this.searchName?()=>this.linkApi:(t=this.searchName)=>`${this.linkApi}?name=${t}`,console.log(t()));const a=await fetch(t()),s=await a.json();this.episodes=s.results,this.notFound=!1,s.info.next?this.hideButtonMore=!1:this.hideButtonMore=!0}catch(a){this.notFound=!0}},async showMoreItems(){try{const t=this.episodesNextPage,a=this.episodes,s=await fetch(t),e=await s.json();this.episodesNextPage=e.info.next;const n=a.concat(e.results);this.episodes=n,this.hideButtonMore=!0,this.listenerScroll(),this.stopScroll=!1}catch(t){console.log("end")}},listenerScroll(){window.onscroll=()=>{let t=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;t&&!this.stopScroll&&this.showMoreItems()}},searchText(t){this.searchName=t},async filterEpisodes(){this.stopScroll=!0;const t=this.searchName,a=this.season;let s,e,n;""==!t?(s=0==!a?(s=t,e=a)=>`${this.linkApi}?episode=S0${e}&name=${s}`:(a=t)=>`${this.linkApi}?name=${a}`,console.log(s())):s=0==!a?(t=a)=>`${this.linkApi}?episode=S0${t}`:()=>this.linkApi,console.log(0==!a),console.log(s());try{e=await fetch(s()),n=await e.json(),this.episodes=n.results,this.episodesNextPage=n.info.next,this.notFound=!1,this.episodesNextPage?this.hideButtonMore=!1:this.hideButtonMore=!0}catch(i){this.notFound=!0}}},async mounted(){const t=this.linkApi,a=await fetch(t),s=await a.json();this.episodes=s.results,this.episodesNextPage=s.info.next},watch:{season(){this.changeSeason()},searchName(){this.filterEpisodes()}}};const st=(0,p.Z)(at,[["render",x]]);var et=st;const nt={class:"headline"},it={class:"search"},ot={key:0};function ct(t,a,s,e,i,o){const c=(0,n.up)("input-search"),r=(0,n.up)("filter-checkbox"),l=(0,n.up)("list-characters"),h=(0,n.up)("buttons-pagination");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",nt,[(0,n._)("div",it,[(0,n.Wm)(c,{onFilteringItems:o.searchText},null,8,["onFilteringItems"]),(0,n.Wm)(r,{onChangeStatus:o.statusLive},null,8,["onChangeStatus"])])]),(0,n.Wm)(l,{characters_data:this.characters},null,8,["characters_data"]),i.notFound?((0,n.wg)(),(0,n.iD)("div",ot,"not found")):(0,n.kq)("",!0),i.hideButtonMore?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(h,{key:1,onClick:o.showMoreItems},null,8,["onClick"]))],64)}const rt={class:"list"};function lt(t,a,s,e,i,o){const c=(0,n.up)("card-character");return(0,n.wg)(),(0,n.iD)("ul",rt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.characters,(t=>((0,n.wg)(),(0,n.iD)("li",{key:t.id,class:"item"},[(0,n.Wm)(c,{character_data:t},null,8,["character_data"])])))),128))])}const ht=["src"],dt={class:"card__content"},ut={class:"card__title"},pt={class:"card__species"};function mt(t,a,s,e,i,o){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(c,{class:"card",to:{name:"characterItem",params:{id:s.character_data.id}}},{default:(0,n.w5)((()=>[(0,n._)("img",{class:"card__img",src:s.character_data.image},null,8,ht),(0,n._)("div",dt,[(0,n._)("p",ut,(0,I.zw)(s.character_data.name),1),(0,n._)("p",{class:(0,I.C_)(["card__status","Alive"===s.character_data.status?"card__status--alive":"Dead"===s.character_data.status?"card__status--dead":""])},(0,I.zw)(s.character_data.status),3),(0,n._)("p",pt,(0,I.zw)(s.character_data.species),1)])])),_:1},8,["to"])}var _t={name:"cardCharacter",props:{character_data:{type:Object}},mounted(){}};const ft=(0,p.Z)(_t,[["render",mt],["__scopeId","data-v-5275c3c9"]]);var wt=ft,gt={name:"listCharacters",components:{CardCharacter:wt},data(){return{characters:[]}},props:{characters_data:{type:Object}},methods:{showList(){this.characters=this.characters_data}},mounted(){this.characters=this.characters_data},watch:{characters_data(){this.showList()}}};const vt=(0,p.Z)(gt,[["render",lt],["__scopeId","data-v-16c5e2c7"]]);var kt=vt;const yt=t=>((0,n.dD)("data-v-8071ab52"),t=t(),(0,n.Cn)(),t),bt={class:"filters"},xt={class:"filter"},Ct={class:"filter"},St=yt((()=>(0,n._)("label",{class:"checkbox",for:"statusAll"},null,-1))),It=yt((()=>(0,n._)("span",{class:"checkbox-label"},"All",-1))),Dt=yt((()=>(0,n._)("label",{class:"checkbox",for:"statusAlive"},null,-1))),Nt=yt((()=>(0,n._)("span",{class:"checkbox-label"},"Alive",-1))),At={class:"filter"},$t=yt((()=>(0,n._)("label",{class:"checkbox",for:"statusDead"},null,-1))),jt=yt((()=>(0,n._)("span",{class:"checkbox-label"},"Dead",-1)));function Lt(t,a,s,i,o,c){return(0,n.wg)(),(0,n.iD)("div",bt,[(0,n._)("div",xt,[(0,n._)("div",Ct,[(0,n.wy)((0,n._)("input",{id:"statusAll",class:"checkbox-input",type:"radio",name:"status",checked:"","onUpdate:modelValue":a[0]||(a[0]=t=>o.statusLive=t),value:"All"},null,512),[[e.G2,o.statusLive]]),St,It]),(0,n.wy)((0,n._)("input",{id:"statusAlive",class:"checkbox-input",type:"radio",value:"Alive",name:"status","onUpdate:modelValue":a[1]||(a[1]=t=>o.statusLive=t),onChange:a[2]||(a[2]=(...t)=>c.changeStatus&&c.changeStatus(...t))},null,544),[[e.G2,o.statusLive]]),Dt,Nt]),(0,n._)("div",At,[(0,n.wy)((0,n._)("input",{id:"statusDead",class:"checkbox-input",type:"radio",name:"status","onUpdate:modelValue":a[3]||(a[3]=t=>o.statusLive=t),value:"Dead"},null,512),[[e.G2,o.statusLive]]),$t,jt])])}var Pt={name:"filterCheckbox",data(){return{statusLive:[]}},methods:{changeStatus(){this.$emit("changeStatus",this.statusLive)}},watch:{statusLive(){this.changeStatus()}}};const Mt=(0,p.Z)(Pt,[["render",Lt],["__scopeId","data-v-8071ab52"]]);var Et=Mt,Bt={name:"pageCharacters",components:{FilterCheckbox:Et,InputSearch:tt,ButtonsPagination:T,ListCharacters:kt},data(){return{characters:[],charactersNextPage:"",stopScroll:!1,hideButtonMore:!1,searchName:"",status:[],linkApi:"https://rickandmortyapi.com/api/character/",notFound:!1}},methods:{async showMoreItems(){try{const t=this.charactersNextPage,a=this.characters,s=await fetch(t),e=await s.json();this.charactersNextPage=e.info.next;const n=a.concat(e.results);this.characters=n,this.hideButtonMore=!0,this.listenerScroll(),this.stopScroll=!1}catch(t){console.log("end")}},listenerScroll(){window.onscroll=()=>{let t=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;t&&!this.stopScroll&&this.showMoreItems()}},searchText(t){this.searchName=t},async filterCharacters(){this.stopScroll=!0;const t=this.searchName,a=this.status;let s,e,n;s=""==!t?"Alive"==a||"Dead"==a?(a=t,s=this.status)=>`${this.linkApi}?status=${s}&name=${a}`:(a=t)=>`${this.linkApi}?name=${a}`:"Alive"==a||"Dead"==a?(t=this.status)=>`${this.linkApi}?status=${t}`:()=>this.linkApi;try{e=await fetch(s()),n=await e.json(),this.characters=n.results,this.charactersNextPage=n.info.next,this.notFound=!1,this.charactersNextPage?this.hideButtonMore=!1:this.hideButtonMore=!0}catch(i){this.notFound=!0}},statusLive(t){this.status=t},async filterOfStatus(){this.stopScroll=!0;const t=this.status;let a,s,e;a="Alive"==t||"Dead"==t?""===this.searchName?(a=t)=>`${this.linkApi}?status=${a}`:(a=t,s=this.searchName)=>`${this.linkApi}?status=${a}&name=${s}`:""===this.searchName?()=>this.linkApi:(t=this.searchName)=>`${this.linkApi}?name=${t}`;try{s=await fetch(a()),e=await s.json(),this.characters=e.results,this.charactersNextPage=e.info.next,this.notFound=!1,e.info.next?this.hideButtonMore=!1:this.hideButtonMore=!0}catch(n){this.notFound=!0}}},async mounted(){const t=this.linkApi,a=await fetch(t),s=await a.json();this.characters=s.results,this.charactersNextPage=s.info.next},watch:{searchName(){this.filterCharacters()},status(){this.filterOfStatus()}}};const Ft=(0,p.Z)(Bt,[["render",ct]]);var Ut=Ft;const zt={class:"headline"},Ot={class:"search"},Wt={key:0};function Ht(t,a,s,e,i,o){const c=(0,n.up)("input-search"),r=(0,n.up)("list-location"),l=(0,n.up)("buttons-pagination");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",zt,[(0,n._)("div",Ot,[(0,n.Wm)(c,{onFilteringItems:o.searchText},null,8,["onFilteringItems"])])]),(0,n.Wm)(r,{locations_data:this.locations},null,8,["locations_data"]),i.notFound?((0,n.wg)(),(0,n.iD)("div",Wt,"not found")):(0,n.kq)("",!0),i.hideButtonMore?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(l,{key:1,onClick:o.showMoreItems},null,8,["onClick"]))],64)}const Zt={class:"list"};function Tt(t,a,s,e,i,o){const c=(0,n.up)("card-location");return(0,n.wg)(),(0,n.iD)("ul",Zt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.locations,(t=>((0,n.wg)(),(0,n.iD)("li",{class:"item",key:t.id},[(0,n.Wm)(c,{location_info:t},null,8,["location_info"])])))),128))])}var Yt=s.p+"img/portal.433d01bd.png";const qt=t=>((0,n.dD)("data-v-ee3c6144"),t=t(),(0,n.Cn)(),t),Kt=qt((()=>(0,n._)("img",{class:"card__img",src:Yt},null,-1))),Gt={class:"card__content"},Rt={class:"card__title"},Vt={class:"card__status"},Jt={class:"card__species"};function Qt(t,a,s,e,i,o){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(c,{class:"card",to:{name:"locationItem",params:{id:i.location.id}}},{default:(0,n.w5)((()=>[Kt,(0,n._)("div",Gt,[(0,n._)("p",Rt,(0,I.zw)(i.location.name),1),(0,n._)("p",Vt,(0,I.zw)(i.location.type),1),(0,n._)("p",Jt,(0,I.zw)(i.location.dimension),1)])])),_:1},8,["to"])}var Xt={name:"cardLocation",props:{location_info:{type:Object}},data(){return{location:this.location_info}}};const ta=(0,p.Z)(Xt,[["render",Qt],["__scopeId","data-v-ee3c6144"]]);var aa=ta,sa={name:"listLocation",props:{locations_data:{type:Object}},data(){return{locations:[]}},components:{CardLocation:aa},methods:{showList(){this.locations=this.locations_data}},watch:{locations_data(){this.showList()}}};const ea=(0,p.Z)(sa,[["render",Tt],["__scopeId","data-v-1c26a92a"]]);var na=ea,ia={name:"pageLocation",components:{InputSearch:tt,ButtonsPagination:T,ListLocation:na},data(){return{locations:[],locationsNextPage:"",hideButtonMore:!1,searchName:"",stopScroll:!1,linkApi:"https://rickandmortyapi.com/api/location/",notFound:!1}},methods:{async showMoreItems(){try{const t=this.locationsNextPage,a=this.locations,s=await fetch(t),e=await s.json();this.locationsNextPage=e.info.next;const n=a.concat(e.results);this.locations=n,this.hideButtonMore=!0,this.listenerScroll()}catch(t){console.log("end")}},listenerScroll(){window.onscroll=()=>{let t=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;t&&!this.stopScroll&&this.showMoreItems()}},searchText(t){this.searchName=t},async filterLocations(){const t=this.searchName;let a,s,e;a=""==!t?(a=t)=>`${this.linkApi}?name=${a}`:()=>this.linkApi;try{s=await fetch(a()),e=await s.json(),this.locations=e.results,this.locationsNextPage=e.info.next,this.notFound=!1,this.locationsNextPage?this.hideButtonMore=!1:this.hideButtonMore=!0}catch(n){this.notFound=!0}}},async mounted(){const t=()=>"https://rickandmortyapi.com/api/location",a=await fetch(t()),s=await a.json();this.locations=s.results,this.locationsNextPage=s.info.next},watch:{searchName(){this.filterLocations()}}};const oa=(0,p.Z)(ia,[["render",Ht]]);var ca=oa;const ra=t=>((0,n.dD)("data-v-2f60e48c"),t=t(),(0,n.Cn)(),t),la={class:"card__title"},ha={class:"card__video"},da={class:"card__date"},ua=ra((()=>(0,n._)("div",{class:"title"},"Characters in Episode",-1)));function pa(t,a,s,e,i,o){const c=(0,n.up)("list-characters");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",la,(0,I.zw)(i.episode.episode)+" "+(0,I.zw)(i.episode.name),1),(0,n._)("div",ha,[(0,n._)("div",da,(0,I.zw)(i.episode.air_date),1)]),ua,(0,n.Wm)(c,{characters_data:i.characters},null,8,["characters_data"])],64)}s(7658);var ma={name:"itemEpisode",components:{ListCharacters:kt},data(){return{episode:[],characters:[],linksCharacters:[],idCharacters:[]}},computed:{},async mounted(){const t=this.$route.params.id,a=(a=t)=>`https://rickandmortyapi.com/api/episode/${a}`,s=await fetch(a()),e=await s.json();this.episode=e,this.linksCharacters=e.characters;for(let c of this.linksCharacters){const t=new URL(c).pathname.split("/"),a=t.pop()||t.pop();this.idCharacters.push(a)}const n=(t=this.idCharacters)=>`https://rickandmortyapi.com/api/character/${t}`,i=await fetch(n()),o=await i.json();this.characters=o}};const _a=(0,p.Z)(ma,[["render",pa],["__scopeId","data-v-2f60e48c"]]);var fa=_a;const wa=t=>((0,n.dD)("data-v-6cbffb32"),t=t(),(0,n.Cn)(),t),ga={class:"profile"},va=["src"],ka={class:"profile__title"},ya={class:"profile__p"},ba={class:"profile__p"},xa={class:"profile__section"},Ca=wa((()=>(0,n._)("span",{class:"profile__label"},"Origin:",-1))),Sa=wa((()=>(0,n._)("span",{class:"profile__label"},"Location:",-1))),Ia=wa((()=>(0,n._)("div",{class:"title"},"Episode",-1)));function Da(t,a,s,e,i,o){const c=(0,n.up)("router-link"),r=(0,n.up)("list-episodes");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",ga,[(0,n._)("img",{class:"profile__img",src:i.character.image},null,8,va),(0,n._)("div",null,[(0,n._)("p",ka,(0,I.zw)(i.character.name),1),(0,n._)("p",{class:(0,I.C_)(["profile__status","Alive"===i.character.status?"card__status--alive":"Dead"===i.character.status?"card__status--dead":""])},(0,I.zw)(i.character.status),3),(0,n._)("p",ya,(0,I.zw)(i.character.species),1),(0,n._)("p",ba,(0,I.zw)(i.character.gender),1),(0,n._)("div",xa,[(0,n._)("p",null,[Ca,(0,n.Wm)(c,{disabled:this.originUnknown,to:this.originUnknown?"":{name:"locationItem",params:{id:this.originId}},class:(0,I.C_)(["profile__link",this.originUnknown?"profile__link--disable":""])},{default:(0,n.w5)((()=>[(0,n.Uk)((0,I.zw)(i.character.origin?.name),1)])),_:1},8,["disabled","to","class"])]),(0,n._)("p",null,[Sa,(0,n.Wm)(c,{is:this.locationUnknown?"span":"router-link",to:{name:"locationItem",params:{id:this.locationId}},class:"profile__link"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,I.zw)(i.character.location?.name),1)])),_:1},8,["is","to"])])])])]),Ia,(0,n.Wm)(r,{episodes_data:i.episodes},null,8,["episodes_data"])],64)}var Na={name:"itemCharacter",components:{ListEpisodes:B},data(){return{character:{},linkEpisodes:[],idEpisodes:[],episodes:{},originId:Number,locationId:Number,originUnknown:Boolean,locationUnknown:Boolean}},async mounted(){const t=Number(this.$route.params.id),a=(a=t)=>`https://rickandmortyapi.com/api/character/${a}`,s=await fetch(a()),e=await s.json();this.character=e,this.linkEpisodes=e.episode;for(let c of this.linkEpisodes){const t=new URL(c).pathname.split("/"),a=t.pop()||t.pop();this.idEpisodes.push(a)}const n=(t=this.idEpisodes)=>`https://rickandmortyapi.com/api/episode/${t}`,i=await fetch(n()),o=await i.json();if(this.episodes=o,this.episodes=Array.isArray(o)?o:[o],""==!this.character.origin?.url){const t=e.origin?.url,a=await fetch(t),s=await a.json();this.originId=s.id,this.originUnknown=!1}else this.originUnknown=!0;if(""==!this.character.location?.url){const t=e.location?.url,a=await fetch(t),s=await a.json();this.locationId=s.id,this.locationUnknown=!1}else this.locationUnknown=!0}};const Aa=(0,p.Z)(Na,[["render",Da],["__scopeId","data-v-6cbffb32"]]);var $a=Aa;const ja=t=>((0,n.dD)("data-v-8a155032"),t=t(),(0,n.Cn)(),t),La={class:"card__title"},Pa={class:"card__section"},Ma={class:"card__p"},Ea=ja((()=>(0,n._)("span",{class:"card__label"},"Type:",-1))),Ba={class:"card__p"},Fa=ja((()=>(0,n._)("span",{class:"card__label"},"Dimension:",-1))),Ua=ja((()=>(0,n._)("div",{class:"title"},"Residents",-1)));function za(t,a,s,e,i,o){const c=(0,n.up)("list-characters");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("h1",La,(0,I.zw)(i.location.name),1),(0,n._)("div",Pa,[(0,n._)("p",Ma,[Ea,(0,n.Uk)(),(0,n._)("span",null,(0,I.zw)(i.location.type),1)]),(0,n._)("p",Ba,[Fa,(0,n.Uk)(),(0,n._)("span",null,(0,I.zw)(i.location.dimension),1)])]),Ua,(0,n.Wm)(c,{characters_data:i.characters},null,8,["characters_data"])],64)}var Oa={name:"itemLocation",components:{ListCharacters:kt},data(){return{location:[],characters:[],linksCharacters:[],idCharacters:[]}},async mounted(){const t=this.$route.params.id,a=(a=t)=>`https://rickandmortyapi.com/api/location/${a}`,s=await fetch(a());let e=await s.json();console.log(e),e=Array.isArray(e)?e:[e],console.log(e),console.log(e?.residents),console.log(Object.keys(e)),this.location=e;for(let c of this.linksCharacters){const t=new URL(c).pathname.split("/"),a=t.pop()||t.pop();this.idCharacters.push(a)}const n=(t=this.idCharacters)=>`https://rickandmortyapi.com/api/character/${t}`,i=await fetch(n()),o=await i.json();this.characters=o}};const Wa=(0,p.Z)(Oa,[["render",za],["__scopeId","data-v-8a155032"]]);var Ha=Wa,Za=(0,v.p7)({history:(0,v.r5)(),routes:[{path:"/",name:"main",component:et},{path:"/episode/:id",name:"episodePage",component:fa},{path:"/character/",name:"charactersPage",component:Ut},{path:"/character/:id",name:"characterItem",component:$a},{path:"/location/",name:"locationsPage",component:ca},{path:"/location/:id",name:"locationItem",component:Ha}]});const Ta=(0,e.ri)(g);Ta.use(Za),Ta.mount("#app")}},a={};function s(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e](i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(a,e,n,i){if(!e){var o=1/0;for(h=0;h<t.length;h++){e=t[h][0],n=t[h][1],i=t[h][2];for(var c=!0,r=0;r<e.length;r++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](e[r])}))?e.splice(r--,1):(c=!1,i<o&&(o=i));if(c){t.splice(h--,1);var l=n();void 0!==l&&(a=l)}}return a}i=i||0;for(var h=t.length;h>0&&t[h-1][2]>i;h--)t[h]=t[h-1];t[h]=[e,n,i]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var e in a)s.o(a,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(a){return 0===t[a]};var a=function(a,e){var n,i,o=e[0],c=e[1],r=e[2],l=0;if(o.some((function(a){return 0!==t[a]}))){for(n in c)s.o(c,n)&&(s.m[n]=c[n]);if(r)var h=r(s)}for(a&&a(e);l<o.length;l++)i=o[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(h)},e=self["webpackChunktestrickandmorty"]=self["webpackChunktestrickandmorty"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(5656)}));e=s.O(e)})();
//# sourceMappingURL=app.4695de68.js.map