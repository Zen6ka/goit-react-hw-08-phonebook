import { useDispatch, useSelector } from 'react-redux';
import { Input, Title } from './Filter.styled'
import { setFilter } from '../../redux/filterSlice';
import { selectContacts, selectFilter } from '../../redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  
  const handleFilterChange = (evt) => {
    dispatch(setFilter(evt.target.value.trim()));
  };

  return useSelector(selectContacts).length < 1 ? (
    <Title>Add your first contact</Title>
  ) : (
    <Input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}