
animateValue = 3000; // 1000
	function structureElements(animate){
		init();
		totalWidth = $(window).width();
		width = Math.round((totalWidth*0.8)/5);
		width -= 10;
		delete itemPos;
		delete row;
		delete col;
		row = 0;
		col = 0;
		itemPos = Array();
			currentLeft = 0;
			currentTop = 10
			//width = 500;
			tempItem = items[0].print(0);
			img = tempItem.find('img');
			imgVal = new Image();
			imgVal.src = img.attr('src');	
			currentWidth = width;
			imgWidth = imgVal.width;
			imgHeight = imgVal.height;
			if(imgWidth > (width-10)){
				img.width(width-10);
			}else{
				currentWidth = imgWidth;
			}
			
			$('#content').html('');
			
			if(animate){
				tempItem.css({
				   left : '35%',
				   top :  '30%',
				   width: currentWidth+'px',
				   opacity:'0',
				})
				$('#content').append(tempItem);
				tempItem.animate({left:currentLeft+'px',top:currentTop+'px',opacity:1},animateValue);
			}else{
				tempItem.css({
			   		left : currentLeft+'px',
			   		top :  currentTop +'px',
			   		width: currentWidth+'px'
				});
				tempItem.attr('prevLeft',currentLeft);
				tempItem.attr('prevTop',currentTop);
				tempItem.attr('prevWidth', currentWidth);
				$('#content').append(tempItem);
			}
			/*tempItem.animate({opacity:1},500).css({
			   left : currentLeft+'px',
			   top :  currentTop +'px',
			   width: currentWidth+'px'
			});
			tempItem.css({
			   left : currentLeft+'px',
			   top :  currentTop +'px',
			   width: currentWidth+'px'
			});*/
			
			itemPos.push(Array());
			itemPos[row][col++] = {left:currentLeft,width:currentWidth,height:tempItem.height(),top:currentTop};
			currentLeft += currentWidth+10;
			
			for(i = 1;i<items.length;i++){
				tempItem = items[i].print(i);
				img = tempItem.find('img');
				imgVal = new Image();
				imgVal.src = img.attr('src');	
				currentWidth = width;
				imgWidth = imgVal.width;
				imgHeight = imgVal.height;
				if(imgWidth > (width-10)){
					img.width(width-10);
				}else{
					currentWidth = imgWidth;
				}

				
				if( (currentLeft + currentWidth) > (totalWidth * 0.8) ){
					row++;
					itemPos.push(Array());
					col = 0;
					currentLeft = 0;
				}else{
					if(itemPos[row].length >= 5){
						row++;
						itemPos.push(Array());
						col = 0;
						currentLeft = 0;
					}
				}
				
				if(row > 0 ){
					tempCol = col;
					check = true;
					while(check){
						currentItem = itemPos[row-1][tempCol];
						if(currentItem == null){
							tempCol--;
							continue;
						}
						upTop = currentItem.top;
						upHeight = currentItem.height;
						upLeft = currentItem.left;
						upWidth = currentItem.width;
						maxTop = upTop+upHeight+10;
						if(currentLeft >= upLeft){
							if((currentLeft+currentWidth) <= (upLeft + upWidth)){
								currentTop = upTop + upHeight + 10
								check = false;
								/* Lies within the item above it*/
							}else{
								console.log(tempCol+1 + 'RowMax '+ itemPos[row-1].length);
								tempCheck = true;
								for(j=tempCol+1;j<itemPos[row-1].length;j++){
									currentItem = itemPos[row-1][j];
									if(currentItem == null){
										console.log("115- " + i);
										currentTop = maxTop;
										check = false;
										break;
									}
									upTop = currentItem.top;
									upHeight = currentItem.height;
									upLeft = currentItem.left;
									upWidth = currentItem.width;
									tmpWidth = currentLeft + currentWidth;
									newWidth = upLeft + upWidth;
									console.log(tmpWidth + ' - ' + newWidth);
									if((currentLeft+currentWidth) <= (upLeft + upWidth)){

										currentTop = Math.max(maxTop,upTop + upHeight + 10);
										check = false;
										tempCheck = false;
										break;
										/* Lies within the item above it*/
									}
								}
								if(tempCheck){
									currentTop = maxTop;
									check = false;
								}
								
							}
						}else{
							tempCol--;
							/* Repeat with previous Col*/
						}
					}
					
				}
				
				if(animate){
					tempItem.css({
					   left : '35%',
					   top :  '30%',
					   width: currentWidth+'px',
					   opacity:'0',
					})
					$('#content').append(tempItem);
					(function (tempT,leftT,topT,widthT){
						window.setTimeout(function (){
							doSomeBlaBla(tempT,leftT,topT,widthT)
						},i * 500);
					})(tempItem,currentLeft,currentTop,currentWidth);
				}else{
					tempItem.css({
					   left : currentLeft+'px',
					   top  : currentTop+'px',
					   width: currentWidth+'px'
					});
					$('#content').append(tempItem);
				}
				
				
				//tempItem.animate({opacity:1, left : currentLeft+'px',top  : currentTop+'px',width: currentWidth+'px'},3000);
				itemPos[row][col++] = {left:currentLeft,width:currentWidth,height:tempItem.height(),top:currentTop};
				currentLeft += currentWidth + 10;
				
			}
			
			AdjustFixedPos();
			delete itemPos;
			delete tempItem;
			delete imgVal;
			
	}
	function doSomeBlaBla(temp,leftT,topT,widthT){
		temp.animate({opacity:1, left : leftT+'px',top  : topT+'px',width: widthT+'px'},animateValue);
	}
	window.onload = function(){
			totalWidth = $(window).width();
			baseLeft = totalWidth * 0.8 *0.35;
			baseTop = $('#content').height() * 0.8 * 0.3;
			setTimeout(function (){
				structureElements(true)
			},50);
	};