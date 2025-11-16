import React from 'react';
import { RootState } from './store';
import { addTotal, changeValue } from "./store/action"
import { useAppDispatch, useAppSelector } from './store/hooks';

export const ListConverter2: React.FC = () => {
	const converterList = useAppSelector((s: RootState) => s.Valute.selected);
	const value = useAppSelector(s => s.Valute.value);
	const total = useAppSelector(s => s.Valute.total);
	const dispatch = useAppDispatch()

	const getTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const result = converterList ? Number(inputValue) * converterList.Value : null;
		const formatted = result
			? new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'RUB',
				maximumFractionDigits: 2
			}).format(result)
			: '';
		dispatch(changeValue(inputValue))
		dispatch(addTotal(formatted))
	}

	return (
		<div className="ListConverter_block">
			<h2>{converterList ? converterList.Name : 'Выберите валюту'}</h2>
			<input
				value={value}
				type="number"
				onChange={getTotal}
				placeholder="Введите сумму...."></input>
			<p className="total">ИТОГО: {total}</p>
		</div>
	)
}