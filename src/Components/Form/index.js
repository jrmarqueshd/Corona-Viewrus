import React, { forwardRef } from "react";

import { FormWrapper, SearchInput, Button } from "./style";

const Form = forwardRef(({ handleSubmit }, ref) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SearchInput ref={ref} type="search" />
      <Button>Buscar</Button>
    </FormWrapper>
  );
});

export default Form;
