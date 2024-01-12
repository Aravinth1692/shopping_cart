
import './Header.css'

const Header = (props) => {
    return  (
                    <div className='HeaderCart'>
                       <span className='card_design'>Cart <span className='add_to_cart_design'>{props.data}</span></span> 
                    </div>
                );
}
export default Header;