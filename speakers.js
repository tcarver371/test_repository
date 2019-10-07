$(document).ready(function() {
	$("a").click(function(e){
        e.preventDefault();
        let id = $(this).attr("title");
        if(id == "toobin"){
            $.getJSON("json_files/toobin.json", function(data){
                console.log(data);
            })
        }
        if(id == "sorkin"){
            $.getJSON("json_files/sorkin.json", function(data){
                console.log(data);
            })
        }
        if(id == "chua"){
            $.getJSON("json_files/chua.json", function(data){
                console.log(data);
            })
        }
        if(id == "sampson"){
            $.getJSON("json_files/sampson.json", function(data){
                console.log(data);
            })
        }
    });

    
}); // end ready