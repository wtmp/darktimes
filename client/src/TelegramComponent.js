import React, { useEffect } from 'react';

const TelegramComponent = () => {
    useEffect(() => {
        // Проверяем, что Telegram Web App объект доступен
        if (window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.ready(); // Сообщаем Telegram, что приложение готово к использованию

            console.log('Telegram WebApp Data:', tg.initDataUnsafe);
        }
    }, []);

    const onClose = () => {
        if (window.Telegram.WebApp) {
            window.Telegram.WebApp.close();
        }
    };

    const onToggleTheme = () => {
        if (window.Telegram.WebApp) {
            const tg = window.Telegram.WebApp;
            tg.MainButton.setParams({
                text: 'Change Theme',
                color: tg.themeParams.mode === 'dark' ? '#FFFFFF' : '#000000'
            });
            tg.themeParams.mode = tg.themeParams.mode === 'dark' ? 'light' : 'dark';
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