/**
 * Some JSON elements and attributes might not be present. So,
 * Make sure you do sanity checks before you go ahead and display
 * The data.
 *
 * Your code will be tested using manipulated JSON objects!
 */

var imgType = '.jpg';

JString = [{
					"item-type":"restaurant",
					 "trust-percent":"91",
					 "review-score":"80",
					 "meta": {
						"name": "Pizza hut",
						"category": "food",
						"location": {
							"lat": "30.046250",
							"lon": "31.224411"
						},
						"image":"Pizzahut.jpg"
					},
					"opinions": {
						"count":"15",
						"list": [
							{
								"author": "TjWallas",
								"image":"Wallas.jpg",
							 	"rating": "0",
							 	"opinion": "Tastes like crap"
							}
						]
					}
				},{
					"item-type":"restaurant",
					 "trust-percent":"91",
					 "review-score":"80",
					 "meta": {
						"name": "Pizza hut",
						"category": "food",
						"location": {
							"lat": "30.046250",
							"lon": "31.224411"
						},
						"image":"Pizzahut.jpg"
					},
					"opinions": {
						"count":"15",
						"list": [
							{
								"author": "TjWallas",
								"image":"Wallas.jpg",
							 	"rating": "0",
							 	"opinion": "Tastes like crap"
							}
						]
					}
				},{
					"item-type":"restaurant",
					 "trust-percent":"91",
					 "review-score":"80",
					 "meta": {
						"name": "Pizza hut",
						"category": "food",
						"location": {
							"lat": "30.046250",
							"lon": "31.224411"
						},
						"image":"Pizzahut.jpg"
					},
					"opinions": {
						"count":"15",
						"list": [
							{
								"author": "TjWallas",
								"image":"Wallas.jpg",
							 	"rating": "0",
							 	"opinion": "Tastes like crap"
							}, 
							{
								"author": "Spammer",
								"rating": "100",
								"opinion": "This is a really really really really really really really really really really really really really really really really really really really really really really really really reallyreally really long really really really really really really comment"
							}
						]
					}
				},{
					"item-type":"software",
					"trust-percent":"100",
					"review-score":"100",
					"meta": {
						"name": "Linux",
						"category": "Technology",
						"image":"Penguin.jpg"
					},
					"opinions": {
						"count":"9000",
						"list": [
							{
								"author": "TjWallas",
								"image": "Wallas.jpg",
								"rating": "100",
								"opinion": "Geeky love is geeky love <3"
							}, 
							{
								"author": "Windows lover",
								"rating": "1",
								"opinion": "Windows FTW! Linux is so hard to learn."
							}
						]
					}
				},{
					"item-type":"restaurant",
					 "trust-percent":"91",
					 "review-score":"80",
					 "meta": {
						"name": "Pizza hut",
						"category": "food",
						"location": {
							"lat": "30.046250",
							"lon": "31.224411"
						},
						"image":"Pizzahut.jpg"
					},
					"opinions": {
						"count":"15",
						"list": [
							{
								"author": "TjWallas",
								"image":"Wallas.jpg",
							 	"rating": "0",
							 	"opinion": "Tastes like crap"
							}, 
							{
								"author": "Spammer",
								"rating": "100",
								"opinion": "This is a really really really really really really really really really really really really really really really really really really really really really really really really reallyreally really long really really really really really really comment"
							}
						]
					}
				},{
					"item-type":"restaurant",
					 "trust-percent":"91",
					 "review-score":"80",
					 "meta": {
						"name": "Pizza hut",
						"category": "food",
						"location": {
							"lat": "30.046250",
							"lon": "31.224411"
						},
						"image":"Pizzahut.jpg"
					},
					"opinions": {
						"count":"15",
						"list": [
							{
								"author": "TjWallas",
								"image":"Wallas.jpg",
							 	"rating": "0",
							 	"opinion": "Tastes like crap"
							}, 
							{
								"author": "Spammer",
								"rating": "100",
								"opinion": "This is a really really really really really really really really really really really really really really really really really really really really really really really really reallyreally really long really really really really really really comment"
							}
						]
					}
				},{
					"item-type":"restaurant",
					 "trust-percent":"91",
					 "review-score":"80",
					 "meta": {
						"name": "Pizza hut",
						"category": "food",
						"location": {
							"lat": "30.046250",
							"lon": "31.224411"
						},
						"image":"Pizzahut.jpg"
					},
					"opinions": {
						"count":"15",
						"list": [
							{
								"author": "TjWallas",
								"image":"Wallas.jpg",
							 	"rating": "0",
							 	"opinion": "Tastes like crap"
							}, 
							{
								"author": "Spammer",
								"rating": "100",
								"opinion": "This is a really really really really really really really really really really really really really really really really really really really really really really really really reallyreally really long really really really really really really comment"
							}
						]
					}
				},
				{
					"item-type":"restaurant",
					 "trust-percent":"91",
					 "review-score":"80",
					 "meta": {
						"name": "Pizza hut",
						"category": "food",
						"location": {
							"lat": "30.046250",
							"lon": "31.224411"
						},
						"image":"Pizzahut.jpg"
					},
					"opinions": {
						"count":"15",
						"list": [
							{
								"author": "TjWallas",
								"image":"Wallas.jpg",
							 	"rating": "0",
							 	"opinion": "Tastes like crap"
							}, 
							{
								"author": "Spammer",
								"rating": "100",
								"opinion": "This is a really really really really really really really really really really really really really really really really really really really really really really really really reallyreally really long really really really really really really comment"
							}
						]
					}
				},

				
				{
					"item-type":"software",
					"trust-percent":"100",
					"review-score":"100",
					"meta": {
						"name": "Linux",
						"category": "Technology",
						"image":"Penguin.jpg"
					},
					"opinions": {
						"count":"9000",
						"list": [
							{
								"author": "TjWallas",
								"image": "Wallas.jpg",
								"rating": "100",
								"opinion": "Geeky love is geeky love <3"
							}, 
							{
								"author": "Windows lover",
								"rating": "1",
								"opinion": "Windows FTW! Linux is so hard to learn."
							}
						]
					}
				},
				{"item-type": "car", "meta": {"name":"Ferrari"}}
				,
				{
					"item-type":"software",
					"trust-percent":"100",
					"review-score":"100",
					"meta": {
						"name": "Linux",
						"category": "Technology",
						"image":"Penguin.jpg"
					},
					"opinions": {
						"count":"9000",
						"list": [
							{
								"author": "TjWallas",
								"image": "Wallas.jpg",
								"rating": "100",
								"opinion": "Geeky love is geeky love <3"
							}, 
							{
								"author": "Windows lover",
								"rating": "1",
								"opinion": "Windows FTW! Linux is so hard to learn."
							}
						]
					}
				}
			];



