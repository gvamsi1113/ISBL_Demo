import React from 'react';

const Header = ({ title }) => (
  <div className="">
    <p className="p-5 text-xl font-extrabold underline text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;