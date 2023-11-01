
import whatsss from '../../Images/whatsapps.webp';
import './whatsappchat.css';
const Whatsappchat = () => {
  return (
    <div>
  <div id="bottom-banner" tabindex="-1" class="fixed bottom-0 right-0 z-50 flex justify-between p-4 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 bg-transparent">

    <div class="flex items-center">
       {/* <a href="https://wa.me/+447445953220" className="text-blue-700 hover:text-blue-900">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>
  */}
          <button data-dismiss-target="#bottom-banner" type="button" class="flex-shrink-0 -flex justify-center w-7 rounded-3xl h-7 items-start text-gray-400  rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white bg-green-500 whatsbtn">

  <a href="https://wa.me/+447445953220" className="text-blue-700 hover:text-blue-900 ">
  <img src={whatsss} alt="whatsapp" className='iconimg inline-block mr-2' />
  <span className='txtss font-bold text-base'>Whatsapp</span>
  </a>
  </button>

    </div>
</div>

    </div>
  )
}

export default Whatsappchat