import './index.css';

const Wrapper = ({ tag = 'div', children }) => {
    const WrapperTag = tag;

    return <WrapperTag className="wrapper">{children}</WrapperTag>;
}

export default Wrapper;