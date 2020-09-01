import React from 'react';

function Layout(props) {
  const children = props;
  return (
    <>
      <main>
        <div>{children.children}</div>
      </main>
    </>
  );
}

export default Layout;
