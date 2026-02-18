window.ProfileComponent = function Profile({ user }) {
    const copyMyLink = () => {
        navigator.clipboard.writeText(window.location.origin);
        alert("Ссылка скопирована! Отправь её другу 🚀");
    };

    return (
        <div className="profile-card">
            <div className="profile-avatar-circle">
                {user.displayName ? user.displayName[0] : (user.email ? user.email[0].toUpperCase() : 'U')}
            </div>

            <h2 className="profile-name">{user.displayName || 'Пользователь'}</h2>
            <p className="profile-email">{user.email}</p>

            <button className="profile-btn btn-share" onClick={copyMyLink}>
                🔗 Поделиться ссылкой
            </button>

            <button className="profile-btn btn-logout" onClick={() => window.signOut(window.auth)}>
                Выйти из аккаунта
            </button>
        </div>
    );
};