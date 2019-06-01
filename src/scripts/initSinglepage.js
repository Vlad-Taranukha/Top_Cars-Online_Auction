import startSimilarVehichesSlider from "./similarVehiclesSlider";
import clearContentBlock from "./clearContentBlock";
import setSimilarVehiclesHeaderEqualHeight from "./similarVehichesHeaderEqualHeight";

function initSinglePage() {
    clearContentBlock();
    $('.header_slider').css('display', 'none');
    $('.single_car_wrapper').css('display', 'block');
    $('.view_similar_vehicles_wrapper').css('display', 'block');

    startSimilarVehichesSlider();
    setSimilarVehiclesHeaderEqualHeight();
}

export default initSinglePage;