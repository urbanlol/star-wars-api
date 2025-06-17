import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import ListItem from '../components/ListItem'
//import Skeletons from './Skeletons'
import Paginator from './Paginator'

function List({ category, parent }) {
	const [data, setData] = useState([])
	const [pageQty, setPageQty] = useState(0)
	const [page, setPage] = useState(1)
	const itemsPerPage = 10

	useEffect(() => {
		fetch(category)
			.then(response => response.json())
			.then(data => {
				setData(data)
				return data
			})
			.then(result => setPageQty(Math.ceil(result.length / itemsPerPage)))

		const sideBar = document.querySelector('.sideBar')

		sideBar.addEventListener('click', e => {
			if (e.target.nodeName === 'BUTTON') {
				setData([])
				setPageQty(0)
				setPage(1)
			}
		})
	}, [category])

	const paginatedItems = data.slice(
		(page - 1) * itemsPerPage,
		page * itemsPerPage
	)

	return (
		<>
			<Grid
				container
				spacing={2}
				justifyContent='center'
				sx={{ height: { md: 'calc(100vh - 99px)' } }}
			>
				<Grid item xs={12}>
					<Grid container spacing={2} justifyContent='center'>
						{data &&
							paginatedItems.map((el, i) => (
								<ListItem
									id={i + 1}
									data={el}
									key={el.name || el.title}
									parent={parent}
								/>
							))}
						{/* <Skeletons count={16} data={data} /> */}
					</Grid>
				</Grid>
				{!(pageQty === 1 || !pageQty) && (
					<Paginator
						count={pageQty}
						page={page}
						onChange={(_, num) => setPage(num)}
					/>
				)}
			</Grid>
		</>
	)
}

export default List
