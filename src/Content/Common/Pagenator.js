import { useState } from "react"
import c from "./Pagenator.module.css"


export const Pagenator = ({ totalItemsCount, pageSize, currentPage, changePage, portionSize }) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    let portionCount = Math.ceil(pageCount / portionSize)

    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {portionNumber > 1 && <button onClick={()=> setPortionNumber(portionNumber - 1)}>Left</button>}
            <div className={c.pagesCount}>
                {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((e, i) => {
                    return <div className={currentPage === e && c.active} onClick={() => changePage(e)} key={i}>{e}</div>
                })}
            </div>
            {portionCount > portionNumber && <button onClick={()=> setPortionNumber(portionNumber + 1)}>Right</button>}
        </div>

    )
}