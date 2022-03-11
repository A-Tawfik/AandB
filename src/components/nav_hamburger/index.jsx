const Hamburger = ({ onClickCallback }) => {

    return (
        <div className='hamburger' onClick={() => onClickCallback()} >
            <div className="inner"></div>

        </div>
    );
}

export default Hamburger;
