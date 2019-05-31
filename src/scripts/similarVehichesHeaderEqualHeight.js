function setSimilarVehiclesHeaderEqualHeight() {
    let h = [];
    $('.view_similar_vehicle_item_info h3').each(function () {
        h.push($(this).height());
    });
    let maxH = Math.max(...h);
    $('.view_similar_vehicle_item_info h3').height(maxH);
}

export default setSimilarVehiclesHeaderEqualHeight;