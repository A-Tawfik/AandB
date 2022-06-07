import CountdownCard from '../components/countdown_card'
import DetailsCard from '../components/details_card'
import AccomodationsCard from '../components/accomodations_card'

function Details() {
  return (
    <section className='details'>
      <CountdownCard />
      <DetailsCard />
      <AccomodationsCard />
    </section>
  );
}

export default Details;
