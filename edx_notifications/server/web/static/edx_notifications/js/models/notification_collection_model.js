var UserNotificationCollection = Backbone.Collection.extend({
    /* model for a collection of UserNotifications */
    model: UserNotificationModel,

    /* REST API endpoint to use to get authenticated user's notification count */
    url: "/api/edx_notifications/v1/consumer/notifications"

});
