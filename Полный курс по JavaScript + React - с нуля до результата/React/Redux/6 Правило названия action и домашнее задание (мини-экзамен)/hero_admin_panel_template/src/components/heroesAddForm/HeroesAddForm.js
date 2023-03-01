import { v4 as uuidv4 } from 'uuid';
import {useHttp} from '../../hooks/http.hook'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHeroe } from '../../actions'

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться

const HeroesAddForm = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [element, setElement] = useState('')
    const [elements, setElements] = useState([])
    const {request} = useHttp();

    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(data => setElements(data))

        // eslint-disable-next-line
    }, []);

    const handlerAddHeroe = (e) => {
        e.preventDefault()
        const newHero = {
            id: uuidv4(),
            name,
            description,
            element
        }
        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
        dispatch(addHeroe(newHero))
    }

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={(e) => setElement(e.target.value)}
                >
                    <option >Я владею элементом...</option>
                    <option value={elements[1]}>Огонь</option>
                    <option value={elements[2]}>Вода</option>
                    <option value={elements[3]}>Ветер</option>
                    <option value={elements[4]}>Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={(e) => handlerAddHeroe(e)}>Создать</button>
        </form>
    )
}

export default HeroesAddForm;