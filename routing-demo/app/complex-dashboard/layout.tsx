const layout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode
}) => {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div> {/* Content from page.tsx */}
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default layout;