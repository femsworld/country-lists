import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Pagination({ datacount, setcurrent, currentpage, numofpages }) {

const [pages, setPages] = useState(numofpages);

const renderPageNumbers = () => {
let visiblePages = [];
const upperLimit = currentpage + 5 <= pages ? currentpage + 5 : pages
const lowerLimit = currentpage - 5 >= 1 ? currentpage - 5 : 1
for (let i = lowerLimit; i <= upperLimit; i++) {
visiblePages.push(
<span key={i} style={{ marginLeft: "2px", marginRight: "2px" }}>
{i === currentpage ? (
<Button variant="outline-secondary" disabled>
{i}
</Button>
) : (
<Button
variant="outline-secondary"
style={{ cursor: "pointer" }}
onClick={() => setcurrent(i)}
>
{i}
</Button>
)}
</span>
);
}
return visiblePages;
};

const renderPrevButton = () => {
return (
<>
{currentpage > 1 ? (
<Button
variant="outline-secondary"
style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
onClick={() => setcurrent(currentpage - 1)}
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
};

const renderNextButton = () => {
return (
<>
{currentpage < pages ? (
<Button
variant="outline-secondary"
style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
onClick={() => setcurrent(currentpage + 1)}
>
<i className="fa fa-angle-right"></i>
</Button>
) : (
<Button variant="outline-secondary" style={{ marginLeft: "2px", marginRight: "2px" }} disabled>
<i className="fa fa-angle-right"></i>
</Button>
)}
</>
);
};

const renderFirstButton = () => {
return (
<>
{currentpage > 1 ? (
<Button
variant="outline-secondary"
style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
onClick={() => setcurrent(1)}
>
<i className="fa fa-angle-double-left"></i>
</Button>
) : (
<Button variant="outline-secondary" style={{ marginLeft: "2px", marginRight: "2px" }} disabled>
<i className="fa fa-angle-double-left"></i>
</Button>
)}
</>
);
};
const renderLastButton = () => {
return (
<>
{currentpage < pages ? (
<Button
variant="outline-secondary"
style={{ cursor: "pointer", marginLeft: "2px", marginRight: "2px" }}
onClick={() => setcurrent(pages)}
>
<i className="fa fa-angle-double-right"></i>
</Button>
) : (
<Button variant="outline-secondary" style={{ marginLeft: "2px", marginRight: "2px" }} disabled>
<i className="fa fa-angle-double-right"></i>
</Button>
)}
</>
);
};

useEffect(() => {
setPages(numofpages)
}, [datacount, numofpages]);

return (
<Stack direction="horizontal">
<div className="ms-auto">{renderFirstButton()}</div>
<div>{renderPrevButton()}</div>
<div>{renderPageNumbers()}</div>
<div>{renderNextButton()}</div>
<div>{renderLastButton()}</div>
</Stack>
);
}

export default Pagination;