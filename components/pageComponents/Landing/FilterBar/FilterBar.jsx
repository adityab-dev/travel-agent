import Button from 'components/common/Button/Button';
import FilterButton from './FilterButton/FilterButton';
import './FilterBar.scss';
import search from './search.svg';

function FilterBar() {
  return (
    <article className='filter-container align-center'>
      <FilterButton
        heading='Location'
        filterText='Where are you Going ?'
      />

      <FilterButton
        heading='Date'
        filterText='When will you go?'
      />

      <FilterButton
        heading='People'
        filterText='How many people ?'
      />
      
      <Button>
        <img
          id='search-img'
          src={search.src}
          alt='Search'
        />
        Search
      </Button>
    </article>
  );
}

export default FilterBar;
