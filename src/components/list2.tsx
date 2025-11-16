import React, { useEffect } from "react"
import { getFetch } from "./store/getFetch"
import { addSelected } from "./store/action"
import classNames from 'classnames'
import { Values } from "./store/types";
import { useAppDispatch, useAppSelector } from './store/hooks';

export const List2: React.FC = () => {
	const dispatch = useAppDispatch()
	const valute = useAppSelector(s => s.Valute.valute);
	const selectedForClasses = useAppSelector(s => s.Valute.selected);

	useEffect(() => {
		dispatch(getFetch())
	}, [dispatch])

	return (
		<div className="list_block">
			<h1>Относительно рубля</h1>
			<ul className="list_item">
				{
					valute.map((e: Values) => (
						<li className={classNames("list_elem", {
							selected: selectedForClasses?.CharCode === e.CharCode
						})}
							onClick={() => { dispatch(addSelected(e)) }}
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