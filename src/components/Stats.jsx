import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faDog, faCat} from '@fortawesome/free-solid-svg-icons';

export default function Stats({ items }) {

  if(!items.length){
    return(
      <p className="stats">
        <em>Create a checklist for your furry friend <FontAwesomeIcon icon={faDog} /> <FontAwesomeIcon icon={faCat} /> </em>
      </p>
    )
  }

  const numItems = items.length
  const numPacked = items.filter((item)=> item.packed).length
  const percentage = Math.round((numPacked/numItems) * 100)
  return (
    <>
      <footer className="stats">
        <em>
          {percentage === 100 ? "You're all set! Ready to go with your furry friend"
          :
          `You have ${numItems} items on your pet care list, 
          and you have already prepared ${numPacked} (${percentage}%)` 
          }
        </em>
      </footer>
    </>
  );
}