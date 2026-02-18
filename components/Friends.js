window.FriendsComponent = function Friends() {
    return (
        <div className="tab-content" style={{ padding: '20px' }}>
            <h2 style={{ color: '#1976d2' }}>👥 Мои друзья</h2>
            <div className="friend-card" style={{ 
                background: 'white', 
                padding: '15px', 
                borderRadius: '15px', 
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
            }}>
                <div style={{ width: 50, height: 50, background: '#e3f2fd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1976d2', fontWeight: 'bold' }}>
                    ?
                </div>
                <div>
                    <div style={{ fontWeight: 'bold' }}>Твой первый друг</div>
                    <div style={{ fontSize: '0.8rem', color: '#888' }}>Пока здесь никого нет...</div>
                </div>
            </div>
            
            <p style={{ textAlign: 'center', color: '#999', marginTop: '30px', fontSize: '0.9rem' }}>
                Совет: Перейди в профиль, чтобы скопировать ссылку и пригласить друзей!
            </p>
        </div>
    );
};