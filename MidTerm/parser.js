/**
 * Some JSON elements and attributes might not be present. So,
 * Make sure you do sanity checks before you go ahead and display
 * The data.
 *
 * Your code will be tested using manipulated JSON objects!
 */



/*
 *  Meta Class
 */
 
function Meta(name,category,lat,lon,image){
	this.name = name;
	this.category = category;
	this.lat = lat;
	this.lon = lon;
	this.image = image;
}


/*
 * Opinion Class
 */
 
function opinion(author,image,rating,opinion){
	this.author  = author;
	this.image   = image;
	this.rating  = rating;
	this.opinion = opinion;
}
/*
 * Generic Class for Item
 */ 
function Item(){
	this.setTrustPercent = function(trust){
		this.trust = trust;
	}
	
	this.setReviewScore = function(reviewScore){
		this.reviewScore = reviewScore;
	}
	
	this.setMeta = function(meta){
		this.meta = meta;
	}
	
	this.setOpinions = function(value){
        this.opinions = value;
	} 
	
	this.opinions = Array();
}


/*
 *  Restaurant
 */
 
Restaurant.prototype = new Item();        // Set prototype to Person's
Restaurant.prototype.constructor = Restaurant;   // Set constructor back to Robot

function Restaurant(){
	
	this.type = 'restaurant';
	
}

/*
 *  Item Factory
 *
 */
 
function createItem(type){
	 switch(type){
		 case 'restaurant':return new Restaurant();break;
		 case 'software':break;
		 case 'car':break;
	 }
}

var JString = [{
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
			

var restaurant;
for(var i = 0;i < 1;i++){
	var x = JString[i]['item-type'];
	restaurant = createItem(x);
	
	
	if((trustPercent = JString[i]['trust-percent']) != null)
		restaurant.setTrustPercent(trustPercent);
	
	if((reviewScore = JString[i]['review-score']) != null)
		restaurant.setReviewScore(reviewScore);
		
}



