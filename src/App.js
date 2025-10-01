
import './App.css';
import { Converter2 } from './components/converter2';
import { ListConverter2 } from './components/licstConverter2';
import { List2 } from './components/list2';




function App() {
	return (
		<div className="App">
			<div className='block_main'>
				<List2 />
				<ListConverter2 />
			</div>

			<Converter2 />
		</div>
	);
}

export default App;
