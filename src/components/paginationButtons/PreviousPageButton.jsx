import React from 'react'
import Button from 'react-bootstrap/Button';

const renderPrevButton = ({onClick, currentPage}) => {
    return (
      <>
        {currentPage > 1 ? (
          <Button
              variant="outline-secondary"
              style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
              onClick={() => onClick(currentPage - 1)}
          >
              <i className="fa fa-angle-left"></i>
          </Button>
        ) : (
          <Button variant="outline-secondary" style={{ marginLeft: "2px", marginRight: "2px" }} disabled>
              <i className="fa fa-angle-left"></i>
          </Button>
        )}
      </>
    );
}
export default renderPrevButton;