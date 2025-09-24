import React from 'react';
import './Notification.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/util';
import NotificationItem from './NotificationItem';

function Notification() {
    return (
        <div className='Notifications'>
            <button style={{
                background: 'transparent',
                position: 'absolute',
                right: 20,
                border: 'none'
            }} aria-label='Close' onClick={console.log('Close button has been clicked')}><img src={closeIcon} alt='Close icon'/></button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type='urgent' html={ getLatestNotification() } />
            </ul>
        </div>
    )
}

export default Notification;