/*
 * Opinion Class
 */
 
/*
 * Generic Class for Item
 */ 
function Item(){
	
	this.type = '';
	this.id;
	this.opinions = Array();
	this.setTrustPercent = function(val){
		if(val != null)
		this.trust = val;
		else
		this.trust = 0;
	}
	
	this.setReviewScore = function(val){
		if(val != null)
		this.reviewScore = val;
	}
	
	this.Meta = function (name,category,location,image){
		if(name != null)
		this.name = name;
		else
		this.name = '';
		
		if(category != null)
		this.category = category;
		else
		this.category = '';
		
		if(location != null){
			this.lat = location['lat'];
			this.lon = location['lon'];	
		}
	
		if(image != null)
		this.image = image;
		else
		this.image = this.type+  imgType;
		
	}
	
	
	function MakeOpinion(author,image,rating,opinion){
		
		if(author != null)
		this.author  = author;
		
		if(image != null)
		this.image   = image;
		else
		this.image = 'noImage.jpg';
		
		if(rating != null)
		this.rating  = rating;
		
		if(opinion != null)
		this.opinion = opinion;
		
		return this;
	}
	
	this.setMeta = function(val){
		if(val != null)
		this.Meta(val['name'],val['category'],val['location'],val['image']);
	}
		
	this.setOpinions = function (val,count){
		/* Set Opinions*/
		for(var i = 0 ; i < val.length ; i++){
			this.opinions.push( new MakeOpinion(val[i]['author'],val[i]['image'],val[i]['rating'],val[i]['opinion']));
		}
		console.log(this.opinions);
	}
	
	this.setOpinion = function(val){
		if(val != null){
			this.opinionCount = val['count']; 
			if(val['list'] != null){
				//this.setOpinions(val['list'],this.opinionCount);
				list = val['list']
				this.opinions = Array();
				for(var i = 0 ; i < list.length ; i++){
					this.opinions[i] = new MakeOpinion(list[i]['author'],list[i]['image'],list[i]['rating'],list[i]['opinion']);
				}
			}
		}
	} 
	
	this.print = function(i){
		
		
		header = $('<h2>').html(this.name);
		img = $('<img>').attr('src',this.image).addClass('img');
		img.attr('draggable','false');
		div = $('<div>').addClass('item').attr('itemId',this.id).append(img).append(header);
		if(this.trust > 90){
			div.append($('<div>').addClass('star'));
		}
		
		if(this.lat != null && this.lon != null){
			div.attr('lat',this.lat).attr('lon',this.lon);
			lat = this.lat;
			lon = this.lon
			div.append($('<div>').addClass('map').click(function (e){
				e.stopPropagation();
				fetchMap(lat,lon,this);
			})); //attr('onClick','fetchMap(this)')
		}
		
		if(this.reviewScore != null){
			div.append($('<h3>').html(this.reviewScore));
		}
		
		if(this.opinions.length > 0){
			opinionsDiv = $('<div>').addClass('opinion').css('display','none');
			opinionsDiv.append($('<h1>').html('Reviews').addClass('review'));
			for(o = 0;o < this.opinions.length;o++){
				img = $('<img>');
				img.attr('src',this.opinions[o].image);
				img.attr('width','32px');
				img.css('width','32px');
				if(o > 0)
				opinionsDiv.append($('<hr>'));

				left = $('<div>').append(img).css({'float':'left','width':'32px'});
				right = $('<div>').append($('<h3>').html(this.opinions[o].author)).addClass('author');
				right.append(this.opinions[o].opinion);
				mainDiv = $('<div>').append(left);
				mainDiv.append(right);
				opinionsDiv.append(
					mainDiv
					/*$('<p>').append(
						img
					).append(this.opinions[o].opinion)*/
				);
				
			}
			div.append(opinionsDiv);
		}else{
			div.append($('<div>').addClass('opinion').css('display','none'));
		}
		
		div.click(function (e){
			moveMe(this,true);
			e.stopPropagation();
		});
		
		div.attr('ondragstart','drag(event)');
		div.attr('draggable','true');
		return div;
	}
}


