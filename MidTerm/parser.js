/**
 * Some JSON elements and attributes might not be present. So,
 * Make sure you do sanity checks before you go ahead and display
 * The data.
 *
 * Your code will be tested using manipulated JSON objects!
 */

JString = [{
					"item-type":"restaurant",
					 "trust-percent":"30",
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
			];



/*
 * Opinion Class
 */
 
function opinion(author,image,rating,opinion){
	if(author != null)
	this.author  = author;
	
	if(image != null)
	this.image   = image;
	
	if(rating != null)
	this.rating  = rating;
	
	if(opinion != null)
	this.opinion = opinion;
}
/*
 * Generic Class for Item
 */ 
function Item(){
	
	this.type = '';
	this.opinions = Array();
	
	this.setTrustPercent = function(val){
		if(val != null)
		this.trust = val;
	}
	
	this.setReviewScore = function(val){
		if(val != null)
		this.reviewScore = val;
	}
	
	this.Meta = function (name,category,location,image){
		if(name != null)
		this.name = name;
		
		if(category != null)
		this.category = category;
		
		if(location != null){
			this.lat = location['lat'];
			this.lon = location['lon'];	
		}
	
		if(image != null)
		this.image = image;
		
	}
	
	this.setMeta = function(val){
		if(val != null)
		this.Meta(val['name'],val['category'],val['location'],val['image']);
	}
		
	this.setOpinions = function (val,count){
		/* Set Opinions*/
		for(var i = 0 ; i < val.length ; i++)
		this.opinions.push(new opinion(val[i]['author'],val[i]['image'],val[i]['rating'],val[i]['opinion']));
	}
	
	this.setOpinion = function(val){
		if(val != null){
			this.opinionCount = val['count']; 
			if(val['list'] != null)
				this.setOpinions(val['list'],this.opinionCount);
		}
	} 
	
	this.print = function(){
		
		
		header = $('<h2>').html(this.name);
		img = $('<img>').attr('src',this.image);
		div = $('<div>').append(header).append(img);
		
		/*div = document.createElement("div");
		content = document.createElement("h1");
		content.innerHTML  = this.type;
		console.log(content.innerHTML );
		div.appendChild(content);*/
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
function Restaurant(){
	
	this.type = 'restaurant';
	
}

function Software(){
	this.type = 'software';
}

function Car(){
	this.type = 'car';
}
/*
 *  Item Factory
 *
 */
 
function createItem(type){
	 switch(type){
		 case 'restaurant':return new Restaurant();break;
		 case 'software':return new Software();break;
		 case 'car':return new Car();break;
	 }
}

			

var items = Array();
for(i = 0;i < JString.length;i++){
	x = JString[i]['item-type'];
	tempItem = createItem(x);
	
	tempItem.setTrustPercent(JString[i]['trust-percent']);
	tempItem.setReviewScore(JString[i]['review-score']);
	tempItem.setMeta(JString[i]['meta']);
	tempItem.setOpinion(JString[i]['opinions']);
			
	items.push(tempItem);
		
}

delete i;
delete x;
delete tempItem;
delete JString;


