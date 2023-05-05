import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import getBookSlice from '../../feature/getBook.slice'
import { useSelector, useDispatch } from 'react-redux'
const ShowBook = () => {
  // const state = useSelector((state) => state)
      const dispatch = useDispatch() 
    useEffect(()=>{
 dispatch(getBookSlice())
     },[])
  return (
   <Container>
    <Row>

        <Col>
        slknknfk
        
        </Col>
    </Row>
   </Container>
  )
}

export default ShowBook