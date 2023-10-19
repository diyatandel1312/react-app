import React,{useState} from 'react'


 const Header = () => {
    

    const [highlighted,setHighlighted] =useState(false);
    
    function clickHandler(){
        setHighlighted(isHighlighted => !isHighlighted);
    }
    
    return (
        <div>
            <h1 className={highlighted ? 'active':''}>Style me!</h1>
            <button style={{fontSize:30}} onClick={clickHandler}>Toggle style</button>
        </div>
    );
}

export default Header;
