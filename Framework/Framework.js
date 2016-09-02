$(document).ready(function(){
   $("#realcontent").load("zuk/bbs/bbs.html");
   $(".title-2 li a").each(function(index){
       $(this).click(function(){
	        $(".title-2 li a.first").removeClass("first");
			$(this).addClass("first");
	      if(index==0){
		     $("#realcontent").load("zuk/homepage/homepage.html"); 
		  }else if(index==1){
		  
		     $("#realcontent").load("zuk/bbs/bbs.html");
		  }else if(index==2){
		     $("#realcontent").load("zuk/exchangecenter/exchangecenter.html");
		  } 
	   })
   });
});


