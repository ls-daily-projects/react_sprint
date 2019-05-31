import React from "react"

const PaginationButtonRow = ({
    totalButtons,
    buttonsPerPage = 10,
    handleClick
}) => {
    const buttonCount = Array(Math.floor(totalButtons / buttonsPerPage))
        .fill("")
        .map((_, i) => i + 1)
    return (
        <div className="pagination-list">
            {buttonCount.map(count => (
                <button key={count} onClick={() => handleClick(count)}>
                    {count}
                </button>
            ))}
        </div>
    )
}

export default PaginationButtonRow
