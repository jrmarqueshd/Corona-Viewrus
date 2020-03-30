import React from "react";

import ReactPaginate from "react-paginate";

import { Container } from "./style";

export default function Pagination({
  totalPages,
  maxItemPerPage,
  handlePagination,
}) {
  return (
    <Container>
      <ReactPaginate
        pageCount={Math.round(totalPages / maxItemPerPage)}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        nextLabel={">"}
        previousLabel={"<"}
        onPageChange={handlePagination}
      />
    </Container>
  );
}
