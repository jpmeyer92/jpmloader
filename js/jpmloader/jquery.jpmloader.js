(function ($)
{
	$.loader=function(options)
	{
		var settings=$.extend(
		{
			action:"show",
			backgroundColor:"rgba(64, 64, 64, 0.5)",
			textColor:"rgba(255, 255, 255, 1)",
			text:"Loading",
			animation:"none",
		}, options);
		
		if (settings.action=="hide")
		{
			$("#gotloader_container").fadeOut(function()
			{
				$("#gotloader_container").remove();
			});
			
			return true;
		}
		
		if ($("#gotloader_container").length==0)
		{
			var html="<div id='gotloader_container' class='gotloader_container' style='display:none'>";
				html+="<div id='gotloader_contents'>";
					html+="<div id='gotloader_text'>";
					html+="</div>";
					html+="<div id='gotloader_image'>";
					html+="</div";
				html+="</div>";
			html+="</div>";
			
			$("body").append(html);
			$("#gotloader_container").fadeIn();
		}
		
		//positioning
		$("#gotloader_container").css("display", "table");
		$("#gotloader_container").css("position", "absolute");
		$("#gotloader_container").css("top", "0px");
		$("#gotloader_container").css("left", "0px");
		$("#gotloader_container").css("width", "100%");
		$("#gotloader_container").css("height", "100%");
		$("#gotloader_contents").css("display", "table-cell");
		$("#gotloader_contents").css("vertical-align", "middle");
		$("#gotloader_contents").css("text-align", "center");
		
		
		$("#gotloader_text").html(settings.text);
		$("#gotloader_container").css("background-color", settings.backgroundColor);
		$("#gotloader_text").css("color", settings.textColor);
	};
	
}(jQuery));
