

export const meta = () => {
    return {
      title: 'Hydrogen',
      description: 'A custom storefront powered by Hydrogen',
    };
  };
  export default function Index() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }

  function Header(){
    return(
        <div className="HeaderMain">
            <Announcement />
            <NavBar />

        </div>
    );
  };

  function NavBar(){
    return(
        <div  className="NavBarMain"> 
            <div className="NavBarInner">
                <NavBarLogo />
                <NavBarOptions />
                <NavBarSearch />
                <NavBarCart />
            </div>
            
        </div>
    );
  };

  function NavBarLogo(){
    return(
        <div className="NavBarLogo">
            <img src="https://cdn.shopify.com/s/files/1/0746/5218/8974/files/selflovelogo.png?v=1680721471" alt="image" />
        </div>
    );
  };

  function NavBarSearch(){
    return(
        <div className="NavBarSearch">
            <p> search</p>
        </div>
    );
  };

  function NavBarOptions(){
    return(
        <div className="NavBarOptions">
            <p> this is tyhe options </p>
        </div>
    );
  };

  function NavBarCart(){
    return(
        <div className="NavBarCart">
            <p>  cart </p>
        </div>
    );
  };
  function Announcement(){
    return(
        <div  className="AnnounceMain">
            <p>announcer</p>
        </div>
    );
  };
  function Body(){
    return(
        <div className="bodyMain">
            <SlideShow />
        </div>
    );
  };

  function SlideShow(){
    return(
        <div className="slideShow"> 
            <div className="slideShowCard">
               <SlideShowInner />
            </div>
            <img className="imagSlideShow" src="https://cdn.shopify.com/s/files/1/0746/5218/8974/files/andrey-k-Ng9yfijbe0A-unsplash_1.jpg?v=1680723691" alt="image" />
        </div>
    );
  };

  function SlideShowInner(){
    return(
        <div className="SlideShowInner">
            <p>hello</p>
        </div>
    );
  };
  function Footer(){
    return(
        <div>
             <p>footer</p>   
        </div>
    );
  };