'use client';
import { useProductContext } from '@/context/productContext';
import { Button2 } from '.';

const Pagination = () => {
  const { items, pagination, setPagination } = useProductContext();
  return (
    <>
      {items.length > pagination.perPage * pagination.page && (
        <Button2
          className="w-72 m-auto"
          title="учитај још"
          onClick={() =>
            setPagination({ ...pagination, page: pagination.page + 1 })
          }
        />
      )}
    </>
  );
};

export default Pagination;
