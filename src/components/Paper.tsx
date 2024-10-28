
import { Container} from "react-bootstrap";

import Particle from "./Particle";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const paperLink = "/strion.pdf";

function Paper() {


 

  return (
    <div style={{ width:"90vw", marginInline:"5vw"}} >
      <Container fluid className="resume-section" >
        <Particle />
      

      
        <iframe src={paperLink} style={{width:"100%", height:"80vh"}} />
          
         
    

       
      </Container>
    </div>
  );
}

export default Paper;
