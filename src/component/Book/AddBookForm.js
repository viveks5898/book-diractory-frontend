import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import {  useDispatch } from "react-redux";
import { createBook } from "../../feature/Feature.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const AddBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const AddHandler = () => {
    if (!(title && author && price)) {
      toast("All input is required !");
    } else {
      dispatch(
        createBook({
          name: title,
          author: author,
          price: price,
        })
      );

      setTitle("");
      setAuthor("");
      setPrice("");

      toast("Book created !");
    }
  };
  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col>
          <Alert variant="info">Add Book Details</Alert>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={author}
                placeholder="Enter Author Name"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                value={price}
                type="number"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() => AddHandler()}
              style={{ marginTop: "10px" }}
            >
              Add
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};
