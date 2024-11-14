import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
      {children}
    </div>
  );
};
