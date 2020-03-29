import React from "react";

import ReactPaginate from "react-paginate";

import { Container } from "./style";

export default function Pagination({ totalPages, handlePagination }) {
  return (
    <Container>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        nextLabel={">"}
        previousLabel={"<"}
        onPageChange={handlePagination}
      />
    </Container>
  );
}
