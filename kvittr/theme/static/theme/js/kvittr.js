$(document).ready(function(){

    $(".pip_add_likes").click(function(event) {
        event.preventDefault();
        var pip_id = $(this).data("pip_id");
        var pip_add_likes = "#id-points-for-pip-" + pip_id;
        $.ajax({
            url: '/pips_messages/pip_add_likes/' + pip_id
        })
        .done(function(data){
            console.log("done");
            var likes_updated = data['likes_updated'];
            console.log(data);
            $(pip_add_likes).html('likes_updated');
           
        });
    });
});