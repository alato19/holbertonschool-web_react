import React from 'react';


function NotificationItem({ type, html, value }) {
    let list;

    if (value) {
        list = <li data-notification-type={type}>{value}</li>
    } else {
        list = (
            <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}></li>
        )
    }
    return list;
};

export default NotificationItem;