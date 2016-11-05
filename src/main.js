import $ from 'jquery';
import NumberGeneratorModel from './model/number-generator';
import NumberGeneratorView from './view/number-generator';

$(document).ready(function() {
    console.log("test");
    let numberGeneratorModel = new NumberGeneratorModel();
    let numberGeneratorView = new NumberGeneratorView({
        model : numberGeneratorModel
    })
    var appContainer = $('.app-container');
    appContainer.empty();
    appContainer.append(numberGeneratorView.$el);
    numberGeneratorView.render();
});
