import $ from 'jquery';
import NumberGeneratorModel from './ui/model/number-generator';
import NumberGeneratorView from './ui/view/number-generator';
import NumberStatsModel from './ui/model/number-stats';
import NumberStatsView from './ui/view/number-stats';
import NumberHistoryModel from './ui/model/number-history';
import NumberHistoryView from './ui/view/number-history';

$(document).ready(function () {
    let numberGeneratorModel = new NumberGeneratorModel();
    let numberGeneratorView = new NumberGeneratorView({
        model: numberGeneratorModel
    })

    let numberStatsModel = new NumberStatsModel();
    let numberStatsView = new NumberStatsView({
        model: numberStatsModel
    })

    let numberHistoryModel = new NumberHistoryModel();
    let numberHistoryView = new NumberHistoryView({
        model: numberHistoryModel
    })

    var appContainer = $('.app-container');
    appContainer.empty();
    appContainer.append(numberGeneratorView.$el);
    appContainer.append(numberStatsView.$el);
    appContainer.append(numberHistoryView.$el);
    numberGeneratorView.render();
    numberStatsView.render();
    numberHistoryView.render();
});

