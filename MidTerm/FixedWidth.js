function structureElements(){
		totalWidth = $(window).width();
		init();
		
		noOfitems = (totalWidth*0.8)/(226*0.8)
		//width = (totalWidth*0.8)/3;
		width = 226*0.8;
		width -= 10;
		delete itemPos;
		delete row;
		delete col;
		if(totalWidth < 300){
			noOfitem = 1;
			width = 226*0.8;
			width -= 10;
		}else{
			noOfitems = 3;
			width = (totalWidth*0.8)/3;
			width -= 10;
		}  // 3 items per page
		row = 0;
		col = 0;
		itemPos = Array();
			currentLeft = 0;
			currentTop = 10
			//width = 500;
			tempItem = items[0].print(0);
			img = tempItem.find('img');
			currentWidth = width;
			img.width(width);
			
			tempItem.css({
			   left : currentLeft+'px',
			   top :  currentTop +'px',
			   width: currentWidth+'px'
			});
			$('#content').html(tempItem);
			itemPos.push(Array());
			itemPos[row][col++] = {left:currentLeft,width:currentWidth,height:tempItem.height(),top:currentTop};
			currentLeft += currentWidth+10;
			
			for(i = 1;i<items.length;i++){
				tempItem = items[i].print(i);
				img = tempItem.find('img');
				currentWidth = width;
				img.width(width);
				
				if( (currentLeft + currentWidth) > (totalWidth * 0.8) ){
					row++;
					itemPos.push(Array());
					col = 0;
					currentLeft = 0;
				}else{
					if(itemPos[row].length >= noOfitems){
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
				tempItem.css({
				   left : currentLeft+'px',
				   top  : currentTop+'px',
				   width: currentWidth+'px'
				});
				tempItem.attr('prevLeft',currentLeft);
				tempItem.attr('prevTop',currentTop);
				tempItem.attr('prevWidth', currentWidth);	
				$('#content').append(tempItem);
				itemPos[row][col++] = {left:currentLeft,width:currentWidth,height:tempItem.height(),top:currentTop};
				currentLeft += currentWidth + 10;
				
			}
			
			AdjustFixedPos();
	}
	window.onload = function(){
			console.log("hello");
			totalWidth = $(window).width();
			baseLeft = totalWidth * 0.8 *0.35;
			baseTop = $('#content').height() * 0.8 * 0.3;
			setTimeout(function (){
				structureElements()
			},50);
	};