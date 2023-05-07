import React, { useEffect } from 'react'
import { Container, Row, Col , Button, Card} from 'react-bootstrap'
import {  useDispatch , useSelector } from 'react-redux'
import { getBooks } from '../../feature/getBook.slice'
const ShowBook = () => {
  const state = useSelector((state) => state.getBooks.data)
  console.log(state)
      const dispatch = useDispatch() 
    useEffect(()=>{
 dispatch(getBooks())
  
     },[])
  return (
   <Container>
    <Row>
{state.map((ele, key) =>

        <Col  style={{marginTop:"20px"}}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/cover.jpg" />
      <Card.Body>
        <Card.Title>{ele.author}</Card.Title>
        <Card.Text>
          {ele.name}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>        
        </Col> 
)}

    </Row>
   </Container>
  )
}

export default ShowBook