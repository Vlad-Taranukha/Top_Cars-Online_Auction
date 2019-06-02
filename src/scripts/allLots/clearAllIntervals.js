function clearAllIntervals() {
    let max_id;

    max_id = setInterval(function () {});
    while (max_id--) {
        clearInterval(max_id);
    }
}

export default clearAllIntervals;