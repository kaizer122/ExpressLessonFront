import { useEffect, useState } from "react";

const usePagination = ({ defaultLimit = 10, maxCount = 10 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(defaultLimit);
  const [maxPages, setMaxPages] = useState(Math.floor(maxCount / limit));
  const [skip, setSkip] = useState(0);
  const [pagesToShow, setPagesToShow] = useState(
    makePagesArray(currentPage, maxPages)
  );

  useEffect(() => {
    resetPagination();
    setMaxPages(Math.floor(maxCount / limit));
  }, [maxCount, limit]);

  // missing use effect dependencies are on purpose and this will not work as intended if they are added.
  useEffect(() => {
    if (currentPage % 4 === 0)
      setPagesToShow(makePagesArray(currentPage, maxPages));
    else if (!pagesToShow.includes(currentPage)) {
      setPagesToShow(makePagesArray(currentPage, maxPages));
    }
  }, [currentPage, limit, maxCount, maxPages]);

  const updateLimit = (n) => setLimit(Number(n) || defaultLimit);

  const goToPage = (page) => {
    if (page <= maxPages + 1) {
      setCurrentPage(page - 1);
      setSkip((page - 1) * limit);
    }
  };
  const goToNext = () => {
    const newPage = currentPage + 1;
    if (newPage <= maxPages) {
      setCurrentPage(newPage);
      setSkip(newPage * limit);
    }
  };

  const goToPrevious = () => {
    const newPage = currentPage - 1;
    if (newPage >= 0) {
      setCurrentPage(newPage);
      setSkip(newPage * limit);
    }
  };

  const resetPagination = () => {
    setSkip(0);
    setCurrentPage(0);
    setPagesToShow(makePagesArray(currentPage, maxPages));
  };

  return {
    skip,
    limit,
    paginationProps: {
      limit,
      currentPage: currentPage + 1,
      goToPage,
      goToNext,
      goToPrevious,
      setLimit: updateLimit,
      pagesToShow,
    },
  };
};

const makePagesArray = (currentPage, maxPages) => {
  const leftPages = maxPages - currentPage;
  if (leftPages >= 4)
    return [currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4];
  else {
    const res = Array.from(
      { length: leftPages + 1 },
      (_, i) => currentPage + 1 + i
    );
    while (res.length < 4 && res[0] - 1 > 1) {
      res.unshift(res[0] - 1);
    }
    return res;
  }
};

export default usePagination;
