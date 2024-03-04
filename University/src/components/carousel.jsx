export default function Carousel({images, style}) { 
    return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide m-sm-4 shadow rounded-2"
        data-bs-ride="carousel"
        >
        <div className="carousel-indicators">
             {
                images.map((element,index) => {       
                    if (element!==undefined) {
                      if (index===0) {
                      return(
                          <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={index}
                              className="active"
                              aria-current="true"
                              aria-label={`Slide ${index++}`}
                          ></button>
                      ) 
                    }else{
                      return(
                          <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={index}
                              aria-current="true"
                              aria-label={`Slide ${index++}`}
                          ></button>
                      ) 
                    }
                    }
                })
            }
        </div>
        <div className="carousel-inner rounded-2">
            {
                images.map(element => {
                    return(
                        <div className="carousel-item  active">
                            <img src={element} alt="..." style={{ ...style }} />
                        </div>
                    )
                })
            }

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
