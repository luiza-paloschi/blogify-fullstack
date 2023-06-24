import renderPageNumbers from "./Utils";


export default function Navigation({ currentPage, totalPages, handlePageChange }) {
  
    return (
      <div className="flex font-open-sans gap-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {renderPageNumbers(currentPage, totalPages, handlePageChange)}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  };