import { B2, FilterHeading } from 'components/common/typography/Typography';
import './FilterButton.scss';
import down_arrow from './down_arrow.svg';

function FilterButton({ heading, filterText }) {
  return (
    <article className='btn-container'>
      <section className='filter-head align-center'>
        <FilterHeading>{heading}</FilterHeading>
        <img
          src={down_arrow.src}
          alt='down'
        />
      </section>

      <section className='filter-text'>
        <B2>{filterText}</B2>
      </section>
    </article>
  );
}

export default FilterButton;
