var self_id = "1";

// $(document).ready(function() {
//     var height = 80 + 54;

//     console.log("1");

//     var win_height = $(window).height();

//     $(".chat-view").css("min-height", (win_height - height) + "px");
//     console.log("2");
// });


Template.ChatPageLayout.helpers({
    data: function() {
        var data = [{
            "user_id": "1",
            "msg": "Some message",
            "msg_time": "12/12/15"
        }, {
            "user_id": "2",
            "msg": "Some message",
            "msg_time": "12/12/15"
        }, {
            "user_id": "1",
            "msg": "Some message",
            "msg_time": "12/12/15"
        }, {
            "user_id": "2",
            "msg": "Some message",
            "msg_time": "12/12/15"
        }, {
            "user_id": "2",
            "msg": "Some message",
            "msg_time": "12/12/15"
        }, {
            "user_id": "1",
            "msg": "Some message",
            "msg_time": "12/12/15"
        }];

        data.forEach(function(elem) {
            if (elem.user_id === self_id) {
                elem.left = true;
            } else {
                elem.left = false;
            }
        });

        return data;
    }
});

Template.ChatPageLayout.events({

});

Template.ChatPageLayout.onCreated(function() {});

Template.ChatPageLayout.onRendered(function() {
    var height = 80 + 54;

    $(".chat-view").css("max-height", ($(window).height() - height) + "px");
});

Template.ChatPageLayout.onDestroyed(function() {});
