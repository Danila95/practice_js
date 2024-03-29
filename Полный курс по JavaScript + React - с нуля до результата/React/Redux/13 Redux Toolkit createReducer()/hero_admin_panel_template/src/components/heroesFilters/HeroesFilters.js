import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHttp} from '../../hooks/http.hook'
import classNames from 'classnames'
import Spinner from '../spinner/Spinner';
import {
    filtersFetchingError,
    filtersFetched,
    activeFilterChanged,
    filtersFetching,
    heroesFetching
} from '../../actions';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);
    const {request} = useHttp();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(heroesFetching(request));
        // dispatch('HEROES_FETCHING');
        // request("http://localhost:3001/filters")
        //     .then(data => dispatch(filtersFetched(data)))
        //     .catch(() => dispatch(filtersFetchingError()))

        // eslint-disable-next-line
    }, []);

    if (filtersLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (filtersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFilters = (arr) => {
        if (arr.length === 0) {
            return <h5 className='text-center mt-5'>Фильтры не найдены</h5>
        }

        return arr.map(({name, className, label}) => {
            // Используем библиотеку classnames и формируем классы динамически
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button 
                        key={name}
                        id={name}
                        className={btnClass}
                        onClick={() => dispatch(activeFilterChanged(name))}
                    >{label}
                    </button>
        })
    }

    const elements = renderFilters(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;