import { v4 as uuidv4 } from 'uuid';
import {useHttp} from '../../hooks/http.hook'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addHeroe } from '../heroesList/HeroesSlice'

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
            .then(data => setElements(data.filter(item => item.name !== 'all')))

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
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(addHeroe(newHero)))
            .catch(err => console.log(err))

        setName('')
        setDescription('')
        setElement('')
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
                    value={description}
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
                    value={element}
                    onChange={(e) => setElement(e.target.value)}
                >
                    <option >Я владею элементом...</option>
                    {elements.map(item =>
                        <option key={item.name} value={item.name}>{item.label}</option>
                    )}
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={(e) => handlerAddHeroe(e)}>Создать</button>
        </form>
    )
}

export default HeroesAddForm;