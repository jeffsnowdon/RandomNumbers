import $ from 'jquery';
import NumberGeneratorModel from './ui/model/number-generator';
import NumberGeneratorView from './ui/view/number-generator';
import NumberStatsModel from './ui/model/number-stats';
import NumberStatsView from './ui/view/number-stats';

$(document).ready(function() { 
    let numberGeneratorModel = new NumberGeneratorModel();
    let numberGeneratorView = new NumberGeneratorView({
        model : numberGeneratorModel
    })

    let numberStatsModel = new NumberStatsModel();
    let numberStatsView = new NumberStatsView({
        model : numberStatsModel
    })

    var appContainer = $('.app-container');
    appContainer.empty();
    appContainer.append(numberGeneratorView.$el);
    appContainer.append(numberStatsView.$el);
    numberGeneratorView.render();
    numberStatsView.render();
});

