import pdfs from '../../Images/catalogue.pdf'; 
import Home from '../HOme/Home';

const Catalog = () => {

    return(
        <>
<Home/>
      <embed
    src={pdfs}
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="800px"
    width="100%"
></embed>

   </>
    )
}
export default Catalog;