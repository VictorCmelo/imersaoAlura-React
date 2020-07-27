import React from 'react'

function ButtonLink({title, clasName, destino}) {
  return (
    <a className={clasName} href={destino}>
      {title}
    </a>

  );
}
export default ButtonLink;
