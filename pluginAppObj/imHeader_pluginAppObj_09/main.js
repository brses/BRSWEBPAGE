function socialicons_imHeader_pluginAppObj_09(){function resizeSocials_imHeader_pluginAppObj_09(){var buttonPerRow,fact;$("#imHeader_pluginAppObj_09 .social-icon").removeClass("last-item-row");$("#imHeader_pluginAppObj_09 .social-icon").removeClass("last-row");$("#imHeader_pluginAppObj_09 .social-icon").removeClass("one-row");containerWidth=$("#imHeader_pluginAppObj_09").width();buttonPerRow=1;!0&&(buttonPerRow=getButtonPerRow());buttonPerRow==1?$("#imHeader_pluginAppObj_09 .social-icon:last-child").addClass("last-row"):numBtn==buttonPerRow?($("#imHeader_pluginAppObj_09 .social-icon").addClass("last-row"),$("#imHeader_pluginAppObj_09 .social-icon:last-child").addClass("last-item-row")):($("#imHeader_pluginAppObj_09 .social-icon:nth-child("+buttonPerRow+"n)").addClass("last-item-row"),$("#imHeader_pluginAppObj_09 .social-icon:nth-child(n+"+parseInt(buttonPerRow+1)+")").addClass("last-row"));fact=containerWidth<btnWidth?containerWidth/btnWidth:1;$("#imHeader_pluginAppObj_09 .social-icon, #imHeader_pluginAppObj_09 .sides-container").css({width:btnWidth*fact,height:btnHeight*fact})}function getButtonPerRow(){for(var remaining=containerWidth-btnWidth,count=1;remaining>=btnWidth+(count==numBtn-1?0:btnMargin);){if(count++,count==numBtn)break;remaining-=btnWidth+btnMargin}return count}var containerWidth,btnWidth,btnHeight,btnMargin,numBtn;x5engine.boot.push(function(){btnWidth=35;btnHeight=35;btnMargin=5;numBtn=$("#imHeader_pluginAppObj_09 .social-icon").length;$("#imContent").on("breakpointChangedOrFluid",function(){resizeSocials_imHeader_pluginAppObj_09()});resizeSocials_imHeader_pluginAppObj_09()})}