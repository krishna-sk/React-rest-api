import React from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { useState } from "react";

export const MyCard = (props) => {
  const [open, setOpen] = useState(false);
  const { id, title, body } = props.content;

  return (
    <div className="col-md-4 mt-3">
      <Card>
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text>{title.substring(1,50)}</Card.Text>
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="collapse-text"
              aria-expanded={open}
              variant={!open ? "primary" : "danger"}
            >
              {!open && <>Open</>}
              {open && <>Close</>}
            </Button>
          </div>
          <Collapse in={open}>
            <div id="collapse-text" className="mt-2">
              {body}
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  );
};