/*
 *  Restaurant
 */
 
Restaurant.prototype = new Item();        // Set prototype to Person's
Restaurant.prototype.constructor = Restaurant;   // Set constructor back to Robot
Software.prototype = new Item();        // Set prototype to Person's
Software.prototype.constructor = Software;   // Set constructor back to Robot
Car.prototype = new Item();        // Set prototype to Person's
Car.prototype.constructor = Car;   // Set constructor back to Robot
function Restaurant(id){
	this.type = 'restaurant';
	this.id = id;
}

function Software(id){
	this.type = 'software';
	this.id = id;
}

function Car(id){
	this.type = 'car';
	this.id = id;
}
/*
 *  Item Factory
 *
 */
 
function createItem(type,id){
	 switch(type){
		 case 'restaurant':return new Restaurant(id);break;
		 case 'software':return new Software(id);break;
		 case 'car':return new Car(id);break;
	 }
}

			

var items = Array();
for(i = 0;i < JString.length;i++){
	x = JString[i]['item-type'];
	tempItem = createItem(x,i);
	
	tempItem.setTrustPercent(JString[i]['trust-percent']);
	tempItem.setReviewScore(JString[i]['review-score']);
	tempItem.setMeta(JString[i]['meta']);
	tempItem.setOpinion(JString[i]['opinions']);
			
	items.push(tempItem);
		
}

