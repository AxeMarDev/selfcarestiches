

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
                <p>navbar</p>
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
  function Announcement(){
    return(
        <div  className="AnnounceMain">
            <p>announcer</p>
        </div>
    );
  };
  function Body(){
    return(
        <div>
            <p>body</p>            
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