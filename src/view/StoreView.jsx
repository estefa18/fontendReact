import StoreCarousel from '../components/StoreCarousel';
import TheFooter from '../components/TheFooter';
import Counter from '../components/Counter';
import ParentComponent from '../components/ParentComponent';

function StoreView () {
    return (
        <div>           
            <StoreCarousel/>
            <Counter></Counter>
            <ParentComponent></ParentComponent>
            <TheFooter></TheFooter>
        </div>
    );
};

export default StoreView;