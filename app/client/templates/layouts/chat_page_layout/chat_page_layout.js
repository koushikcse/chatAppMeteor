var self_id = "1";

Template.ChatPageLayout.helpers({
    /*"data": [{
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
    }],*/
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

Template.ChatPageLayout.onRendered(function() {});

Template.ChatPageLayout.onDestroyed(function() {});
