import React from 'react'

import { StyledDataListElement as Element} from './../ListElement/StyledListElement'

const Loadmore = ({load}) => {
  return(
    <Element onClick={load}>
      Load more...
    </Element>
  )
}

export default Loadmore