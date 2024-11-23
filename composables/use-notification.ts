import {notification, type NotificationPlacement} from "ant-design-vue";

interface Notification {
    title: string;
    placement?: NotificationPlacement;
    description: string;
    status: 'info' | 'open' | 'warn' | 'success' | 'error';
}

export function useNotification() {
    const openNotification = ({
      title,
      placement = 'topRight',
      description,
      status
    } : Notification) => {
        notification[status]({
            message: title,
            placement,
            description
        });
    };

    return {
        openNotification
    }
}