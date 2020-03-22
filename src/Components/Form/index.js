import React, { forwardRef } from "react";

import { FaSearch } from "react-icons/fa";

import { FormWrapper, SearchInput, Button } from "./style";

const Form = forwardRef(({ handleSubmit }, ref) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SearchInput placeholder="Pesquisar por país" ref={ref} type="search" />
      <Button>
        <FaSearch />
      </Button>
    </FormWrapper>
  );
});

export default Form;
