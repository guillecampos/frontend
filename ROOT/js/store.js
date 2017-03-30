
/* CONTROLLER PAGINATION FILTER FOR MUSIC OBJ SHOP */

app.controller('AdminController_Music', function ($scope, $filter) {
    
    var myStore = new store();
    $scope.currentPage = 0;
    $scope.pageSize = 9;
    $scope.numberOfPages = Math.ceil(myStore.products_sound.length / $scope.pageSize);

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.pagedItems = [];

    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };
    $scope.search = function (name) {
        $scope.filteredItems = $filter('filter')(myStore.products_sound, function (product) {
            for (var attr in product) {
                if (searchMatch(product[name], $scope.query))
                    return true;
            }
            return false;
        });
        $scope.currentPage = 0;
        $scope.groupToPages();
    };
    $scope.myFilter = function (column, category) {
        $scope.filteredItems = $filter('filter')(myStore.products_sound, function (product) {
            for (var attr in product) {
                if (searchMatch(product[column], category))
                    return true;
            }
            return false;
        });
        $scope.currentPage = 0;
        $scope.groupToPages();
    };
    $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
            if (i % $scope.pageSize === 0) {
                $scope.pagedItems[Math.floor(i / $scope.pageSize)] = [$scope.filteredItems[i]];
            } else {
                $scope.pagedItems[Math.floor(i / $scope.pageSize)].push($scope.filteredItems[i]);
            }
        }
    };
    // functions have been describe process the data for display
    $scope.myFilter();
    $scope.search();

});

function store() {
    
    this.products_sound = [
          { num: 1, code: '001s', category: 'Speakers', name: 'Sound G.', src: "product/1.jpg", src_retro: "product/1r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 200, discount: '20%', class: 'show-down' },
          { num: 2, code: '002s', category: 'Watches', name: 'Rhon Doe', src: "product/2.jpg", src_retro: "product/2r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 110, class: 'show-down' },
          { num: 3, code: '003s', category: 'Speakers', name: 'Patrol SR', src: "product/3.jpg", src_retro: "product/3r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 68, discount: '10%', class: 'show-up' },
          { num: 4, code: '004s', category: 'Station', name: 'Redo Bag', src: "product/4.jpg", src_retro: "product/4r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 134, class: 'show-down' },
          { num: 5, code: '005s', category: 'Phone', name: 'Mikore', src: "product/5.jpg", src_retro: "product/5r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 350, discount: '50%', class: 'show-up' },
          { num: 6, code: '006s', category: 'Station', name: 'Big Hoddie', src: "product/6.jpg", src_retro: "product/6r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 127, class: 'show-down' },
          { num: 7, code: '007s', category: 'Watches', name: 'Roberto J.', src: "product/7.jpg", src_retro: "product/7r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 500, discount: '30%', class: 'show-up' },
          { num: 8, code: '008s', category: 'Phone', name: 'Rigo S.', src: "product/8.jpg", src_retro: "product/8r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 346, class: 'show-down' },
          { num: 9, code: '009s', category: 'Speakers', name: 'Eliteme', src: "product/9.jpg", src_retro: "product/9r.jpg", description: 'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. ', price: 234, discount: '30%', class: 'show-down'}];

}

function detailsprod() {
    this.details_sound = [
          { id: '001s', material: 'Pelt', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '002s', material: 'Wood', power: '30-140W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '003s', material: 'Pelt', power: '10-150W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '004s', material: 'Metal', power: '40-200W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '005s', material: 'Wood', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '006s', material: 'Wood', power: '10-150W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '007s', material: 'Metal', power: '10-180W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '008s', material: 'Metal', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg' },
          { id: '009s', material: 'Pelt', power: '10-100W', size: '(LxAxP) 194x296x200 mm', weight: '5,5 kg'}];
}



/*** Get Prouct Sound ***/
store.prototype.getProduct_sound = function (code) {
    for (var i = 0; i < this.products_sound.length; i++) {
        if (this.products_sound[i].code == code)
            return this.products_sound[i];
    }

    return null;
}

detailsprod.prototype.getDetail_sound = function (code) {
    for (var i = 0; i < this.details_sound.length; i++) {
        if (this.details_sound[i].id == code)

            return this.details_sound[i];

    }
    return null;
}