import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'


const LeftArrow = ()=>{
    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className='left-arrow'>
            <img src={LeftArrowIcon} alt='left-arrow' />
        </Typography>
    );
}

const RightArrow = ()=>{
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className='left-arrow'>
            <img src={RightArrowIcon} alt='right-arrow' />
        </Typography>
    );
}

// trebuie un style={{display: "flex"}} pe "<div class="react-horizontal-scrolling-menu--scroll-container " nu stiu care e containerul

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu  LeftArrow={LeftArrow} RightArrow={RightArrow}  >
      {data.map((item) => (
        <Box 
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          { <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />  }
        </Box>
      ))}
    </ScrollMenu>
  );

export default HorizontalScrollbar