var currentDiv;
var prevLeft;
var prevTop;

var prevLeftF;
var prevTopF;
var moving = false;

function init(){
midLeft = $(window).width()*0.35;
midTop = $(window).height()*0.4;
}

init();
//$('<div>').css({'top':'0','left':'0px','background-color':'black','width':'200%','height':'200%','position':'absolute','opacity':'0','z-index':-4}).appendTo('body').attr('id','tempDiv');

function MoveForward(div){
		(function(temp){
		currentDiv = $(temp);
		prevLeft = currentDiv.css('left');
		prevTop = currentDiv.css('top');
		prevLeftF = currentDiv.offset().left;
		prevTopF = currentDiv.offset().top;
		prevWidth = currentDiv.css('width');
		//currentDiv.attr('prevLeft',prevLeft);
		//currentDiv.attr('prevTop',prevTop);
		//currentDiv.attr('prevWidth', prevWidth);
		currentDiv.find('.opinion').hide();
		escapeAction = 'item';
		moving = true;
		currentDiv.css({'z-index':4,position:'fixed',left:currentDiv.offset().left,top:currentDiv.offset().top}).animate({left:midLeft+'px',top:midTop+'px'},300,
		function (){
			(function (temp,prevWidth){	
				temp.find('.opinion').slideDown(300 , function (){
				newWidth = prevWidth.substring(0,prevWidth.length-2);
				temp.animate({width:newWidth*2});
				moving = false;
			});	
				})(currentDiv,prevWidth)
			});
		}(div)
		)
	
}

function moveMe(div,bool){
	if(bool)
		removeMap();
	else{
		if(currentDiv == null){
			return;
		}
	}
	
	if($(div).attr('moving') == 'moving'){
		console.log('no can do');
		return;
	}
	
	if(moving){
		if(currentDiv != null)
			if($(div).attr('itemid') == currentDiv.attr('itemid'))
		return;
	}
	
	if(currentDiv != null){
		
		if($(div).attr('itemid') == currentDiv.attr('itemid')){
		(function (temp,a,b){
			temp.animate({width: temp.attr('prevWidth')+'px'}, function (){
			temp.find('.opinion').slideUp(400
		,function (){
				temp.animate({left : temp.attr('prevLeftF')+'px',top  : temp.attr('prevTopF') +'px','z-index':0}, function (){
					temp.css({position:'absolute','left':temp.attr('prevLeft') +'px','top':temp.attr('prevTop')+'px'});
				});
		}
		)
		});
		})(currentDiv,prevLeftF,prevTopF)
		
			currentDiv = null;
			return;	
		}else{
				(function (temp,a,b){
					temp.animate({left : temp.attr('prevLeftF')+'px',top  : temp.attr('prevTopF')+'px',width: temp.attr('prevWidth')+'px'},400, function (){
						temp.find('.opinion').slideUp(400,function (){
						//temp.animate({}, function (){
							temp.css({position:'absolute','left':temp.attr('prevLeft')+'px','top':temp.attr('prevTop')+'px','z-index':0});
						//});
						})
					});
				})(currentDiv,currentDiv.attr('prevleft'),currentDiv.attr('prevTop'))
		}
		
		
	}
		MoveForward(div);
	
}
delete i;
delete x;
delete tempItem;
delete JString;


for(a = 0 ; a < items.length;a++){
	tempItem = items[a].print(a);
	$('#bucket').append(tempItem);
}

