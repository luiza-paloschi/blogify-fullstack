const renderPageNumbers = (currentPage, totalPages, handlePageChange) => {
    const pageNumbers = [];
    const visiblePages = 3;

    let startPage = Math.max(1, currentPage - visiblePages);
    let endPage = Math.min(totalPages, currentPage + visiblePages);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push('...');
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }

    return (
      <div>
        {pageNumbers.map((pageNumber) =>
          pageNumber === '...' ? (
            <span key={pageNumber}>{pageNumber}</span>
          ) : (
            <button
              key={pageNumber}
              className={`mx-2 ${pageNumber === currentPage ? 'active' : ''}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    );
  };

  export default renderPageNumbers;