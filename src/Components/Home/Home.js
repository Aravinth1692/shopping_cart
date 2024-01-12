import React from "react";
import './Home.css';
import jsonData from "../../cardData.json";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.rentVlaue = false;
        this.subvalue = false;
        this.count = 0;
        this.state = {
            count: 1
        }
    }
    items = jsonData["items"];
    onSubmit = (event, id,status) => {
        this.count = this.count + 1;
        this.items[id]['disdBtnble'] = 'false';
        this.setState({ count: this.count });
        this.props.count(this.count);
    };
    
    onRemove = (event, id,status) => {
        this.count = (this.count) - 1;
        this.return1(this.count)
        delete this.items[id]['disdBtnble'];
        this.setState({ count: this.count });
        this.props.count(this.count);
    };
    return1 = (val) =>{
        if(val === -1) {
            this.count = 0;
        }else{
            this.count = val;
        }
    };

    submitValue = (value) =>{
        if(this.subvalue === false) {
            this.count = (this.count) - 1;
            this.subvalue = true;
        }else{
            this.count = value;
        }
    }
    render() {
        return (

            <div className="display_flex">

                {this.items.map((item) => (
                    <div className="ItemDesign">
                        <div className='card_bg_color'>
                        {(item.sale === true) && (
                            <div className='batch_design'>
                                sale
                            </div>
                               )}
                        {(item.sale === false) && (
                            <div className='margin_tp'>
                             
                            </div>
                               )}
                            <div className='sale_design'>

                                <div> {item.name}</div>
                            </div>
                        </div>
                        <div className="desc_mrg_top">
                            {item.title}
                        </div>
            {(item.disdBtnble === "false") && (
            <div className="addCartMargin">
            <button type='submit' className='addToCart_color' onClick={(event) => {
            this.onRemove(event,item.id,item.disdBtnble);
            event.preventDefault(); // Prevent the default behavior
        }} >Remove to Cart</button>
                    </div>
                    )}
            {(item.disdBtnble !== "false") && (
            <div className="addCartMargin">
            <button type='submit' className='addToCart_color' onClick={(event) => {
            this.onSubmit(event,item.id,item.disdBtnble);
            event.preventDefault(); // Prevent the default behavior
        }} >Add to Cart</button>
                    </div>
                    )}

                    </div>
                ))}
            </div>
        );
    }

}

export default Home;