var escapeAction;
function fetchMap(lat,lon,src){
	moveMe(currentDiv,false);
	escapeAction = 'map';
	src = $(src);
	//src.hide();
	//var lat=src.attr("lat");
	//var lon=src.attr("lon");
	
	
	var coords = lat + ',' + lon;
	console.log(lat);
	src.css({'border-style':'solid','background-color':'green'});
	var img_url = 'http://maps.google.co.uk?q='+ coords+ '&zoom=60&output=embed';
	var iframe = $('<iframe>').css({width:'600px','height':'480px'}).attr('src',img_url);
	loadingImg = $('<img>').attr('src','map.png');
	loadingImg.attr('id','loadingImg');
	$('body').append(loadingImg);
	$('#mapholder').html(iframe);
	iframe.load(function(e) {
		loadingImg.fadeOut();
		$('#mapholder').fadeIn(500,function (){
			$('#mapholder').animate({left:'30%',top:'30%'});
		});
		$('#mapholder').css('z-index',100);
		
    });
}


function removeMap(){
		$('#loadingImg').remove();
		$('#mapholder').animate({left:'-15%',top:'30%'},function (){
				$('#mapholder').fadeOut(500);
				$('#mapholder').css('z-index',1);
		});
		
		
}
function escape(){
	switch(escapeAction){
		case 'item':moveMe(currentDiv);break;
		case 'map':removeMap();break;
	}
	
	
}

function moveHelper(id){
	msg = "div[itemid='" + id + "']";
	moveMe($(msg),true);
}
function AdjustFixedPos(){
	$('#favourites').find('.img').remove();
	if(localStorage.getItem('fav') != null){
		fav = JSON.parse(localStorage.fav);
		for(i=0;i<fav.length;i++){
			id = fav[i];
			name = "div[itemid='" + id + "']";
			name = "$(\"" + name + ")\")";
			src = $("div[itemid='" + id + "']");
			
			(function (tempId){
			src.find('.img').clone().attr('itemid',id).click(function (ev){
				//moveMe(src,true);
				moveHelper(tempId);
				ev.stopPropagation();
			//ev.stopPropagation();
			
			})
			.bind('drop',function (e){
				e.preventDefault;
				e.stopPropagation;
			}).appendTo($('#favourites'));
			}(id))
		}
		
	}
	$("div.item").each(function(index, element) {
        $(this).attr('prevLeftF',$(this).offset().left);
		$(this).attr('prevTopF',$(this).offset().top);
		$(this).attr('prevLeft',$(this).css('left').replace('px',''));
		$(this).attr('prevTop',$(this).css('top').replace('px',''));
		$(this).attr('prevWidth',$(this).css('width').replace('px',''));
    });
}
document.onkeydown=function(e){
				switch(e.which){
					case 27:escape();
				}
			}

var dragged = false;
function drag(e){
	dragged = true;
	$('#favourites,#drop').addClass('drag');
	var dragIcon = document.createElement('img');
	dragIcon.src = 'map.png';//$(div).find('.img').attr('src')
	dragIcon.width = 100;
	e.dataTransfer.setDragImage(dragIcon, -10, -10);
	e.dataTransfer.setData("id",e.target.getAttribute('itemid'));
}

//document.getElementById('favourites').addEventListener('drop', drop, false);
function drop(e){
	if(localStorage.getItem('fav') == null){
		var fav = [];
	}else{
		fav = JSON.parse(localStorage.fav);
	}
	
	
	dragged = false;
	id  = "div[itemid='" + e.dataTransfer.getData('id') + "']";
	fav[fav.length] = e.dataTransfer.getData('id');
	src = $(id);//.css('background-color','blue');
	//$(e.target).append();
	src.find('.img').clone().attr('itemid',e.dataTransfer.getData('id')).click(function (ev){
			moveMe(src,true);
			ev.stopPropagation();
		}).bind('drop',function (e){
			console.log('hi Image');
			e.preventDefault;
			e.stopPropagation;
		}).appendTo($('#favourites'));
	
	localStorage.fav = JSON.stringify(fav);
}

function allowDrop(e){	
	e.preventDefault();
}

function dragLeave(e){
	if(!dragged)
		$('#favourites,#drop').removeClass('drag');	
}

function trackBack(e){
	if(e.target.id != 'drop'){
		$('#favourites,#drop').removeClass('drag');	
	}
}