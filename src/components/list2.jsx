import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFetch } from "./store/getFetch"
import { addSelected } from "./store/getValute"
import classNames from 'classnames'

export const List2 = () => {
 const dispatch = useDispatch()
 const valute = useSelector(state => state.Valute.valute)	
 const selectedForClasses = useSelector(state => state.Valute.selected)	

 useEffect(() => {
	dispatch(getFetch())
 }, [dispatch])

	return (
		<div className="list_block">
			<h1>Относительно рубля</h1>
			<ul className="list_item">
				{
					valute.map(e => (
						<li className={classNames("list_elem", {
							selected: selectedForClasses?.CharCode === e.CharCode
						})}
						onClick={()=>{dispatch(addSelected(e))}}
						 key={e.CharCode}>

							<p>{e.CharCode}</p>
							<p>{e.Name}</p>
							<p>{e.Value}</p>
						</li>
					))
				}
			</ul>
		</div>
	)
}