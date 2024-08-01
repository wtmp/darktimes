import React, { useEffect } from 'react';
import { useTelegramWebApp } from 'telegram-web-app';

const TelegramComponent = () => {
    const { tg } = useTelegramWebApp();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    const onClose = () => {
        tg.close();
    };

    const onToggleTheme = () => {
        if (tg.themeParams.mode === 'dark') {
            tg.setThemeParams({ mode: 'light' });
        } else {
            tg.setThemeParams({ mode: 'dark' });
        }
    };

    return (
        <div>
            <h1>Telegram Web App Integration</h1>
            <button onClick={onClose}>Close</button>
            <button onClick={onToggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default TelegramComponent;