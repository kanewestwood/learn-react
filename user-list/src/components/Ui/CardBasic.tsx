import React, { PropsWithChildren } from "react";
import { Card } from "react-bootstrap";

/**
 * Card Basic Component
 *
 * @param {PropsWithChildren} props properties
 * @class
 */
const CardBasic = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <Card className={props.className}>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};

export default CardBasic;
