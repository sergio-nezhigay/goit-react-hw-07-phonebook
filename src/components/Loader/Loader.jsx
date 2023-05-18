import React from 'react';

import { useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { getError, getIsLoading } from 'redux/contacts/contactsSelectors';
import { LoaderContainer } from './Loader.styled';

export function Loader() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <LoaderContainer>
      {isLoading && !error && (
        <ThreeDots
          height="30"
          width="100"
          radius="9"
          color="#1da1f2"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}
    </LoaderContainer>
  );
}
