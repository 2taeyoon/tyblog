import React, { useState } from 'react'
import Card from "../../components/list/Card";
import ReactPaginate from 'react-paginate';
import { CardPaginationProps } from "../../types/props";


export default function CardPagination({filteredCards}: CardPaginationProps) {
	const [currentPage, setCurrentPage] = useState(0); // react-paginate uses zero-based index
	
	const cardsPerPage = 3;
	const displayCards = filteredCards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

	const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

	const prevButton =
	<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" data-svg="pagination-previous"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11">
		</polyline>
	</svg>;

	const nextButton =
	<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" data-svg="pagination-next"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11">
		</polyline>
	</svg>;

	return (
	<div className="card_pagination">
		<div className="card_wrap">
			{displayCards.map(card => (
				<Card key={card.title} cards={[card]} />
			))}
		</div>
		<ReactPaginate
			previousLabel={prevButton}
			nextLabel={nextButton}
			breakLabel={'···'}
			pageCount={Math.ceil(filteredCards.length / cardsPerPage)}
			marginPagesDisplayed={1} // 앞뒤로 보여줄 페이지 수
			pageRangeDisplayed={2} // 현재 선택된 페이지 주변으로 보여줄 페이지 수
			onPageChange={handlePageClick}
			containerClassName={'pagination'}
			activeClassName={'active'}
		/>
	</div>
	)
}